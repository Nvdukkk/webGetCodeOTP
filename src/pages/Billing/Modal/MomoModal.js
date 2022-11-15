import Modal from "react-modal";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

Modal.setAppElement("#root");

function MomoModal({ openModal, setIsOpen }) {
  const toastCopySuccess = () =>
    toast.success("Đã sao chép!", {
      pauseOnHover: false,
    });

  const userDonate =
    JSON.parse(localStorage.getItem("data")).username + "donate";

  return (
    <div>
      <Modal
        isOpen={openModal}
        onRequestClose={() => setIsOpen(false)}
        overlayClassName={{
          base: "overlay-base",
          afterOpen: "overlay-after",
          beforeClose: "overlay-before",
        }}
        className={{
          base: "content-base",
          afterOpen: "content-after",
          beforeClose: "content-before",
        }}
        closeTimeoutMS={500}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h3>Donate MoMo</h3>
          </div>
          <div className="modal-body">
            <label>
              Tài khoản nhận tiền: <strong>NGUYỄN VĂN ĐỨC</strong>
            </label>

            <form>
              <input value="0982097760" className="momo-border" disabled></input>
              <CopyToClipboard
                text="0982097760"
                onCopy={() => toastCopySuccess()}
              >
                <span>Sao chép</span>
              </CopyToClipboard>
            </form>

            <label>Nội dung chuyển khoản </label>
            <form>
              <input value={userDonate} className="momo-border" disabled></input>
              <CopyToClipboard
                text={userDonate}
                onCopy={() => toastCopySuccess()}
              >
                <span>Sao chép</span>
              </CopyToClipboard>
            </form>
            <span className="label bg-momo-span">Lưu ý</span>
            <ul>
              <li>
                Vui lòng nhập đúng <strong>NỘI DUNG CHUYỂN KHOẢN</strong>.
              </li>
              <li>
                Mọi khoản donate là hoàn toàn tùy tâm và sẽ không được hoàn trả.
              </li>
            </ul>
          </div>
          <div className="modal-footer">
            <button onClick={() => setIsOpen(false)}>Đóng</button>
          </div>
        </div>
      </Modal>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default MomoModal;
