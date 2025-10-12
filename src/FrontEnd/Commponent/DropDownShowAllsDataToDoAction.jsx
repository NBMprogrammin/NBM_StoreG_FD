import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";

import IconButton from "@mui/joy/IconButton";
import MoreVert from "@mui/icons-material/MoreVert";
import { useEffect, useMemo } from "react";
import MenuItemShow from "../alert and Delog/TableCont/MenuItemShow";

let datShowAllMenu = "";

export default function DropDownShowAllsDataToDoAction({
  HandleToDoActionsNow,
  DatShowDropDowActions,
  dispat,
  datClick,
}) {
  useEffect(() => {
    if (DatShowDropDowActions != undefined) {
      datShowAllMenu = DatShowDropDowActions.map((dat) => {
        return (
          <div key={dat.id}>
            <MenuItemShow
              Paragrafe={dat.name}
              disabled={dispat}
              dataToDoAction={datClick}
              typActiionFunction={dat.Typaction}
              HandleToDoActionsNow={HandleToDoActionsNow}
            />
          </div>
        );
      });
    }
  }, [DatShowDropDowActions]);
  return (
    <>
      <Dropdown>
        <MenuButton
          slots={{ root: IconButton }}
          slotProps={{ root: { variant: "outlined", color: "neutral" } }}
        >
          <MoreVert />
        </MenuButton>

        <Menu placement="bottom-end">{datShowAllMenu}</Menu>
      </Dropdown>
    </>
  );
}
