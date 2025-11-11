import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Button,
  IconButton,
  Chip,
} from "@mui/material";
import {
  ChevronLeft,
  ChevronRight,
  PersonAdd,
  LocationOn,
  Work,
  Circle,
} from "@mui/icons-material";
import VerifiedIcon from "@mui/icons-material/Verified";
import AvatarImgForAllType from "./AvatarImgForAllType";
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';

let JXSShowData = "";
const PeopleYouMayKnow = ({ FirsttitelComp, DataToShowForUser, typeShow }) => {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const autoScrollRef = useRef(null);

  const JXSShowData = useMemo(() => {
    if (DataToShowForUser) {
      return DataToShowForUser.map((person) => (
        <Card
          key={person.id}
          sx={{
            minWidth: 280,
            borderRadius: 3,
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            flexShrink: 0,
          }}
          className="cardscrl"
        >
          <CardContent sx={{ p: 1, textAlign: "center" }}>
            {/* الصورة والاسم */}

            <div>
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      boxShadow: "0px 0px 3px #2196F3",
                    }}
                  >
                    <AvatarImgForAllType
                      className={"logo-container logo-emoji"}
                      style={{
                        width: '95%',
                        height: '95%'
                      }}
                      MyAvatar={person.image ? person.image : ''}
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    justifyContent: "center",
                  }}
                >
                  <VerifiedIcon className="stylevirfedsmpl" />
                  <Typography variant="h6" gutterBottom fontWeight="bold">
                    {person.name}
                  </Typography>
                  <VerifiedIcon style={{ color: "#4a6cf7" }} />
                </div>
              </div>

              <div>
                {/* الوظيفة */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    {typeShow === "bss" ? "مجال لعمل او لخدمة" : "حالت العمل"} :{" "}
                    {typeShow !== "bss" && person.nameTou === "bss"
                      ? "تاجر"
                      : "" || person.nameTou === "trv"
                      ? "قيد لعمل حاليا"
                      : "" || person.nameTou === "none"
                      ? "عاطل عن لعمل"
                      : person.nameTou}
                  </Typography>
                </Box>

                {/* رقم الهاتف */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="body2"
                    color="primary.main"
                    fontWeight="medium"
                  >
                    {typeShow === "bss" ? "الموقع جغرافيا" : "البلد"} :{" "}
                    {person.cantry}
                  </Typography>
                </Box>
              </div>
            </div>
          </CardContent>
        </Card>
      ));
    }
  }, [DataToShowForUser]);

  // حساب عرض العنصر للتمرير
  const getScrollAmount = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return 320;

    const firstItem = container.querySelector(".user-card");
    if (firstItem) {
      return firstItem.offsetWidth + 24; // +24 للgap
    }
    return 320;
  }, []);

  // التمرير
  const scroll = useCallback(
    (direction) => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const scrollAmount = getScrollAmount();
      let newScrollLeft;

      if (direction === "left") {
        newScrollLeft = container.scrollLeft - scrollAmount;
        // إذا كنا في البداية ونتحرك لليسار، نذهب للنهاية
        if (newScrollLeft < 0) {
          newScrollLeft = container.scrollWidth - container.clientWidth;
        }
      } else {
        newScrollLeft = container.scrollLeft + scrollAmount;
        // إذا كنا في النهاية ونتحرك لليمين، نذهب للبداية
        if (newScrollLeft >= container.scrollWidth - container.clientWidth) {
          newScrollLeft = 0;
        }
      }

      container.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });

      // إعادة تعيين التمرير التلقائي بعد التمرير اليدوي
      resetAutoScroll();
    },
    [getScrollAmount]
  );

  // التمرير التلقائي الدائري
  const startAutoScroll = useCallback(() => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }

    autoScrollRef.current = setInterval(() => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const scrollAmount = getScrollAmount();
      const newScrollLeft = container.scrollLeft + scrollAmount;

      // إذا وصلنا للنهاية، نعود للبداية
      if (newScrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        // استمرار التمرير الطبيعي
        container.scrollTo({
          left: newScrollLeft,
          behavior: "smooth",
        });
      }
    }, 2500); // كل 2.5 ثانية (يمكن تغييرها لـ 25 ثانية)
  }, [getScrollAmount]);

  // إعادة تعيين التمرير التلقائي
  const resetAutoScroll = useCallback(() => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
    startAutoScroll();
  }, [startAutoScroll]);

  // تحديث حالة الأزرار
  const updateButtonVisibility = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
  }, []);

  // السحب بالماوس/لمس
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);

    // إيقاف التمرير التلقائي أثناء السحب
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    resetAutoScroll();
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    resetAutoScroll();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch events للهواتف
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);

    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    resetAutoScroll();
  };

  // event listeners
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      requestAnimationFrame(updateButtonVisibility);
    };

    container.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateButtonVisibility);

    // تحديث أولي
    const timeoutId = setTimeout(updateButtonVisibility, 100);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateButtonVisibility);
      clearTimeout(timeoutId);
    };
  }, [updateButtonVisibility]);

  // بدء التمرير التلقائي
  useEffect(() => {
    startAutoScroll();

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [startAutoScroll]);

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 4,
        position: "relative",
        userSelect: "none",
      }}
    >
      {/* عنوان القسم */}
      <Box
        sx={{
          mb: 4,
          p: "12px",
          boxShadow: "0px 0px 5px #2196F3",
          textAlign: "right",
          borderRadius: "16px",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          fontWeight="bold"
          sx={{ color: "#03A9F4" }}
        >
          {FirsttitelComp}
        </Typography>
      </Box>

      {/* أزرار التمرير - تظهر دائماً في التمرير الدائري */}
      <IconButton
        onClick={() => scroll("left")}
        sx={{
          position: "absolute",
          left: 16,
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "white",
          boxShadow: 3,
          zIndex: 10,
          border: "2px solid",
          borderColor: "primary.main",
          "&:hover": {
            backgroundColor: "primary.main",
            color: "white",
          },
        }}
        size="large"
      >
        <ChevronLeft />
      </IconButton>

      <IconButton
        onClick={() => scroll("right")}
        sx={{
          position: "absolute",
          right: 16,
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "white",
          boxShadow: 3,
          zIndex: 10,
          border: "2px solid",
          borderColor: "primary.main",
          "&:hover": {
            backgroundColor: "primary.main",
            color: "white",
          },
        }}
        size="large"
      >
        <ChevronRight />
      </IconButton>

      {/* حاوية السلايدر مع دعم السحب */}
      <Box
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        sx={{
          display: "flex",
          overflowX: "auto",
          overflowY: "hidden",
          gap: 3,
          py: 3,
          px: 2,
          scrollBehavior: "smooth",
          cursor: isDragging ? "grabbing" : "grab",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
          "&:active": {
            cursor: "grabbing",
          },
          //   justifyContent: "end",
        }}
      >
        {JXSShowData}
      </Box>
    </Container>
  );
};

export default PeopleYouMayKnow;
