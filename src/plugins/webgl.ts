/* eslint-disable @typescript-eslint/no-explicit-any */
import * as THREE from 'three'; 

export default class WebGL {
    scene: THREE.Scene;
    vertex: string;
    material: any;
    fragment: string;
    uniforms: any;
    renderer: THREE.WebGLRenderer;
    width: number;
    height: number;
    container: HTMLElement | null;
    images: HTMLImageElement[];
    camera: THREE.PerspectiveCamera;
    current: number;
    textures: THREE.Texture[];
    isRunning: boolean;
    paused: boolean;
    imageAspect: number;
    plane: THREE.Mesh;
    geometry: THREE.PlaneGeometry;

    constructor(e: any) {
        this.scene = new THREE.Scene();
        this.vertex = "varying vec2 vUv;void main() {vUv = uv;gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );}";
        this.material = e.material;
        this.fragment = e.fragment;
        this.uniforms = e.uniforms;
        this.renderer = new THREE.WebGLRenderer();
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(this.width, this.height);
        this.renderer.setClearColor(2303786, 1);
        this.container = document.getElementById("canvas-slider");
        this.images = Array.from(document.querySelectorAll(".slide-img")) as HTMLImageElement[];
        
        if (this.container) {
             this.width = this.container.offsetWidth;
             this.height = this.container.offsetHeight;
             this.container.appendChild(this.renderer.domElement);
         }
        
        this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.001, 1e3);
        this.camera.position.set(0, 0, 2);
        this.current = 0;
        this.textures = [];
        this.isRunning = false;
        this.paused = true;
        this.imageAspect = 1;
        
        // placeholders before initialized
        this.geometry = new THREE.PlaneGeometry(1, 1, 2, 2);
        this.plane = new THREE.Mesh(this.geometry, this.material);

        this.initiate(() => {
            this.setupResize();
            this.addObjects();
            this.resize();
            this.play();
        });
    }

    initiate(e: () => void) {
        const t: Promise<THREE.Texture>[] = [];
        this.images.forEach((img, s) => {
            const h = new Promise<THREE.Texture>((resolve) => {
                this.textures[s] = new THREE.TextureLoader().load(img.src, resolve);
            });
            t.push(h);
        });
        Promise.all(t).then(() => {
            e();
        });
    }

    setupResize() {
        window.addEventListener("resize", this.resize.bind(this));
    }

    resize() {
        if (!this.container) return;
        
        let e, t;
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.renderer.setSize(this.width, this.height);
        this.camera.aspect = this.width / this.height;
        
        if (this.textures.length > 0 && this.textures[0].image) {
             const img = this.textures[0].image as HTMLImageElement | any;
             this.imageAspect = img.height / img.width;
        }

        if (this.height / this.width > this.imageAspect) {
             e = (this.width / this.height) * this.imageAspect;
             t = 1;
        } else {
             e = 1;
             t = this.height / this.width / this.imageAspect;
        }

        if (this.material && this.material.uniforms) {
            this.material.uniforms.resolution.value.x = this.width;
            this.material.uniforms.resolution.value.y = this.height;
            this.material.uniforms.resolution.value.z = e;
            this.material.uniforms.resolution.value.w = t;
        }

        const i = this.camera.position.z;
        this.camera.fov = (180 / Math.PI) * 2 * Math.atan(1 / (2 * i));
        this.plane.scale.x = this.camera.aspect;
        this.plane.scale.y = 1;
        this.camera.updateProjectionMatrix();
    }

    addObjects() {
        const holder = document.getElementById("showcase-slider-holder");
        const patternImg = holder ? holder.getAttribute("data-pattern-img") : null;
        const loader = new THREE.TextureLoader();
        const e = patternImg ? loader.load(patternImg) : new THREE.Texture();
        
        e.wrapS = e.wrapT = THREE.RepeatWrapping;
        
        this.material = new THREE.ShaderMaterial({
            uniforms: {
                effectFactor: { value: 0.15 },
                dispFactor: { value: 0 },
                currentImage: { value: this.textures[0] || null },
                nextImage: { value: this.textures[1] || null },
                disp: { value: e },
                resolution: { value: new THREE.Vector4() },
            },
            vertexShader: this.vertex,
            fragmentShader: this.fragment,
            transparent: true,
            opacity: 1,
        } as any);

        this.geometry = new THREE.PlaneGeometry(1, 1, 2, 2);
        this.plane = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.plane);
    }

    stop() {
        this.paused = true;
    }

    play() {
        this.paused = false;
        this.render();
    }

    render() {
        if (!this.paused) {
            requestAnimationFrame(this.render.bind(this));
            this.renderer.render(this.scene, this.camera);
        }
    }
}
