import { Button } from "@mui/joy";
import AvatarImgForAllType from "../AvatarImgForAllType";
export default function CartShowDataMessage({
  handleSendRequestCoseThisMessage,
  message,
  handleSendRequestTureOk,
}) {
  return (
    <div className={"CardShowDataUserProfile"} key={message.id}>
      <div className={"showImgAndNameUserAndType"}>
        <AvatarImgForAllType
          style={"ImageForfilUser"}
          MyAvatar={message.image ? message.image : ""}
        />
        <div className={"boxNameAndTypeAction"}>
          <h3>{message.NameUserSendMessage}</h3>
          <div style={{ direction: "rtl" }}>
            <p className="pragrafProgil">{message.titel}</p>

            <p className="pragrafProgil">{message.message}</p>

            <p
              className={
                message.TypeMessage == "StopTewve"
                  ? "dispboxnone"
                  : "pragrafProgil"
              }
            >
              حالت الرسالة :{" "}
              {message.TypeMessage == "Waite"
                ? " الانتظار "
                : "" || message.TypeMessage == "Confirmed"
                ? " تم القبول"
                : "" || message.TypeMessage == "Close"
                ? " تم رفض "
                : "" || message.TypeMessage == "Stop"
                ? " تم العاء "
                : ""}
            </p>

            <div
              className={
                message.TypeMessage == "StopTewve" ? "dispboxnone" : ""
              }
              style={{
                display: "flex",
                gap: "15px",
              }}
            >
              <Button
                aria-disabled={
                  message.TypeRelationMessageUser == 1 ||
                  message.CloceMessage == 1
                }
                style={{ fontSize: "20px" }}
                disabled={message.TypeMessage != "Waite"}
                onClick={() => handleSendRequestCoseThisMessage(message)}
              >
                {message.sheckMessage == "Ratibe" ? "رفض" : "رفض علاقة"}
              </Button>

              <Button
                aria-disabled={
                  message.TypeRelationMessageUser == 1 ||
                  message.CloceMessage == 1
                }
                style={{ fontSize: "20px" }}
                disabled={message.TypeMessage != "Waite"}
                onClick={() => handleSendRequestTureOk(message)}
              >
                {message.sheckMessage === "Ratibe" ? "تاكيد" : "موافق"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
