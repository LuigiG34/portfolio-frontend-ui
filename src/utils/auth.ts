interface JwtPayload {
    username: string;
    roles: string[];
    exp: number;
    iat: number;
}

export function isAdmin(requiredRole: string) {
    // Get the token
    const token = localStorage.getItem('token');
    if(!token) {
        return false;
    }

    // Get the payload inside the token
    const payload: JwtPayload = JSON.parse(atob(token.split('.')[1]));

    // Make sure token isn't expired
    if(tokenIsExpired(payload)) {
        return false;
    }

    // Make sure user is an admin
    return isRequiredRole(payload, requiredRole);
}

function tokenIsExpired(payload: JwtPayload) {
    if (payload.exp * 1000 < Date.now()) {
        localStorage.removeItem('token');
        return true;
    }

    return false;
}

function isRequiredRole(payload: JwtPayload, requiredRole: string) {
    if (requiredRole && !payload.roles.includes(requiredRole)) {
        return false;
    }

    return true;
}