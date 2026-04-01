import { type Dispatch, type SetStateAction } from "react";
import Modal from "react-bootstrap/Modal";
import TeamDetailsArea from "../team/team-details-area";
import type { ITeamDT } from "../../types/team-d-t";

// prop type
type IProps = {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  teamItem: ITeamDT;
};

export default function TeamModal({ showModal, setShowModal }: IProps) {
  const handleClose = () => setShowModal(false);
  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      style={{
        backgroundImage: `url(/assets/img/home-01/team/team-details-bg.png)`,
      }}
    >
      <Modal.Header closeButton>
        <button type="button" className="btn-close"></button>
      </Modal.Header>
      <Modal.Body>
        <TeamDetailsArea id={1} />
      </Modal.Body>
    </Modal>
  );
}
