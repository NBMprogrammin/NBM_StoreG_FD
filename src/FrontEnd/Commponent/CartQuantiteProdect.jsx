import { Button, Input } from "@mui/joy";
import * as React from "react";
import { SelectInputeAndDate } from "./inpute and from/SelectInputeAndDate";
import AvatarImgForAllType from "./AvatarImgForAllType";
let datCate = "";
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
}) {
  // const [NumberPaymt, setNumberPaymt] = useState

  // Start Update Quantet Prodect User Click To Plus Or Demin
  const vslNumbrt = (quantiteNow, dataProd) => {
    console.log(quantiteNow, dataProd);

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

  // function handleDateShangeMayment(valt, val) {
  //   // console.log(val);
  //   // console.log(valt);
  //   // setSheckCategoruProd(prev =>
  //   //     prev.map(prodect =>
  //   //         prodect.id === val.id
  //   //         // prodect.id === prodectId
  //   //         ? {...prodect, number: valt}
  //   //         : prodect
  //   //     )
  //   // )
  //   // console.log(SheckCategoruProd);
  // }

  // function HandelTotalStorageProdect(val, valIn) {
  //   // console.log(val);
  //   // valueInputQuanteyTou = val;
  //   // setSheckCategoruProd(prev =>
  //   //     prev.map(prodect =>
  //   //         prodect.id === valIn.id
  //   //         // prodect.id === prodectId
  //   //         ? {...prodect, number: val}
  //   //         : prodect
  //   //     )
  //   // )
  //   // console.log(SheckCategoruProd);
  // }

  // Start JSX Show Data User Click Prodect
  React.useMemo(() => {
    if (TypeShowDate == "Quantitey") {
      datCate = SheckCategoruProd.map((cate) => {
        return cate != "" ? (
          <div
            class="CardSheckCategory"
            key={cate.id}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "7px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  paddingLeft: "12px",
                }}
              >
                <AvatarImgForAllType MyAvatar={cate.image} />
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
                >
                  <Button
                    style={{
                      width: "fit-content",
                      fontSize: "40px",
                      fontWeight: "bold",
                      padding: "22px 10px",
                      height: "25px",
                    }}
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
                    style={{
                      background: "rgb(167 167 167)",
                      fontSize: "25px",
                      padding: "6px",
                    }}
                  >
                    {cate.quantiteNow}
                  </h4>
                  <Button
                    style={{
                      width: "fit-content",
                      fontSize: "40px",
                      fontWeight: "bold",
                      padding: "22px 10px",
                      height: "25px",
                    }}
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
              style={{
                cursor: "pointer",
                background: "#ccc7c7",
                padding: "5px",
                borderRadius: "50%",
                position: "absolute",
                top: "22px",
                left: "12px",
                transform: "translateY(-50%)",
              }}
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
      datCate = SheckCategoruProd.map((cate) => {
        return cate != "" ? (
          <div
            class="CardSheckCategory"
            key={cate.id}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "7px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  paddingLeft: "12px",
                }}
              >
                {TypeShowDate == "CategoryBss" ? (
                  <></>
                ) : (
                  <div style={{ width: "65px" }}>
                    <img src={`${logo}`} loading="lazy" />
                  </div>
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
                    // HandelTotalStorageProdect={HandelTotalStorageProdect}
                    SheckCategoruProd={SheckCategoruProd}
                    setSheckCategoruProd={setSheckCategoruProd}
                    typeMyInput="number"
                    TypObj={cate}
                    valueInputQuantey={valueInputQuantey}
                    // handleDateShangeMayment={handleDateShangeMayment}
                    // ValueInpuNowAndThisShange={HandelTotalStorageProdect}
                  />
                </div>
              ) : (
                <></>
              )}
            </div>
            <h4
              style={{
                cursor: "pointer",
                background: "#ccc7c7",
                padding: "5px",
                borderRadius: "50%",
                position: "absolute",
                top: "22px",
                left: "12px",
                transform: "translateY(-50%)",
              }}
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

  function themingValu(val, valIn) {
    // console.log(val);
    valueInputQuanteyTou = val;
    setSheckCategoruProd((prev) =>
      prev.map((prodect) =>
        prodect.id === valIn.id
          ? // prodect.id === prodectId
            { ...prodect, number: val }
          : prodect
      )
    );

    console.log(SheckCategoruProd);
  }

  // Start Update Quantet Prodect User Click To Plus Or Demin
  const UpdateQuantite = (prodectId, quantiteNow) => {
    if (oneSelSel == "oneSelSel") {
      console.log(quantiteNow);
      console.log(prodectId);
      console.log(SheckCategoruProd);
      // const CopCopDat = {...SheckCategoruProd[0]};
      // const CopDat = {...CopCopDat, quantiteNow: Math.max(1, quantiteNow), totals: SheckCategoruProd[0].price * Math.max(1, quantiteNow), contentStor: SheckCategoruProd[0].totaleinstorage == Math.max(1, quantiteNow) ? true : false}
      setSheckCategoruProd(
        // [CopDat]
        // {...SheckCategoruProd, quantiteNow: Math.max(1, quantiteNow), totals: SheckCategoruProd[0].price * Math.max(1, quantiteNow), contentStor: SheckCategoruProd[0].totaleinstorage == Math.max(1, quantiteNow) ? true : false}
        (prev) =>
          prev.map((prodect) =>
            prodect.id === prodectId
              ? // prodect.quantieStorage != prodect.quantiteNow
                {
                  ...prodect,
                  quantiteNow: Math.max(1, quantiteNow),
                  totals: prodect.price * Math.max(1, quantiteNow),
                  contentStor:
                    prodect.totaleinstorage == Math.max(1, quantiteNow)
                      ? true
                      : false,
                }
              : //     // prodect.id === prodectId
                prodect
          )
      );
    } else {
      setSheckCategoruProd((prev) =>
        prev.map((prodect) =>
          prodect.id === prodectId ||
          prodect.quantieStorage == prodect.quantiteNow
            ? // prodect.id === prodectId
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
  function handelClickToDeletedCategoryMyProdect(MaymentID) {
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
            style={{
              fontSize: "28px",
              padding: "20px",
              borderRadius: "12PX",
              background: "rgba(159, 158, 158, 0.506)",
              color: "#fff",
            }}
          >
            خياراتي : المجموع ({SheckCategoruProd.length})
          </h4>
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              marginBlock: "12px",
              marginTop: "25px",
            }}
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
