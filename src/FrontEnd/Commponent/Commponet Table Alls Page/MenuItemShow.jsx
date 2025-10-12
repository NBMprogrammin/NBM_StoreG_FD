import { ListItemDecorator, MenuItem } from "@mui/joy";
import Edit from "@mui/icons-material/Edit";

export default function MenuItemShow({
  Paragrafe,
  disabled,
  dataToDoAction,
  HandleToDoActionsNow,
  typActiionFunction,
  keyId,
}) {
  return (
    <MenuItem
      key={keyId}
      disabled={disabled}
      onClick={() =>
        HandleToDoActionsNow(dataToDoAction, typActiionFunction, keyId)
      }
    >
      <ListItemDecorator key={keyId}>
        <Edit key={keyId + 22} />
      </ListItemDecorator>{" "}
      {Paragrafe}
    </MenuItem>
  );
}
