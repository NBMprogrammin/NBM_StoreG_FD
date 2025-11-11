import { Button, Input } from "@mui/joy";
import * as React from "react";
import { SelectInputeAndDate } from "./inpute and from/SelectInputeAndDate";
import AvatarImgForAllType from "./AvatarImgForAllType";
import { FaBoxes } from "react-icons/fa";
let Quantite = "";
let ValueQuentet = 1;
let DateToInErrey = [];
let Obj = {};
let quts = 1;
let valueInputeSheckNow = "";
let valueInputQuantey = "";
let valueInputQuanteyTou = "";

export default function CartQuantiteProdect({
  TypeShowDate,
  oneSelSel,
  SheckCategoruProd,
  currentPayment,
  setSelectedProdects,
  logo,
  setSheckCategoruProd,
  typShowImg
}) {
  // const [NumberPaymt, setNumberPaymt] = useState

  // Start Update Quantet Prodect User Click To Plus Or Demin
  const vslNumbrt = (quantiteNow, dataProd) => {
    if (TypeShowDate != "Quantitey") {
      setSheckCategoruProd((prev) =>
        prev.map((prodect) =>
          prodect.id === dataProd.id
            ? { ...prodect, number: quantiteNow }
            : prodect
        )
      );
    }
  }; //=== End Update Quantet Prodect User Click To Plus Or Demin ===//

  // Start JSX Show Data User Click Prodect
  const datCate = React.useMemo(() => {
    if (TypeShowDate == "Quantitey") {
      return SheckCategoruProd.map((cate) => {
        return cate != "" ? (
          <div
            className="CardSheckCategory"
            key={cate.id}
          >
            <div
              className="styleImgAndTitelBigDivCantite"
            >
              <div
                className="styleImgAndTitelDivCantite"
              >
                <AvatarImgForAllType typShowImg={cate.image ? 'none' : 'icone'} MyAvatar={cate.image ? cate.image : typShowImg === 'Prodect' && <FaBoxes />} />
                <h4>{cate.name}</h4>
              </div>

              <div>
                <h3 style={{ paddingBottom: "8px" }}>
                  تحديد الكمية{" "}
                  <span
                    style={{ color: "#f00" }}
                  >{`${cate.totals} ${currentPayment}`}</span>
                </h3>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "7px",
                  }}
                  className="styleContelBigDivCantite"
                >
                  <Button
                    className="styleBtnBigDivCantite"
                    onClick={() => {
                      UpdateQuantite(cate.id, cate.quantiteNow + 1);
                    }}
                    disabled={
                      cate.quantiteNow == cate.quantieStorage ||
                      cate.quantiteNow == 0
                    }
                  >
                    +
                  </Button>
                  <h4
                    className="styleTitelQuant"
                  >
                    {cate.quantiteNow}
                  </h4>
                  <Button
                    className="styleBtnBigDivCantite"
                    onClick={() => {
                      UpdateQuantite(cate.id, cate.quantiteNow - 1);
                    }}
                    disabled={cate.quantiteNow == 1 || cate.quantiteNow == 0}
                  >
                    -
                  </Button>
                </div>
              </div>
            </div>
            <h4
              className="styleBtnDeleteBigDivCantite"
              onClick={() => handelClickToDeletedCategoryMyProdect(cate.id)}
            >
              X
            </h4>
          </div>
        ) : (
          ""
        );
      });
    } else {
      return SheckCategoruProd.map((cate) => {
        return cate != "" ? (
          <div
            className="CardSheckCategory"
          >
            <div
              className="styleImgAndTitelBigDivCantite"
            >
              <div
                className="styleImgAndTitelDivCantite"
              >
                {TypeShowDate == "CategoryBss" ? (
                  <></>
                ) : (
                <AvatarImgForAllType typShowImg={cate.image ? 'none' : 'icone'} MyAvatar={cate.image ? cate.image : typShowImg === 'Prodect' && <FaBoxes />} />
                )}
                <h4>{cate.name}</h4>
              </div>

              {TypeShowDate != "CategoryBss" &&
              cate.name != "CASH" &&
              cate.name != "Selefe" ? (
                <div>
                  <h3 style={{ paddingBottom: "8px" }}>تحديد الرقم</h3>

                  <SelectInputeAndDate
                    ValueInpuNowAndThisShange={vslNumbrt}
                    themingValu={themingValu}
                    SheckCategoruProd={SheckCategoruProd}
                    setSheckCategoruProd={setSheckCategoruProd}
                    typeMyInput="number"
                    TypObj={cate}
                    valueInputQuantey={valueInputQuantey}
                  />
                </div>
              ) : (
                <></>
              )}
            </div>
            <h4
              className="styleBtnDeleteBigDivCantite"
              onClick={() => handelClickToDeletedCategoryMyProdect(cate.id)}
            >
              X
            </h4>
          </div>
        ) : (
          ""
        );
      });
    }
  }, [SheckCategoruProd, ValueQuentet]); //=== End JSX Show Data User Click Prodect ===//

  const themingValu = (val, valIn) => {
    valueInputQuanteyTou = val;
    setSheckCategoruProd((prev) =>
      prev.map((prodect) =>
        prodect.id === valIn.id ?
            { ...prodect, number: val }
          : prodect
      )
    );
  }

  // Start Update Quantet Prodect User Click To Plus Or Demin
  const UpdateQuantite = (prodectId, quantiteNow) => {
    if (oneSelSel == "oneSelSel") {
      setSheckCategoruProd(
        (prev) =>
          prev.map((prodect) =>
            prodect.id === prodectId
              ? 
                {
                  ...prodect,
                  quantiteNow: Math.max(1, quantiteNow),
                  totals: prodect.price * Math.max(1, quantiteNow),
                  contentStor:
                    prodect.totaleinstorage == Math.max(1, quantiteNow)
                      ? true
                      : false,
                }
              : prodect
          )
      );
    } else {
      setSheckCategoruProd((prev) =>
        prev.map((prodect) =>
          prodect.id === prodectId ||
          prodect.quantieStorage == prodect.quantiteNow ?
              {
                ...prodect,
                quantiteNow: Math.max(1, quantiteNow),
                totals: prodect.price * Math.max(1, quantiteNow),
                contentStor:
                  prodect.totaleinstorage == Math.max(1, quantiteNow)
                    ? true
                    : false,
              }
            : prodect
        )
      );
    }
  }; //=== End Update Quantet Prodect User Click To Plus Or Demin ===//

  // Start Action Delete Prodect Sheck Click User
  const handelClickToDeletedCategoryMyProdect = (MaymentID) => {
    const CopSheckCategoruProd = [...SheckCategoruProd];
    const newdateDelrt = CopSheckCategoruProd.filter((category) => {
      return category.id !== MaymentID;
    });
    setSheckCategoruProd((SheckCategoruProd) =>
      SheckCategoruProd.filter((Payment) => Payment.id !== MaymentID)
    );
  } //=== End Action Delete Prodect Sheck Click User ===//

  return (
    <>
      {SheckCategoruProd.length > 0 ? (
        <div>
          <h4
            className="styleTatelShowAllsDataCauntite"
          >
            خياراتي : المجموع ({SheckCategoruProd.length})
          </h4>
          <div
            className="styleContenTAllsDivQantite"
          >
            {datCate}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
