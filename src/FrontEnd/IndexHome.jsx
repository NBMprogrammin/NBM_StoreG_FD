import React, { useState, useEffect } from "react";
import "./IndexHome.css";
import { Link } from "react-router-dom";
import Header from "./layoute/Hedaer";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import GroupIcon from "@mui/icons-material/Group";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import TimerOffIcon from "@mui/icons-material/TimerOff";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import GppGoodIcon from "@mui/icons-material/GppGood";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import { FaBoxes } from "react-icons/fa";
import CategoryIcon from "@mui/icons-material/Category";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { FiUserPlus } from "react-icons/fi";
import PeopleIcon from "@mui/icons-material/People";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

const IndexHome = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  const rotatingTexts = [
    "قدم ميزة طلبيات عن بعد للزباينك و ادارتها من خلال خدماتنا",
    "منصة متكاملة لإدارة متعددة المتاجر من حساب واحد",
    "إدارة موظفيك وعملائك ومبيعاتك بكل كفاءة واحترافية",
    "حلول ذكية تنمو مع نمو أعمالك وتوسعك",
  ];

  useEffect(() => {
    const loadData = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    const textInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) =>
        prevIndex === rotatingTexts.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(loadData);
      clearInterval(textInterval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const smoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="index-home">
      {/* <Header smoothScroll={smoothScroll} activeSection={activeSection} /> */}
      <Header
        typpage="index"
        smoothScroll={smoothScroll}
        activeSection={activeSection}
      />
      <HeroSection
        rotatingText={rotatingTexts[currentTextIndex]}
        smoothScroll={smoothScroll}
      />
      <StatsSection />
      <WhyUsSection />
      <ServicesSection />
      <HowItWorksSection />
      <PricingSection smoothScroll={smoothScroll} />
      <FAQSection />
      <CTASection smoothScroll={smoothScroll} />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

const ParticleBackground = () => {
  return (
    <div className="particle-background">
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
    </div>
  );
};

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-logo">
        <div className="logo-shape">
          <span>NBM</span>
        </div>
      </div>
      <div className="loading-progress">
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
      </div>
      <p>جاري تحميل المنصة...</p>
    </div>
  );
};

const HeroSection = ({ rotatingText, smoothScroll }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>اقوي خدمة في إدارة المعاملات بين تجار و زباين و لموضفين</span>
          </div>

          <h1>
            <span className="gradient-text">اهلا و سهلا</span>
            <br />
            بيكم في اكثر مجتمع تنوع من لاابداع و تميز من هنا و معكم يكون صعب
            اسهل
          </h1>

          <div className="rotating-text">
            <p>{rotatingText}</p>
          </div>

          <div className="hero-description">
            <p>
              منصة متكاملة تمكنك سهولة للمستخدم انشاء طلبياته للكل تاجر يمتلك مع
              علاقة زبائنية و للتاجر قدرة و سيطرة المتعددة، لمنتجر او محل اي كان
              نوعه او مجاله موظفيك، عملائك ومبيعاتك من مكان واحد. حلول ذكية تنمو
              مع نمو أعمالك وتواكب تطورها.
            </p>
          </div>

          <div className="cta-buttons">
            <Link
              className="primary-btn with-icon"
              to="/login"
              style={{ textDecoration: "none" }}
            >
              <span>ابدأ مجانًا</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <button
              className="secondary-btn with-icon"
              onClick={() => smoothScroll("how-it-works")}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 16V12M12 8H12.01"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>كيف تعمل</span>
            </button>
          </div>

          <div className="hero-features">
            <div className="feature-item">
              <div className="stat-icon">✓</div>
              <span>فلسطين حرة و للابد</span>
            </div>
            <div className="feature-item">
              <div className="stat-icon">✓</div>
              <span>تجربة مجانية لشهرك الاول</span>
            </div>
            <div className="feature-item">
              <div className="stat-icon">✓</div>
              <span>دعم فني 24/7</span>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-text">اكتشف المزيد</div>
        <div className="scroll-arrow">
          <span></span>
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  return (
    <section id="stats" className="stats">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-icon">
              <GroupIcon className="Style-Icon" />
            </div>
            <div className="stat-text">عدد حسابات تجارية</div>
            <div className="stat-number" data-count="1200">
              0
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <GroupAddIcon className="Style-Icon" />
            </div>
            <div className="stat-text">عدد المستخدمين</div>
            <div className="stat-number" data-count="95">
              0
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <SupportAgentIcon className="Style-Icon" />
            </div>
            <div className="stat-text">دعم فني متاح</div>
            <div className="stat-number">24/7</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyUsSection = () => {
  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <div className="section-header">
          <h2>لماذا تختار منصة NBMstoreG؟</h2>
          <p>اكتشف المميزات التي تجعلنا الخيار الأفضل لإدارة متجرك</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="stat-icon">
              <TimerOffIcon className="Style-Icon" />
            </div>
            <h3>توفير الوقت والجهد</h3>
            <p>إدارة مركزية لكل عمليات متجرك من مكان واحد</p>
            <div className="feature-hover-effect"></div>
          </div>

          <div className="feature-card">
            <div className="stat-icon">
              <Diversity2Icon className="Style-Icon" />
            </div>
            <h3>مجتمع بنفس الافكار</h3>
            <p>
              هنا سيكون بامكان تعرف على الاشخاص جدد و لمنافسة او شراك او تعرف
              معهم
            </p>
            <div className="feature-hover-effect"></div>
          </div>

          <div className="feature-card">
            <div className="stat-icon">
              <ShoppingCartCheckoutIcon className="Style-Icon" />
            </div>
            <h3>زيادة المبيعات</h3>
            <p>
              من خلال توفير طلبيات عن بعد لكل زبائنك بلمجان ستزبد من مبيعاتك كما
              انه سيتوفر لك تحليلات
            </p>
            <div className="feature-hover-effect"></div>
          </div>

          <div className="feature-card">
            <div className="stat-icon">
              <GppGoodIcon className="Style-Icon" />
            </div>
            <h3>محترف وسهل</h3>
            <p>لوحة تحكم بديهية لا تحتاج إلى خبرة تقنية او اي جهد</p>
            <div className="feature-hover-effect"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>خدماتنا المتكاملة</h2>
          <p>كل ما تحتاجه لإدارة متجرك في مكان واحد</p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="stat-icon">
              <CategoryIcon className="Style-Icon" />
            </div>
            <h3>إدارة التصنيفات</h3>
            <p>
              أنشئ وقسّم تصنيفات منتجاتك بشكل منظم وسهل مع إمكانية تخصيص كل متجر
            </p>
            <div className="service-card-hover"></div>
          </div>

          <div className="service-card">
            <div className="stat-icon">
              <FaBoxes className="Style-Icon" />
            </div>
            <h3>إدارة المنتجات</h3>
            <p>
              أضف، عدّل، وأدر منتجاتك بكل تفاصيلها مع جرد آلي ومتابعة المخزون
            </p>
            <div className="service-card-hover"></div>
          </div>

          <div className="service-card">
            <div className="stat-icon">
              <AddBusinessIcon className="Style-Icon" />
            </div>
            <h3>إدارة المبيعات</h3>
            <p>
              تتبع مبيعاتك بدقة مع تقارير مفصلة وتحليلات أداء لكل منتج وكل متجر
            </p>
            <div className="service-card-hover"></div>
          </div>

          <div className="service-card">
            <div className="stat-icon">
              <AddShoppingCartIcon className="Style-Icon" />
            </div>
            <h3>إدارة الطلبات</h3>
            <p>
              ادفع طلبات العملاء من البداية إلى التسليم مع تحديثات الحالة في
              الوقت الفعلي
            </p>
            <div className="service-card-hover"></div>
          </div>

          <div className="service-card">
            <div className="stat-icon">
              <FiUserPlus className="Style-Icon" />
            </div>
            <h3>إدارة الموظفين</h3>
            <p>
              أدر صلاحيات موظفيك، حدد مهامهم، وتابع أداءهم في كل متجر على حدة
            </p>
            <div className="service-card-hover"></div>
          </div>

          <div className="service-card">
            <div className="stat-icon">
              <PeopleIcon className="Style-Icon" />
            </div>
            <h3>إدارة الزباين</h3>
            <p>
              ابنِ قاعدة زباين متكاملة مع تاريخ مشترياتهم وتفضيلاتهم في كل متجر
            </p>
            <div className="service-card-hover"></div>
          </div>

          <div className="service-card">
            <div className="stat-icon">
              <CreditScoreIcon className="Style-Icon" />
            </div>
            <h3>إدارة المالية</h3>
            <p>
              أدر صلاحيات موظفيك، حدد مهامهم، وتابع اداء لحال المالية ليومية
              للمحلك
            </p>
            <div className="service-card-hover"></div>
          </div>

          <div className="service-card">
            <div className="stat-icon">
              <CurrencyExchangeIcon className="Style-Icon" />
            </div>
            <h3>الاعدادات الدفع</h3>
            <p>
              حدد طرق الدفع و تحكم بها من حيث تعديل او تفعيل او ايقاف احد طرق
              الدفع لخاص بيك
            </p>
            <div className="service-card-hover"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <div className="section-header">
          <h3> طريقة أنشاء حساب</h3>
          <p>خطوات من اجل انشاء حساب شخصي او تجاري</p>
        </div>
      </div>

      <div className="steps-container">
        <div className="step-line"></div>
        <div className="step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h2>انتقال للصفحة انشاء حساب؟</h2>
            <p>
              هذه الخطو مشترك و بديهية للحالتين و تجدها في اي خيار مكتوب عليه
              انشاء حساب
            </p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>املاء لبيانات لمطلوب</h3>
            <p>
              الشخصي: في نفس صفحة انشاء البيانات تقوم باملائها و عدم ترك خيار
              بلا بيانات من اجل اتمام مهمة
            </p>
            <p>
              تحاري: يتطلب انشاء حساب شخصي و بعدها تنتقل للصفحة المشتريات و
              الاشتراكات و اختيار الباقة المناسبة لك و املاء لبانات المطلوب و
              بعدها تنتظر اتمام طلبيتك و فان تمت سيكون بمقدورك نبادال بين
              حساباتك بسلاسة
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const PricingSection = ({ smoothScroll }) => {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-header">
          <h2>باقاتنا</h2>
          <p>اختر الباقة المناسبة لاحتياجات عملك</p>
        </div>
        <h2 className="TiteDscForMsd">
          هنا سيتم عرض لباقات الاشتراك للحسابات تجارية فلتحديثات لقادم قريبا و
          هي <span>3</span>
        </h2>

        <div style={{ display: "none" }}>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-header">
                <h3>الباقة الأساسية</h3>
                <div className="price">
                  <span className="amount">199</span>
                  <span className="period">ريال/شهر</span>
                </div>
              </div>
              <ul className="features-list">
                <li>إدارة متجرين</li>
                <li>حتى 5 موظفين</li>
                <li>تقارير أساسية</li>
                <li>دعم فني عبر البريد</li>
              </ul>
              <button
                className="pricing-btn"
                onClick={() => smoothScroll("signup")}
              >
                اختر الباقة
              </button>
            </div>

            <div className="pricing-card featured">
              <div className="popular-badge">الأكثر شيوعاً</div>
              <div className="pricing-header">
                <h3>الباقة المتقدمة</h3>
                <div className="price">
                  <span className="amount">399</span>
                  <span className="period">ريال/شهر</span>
                </div>
              </div>
              <ul className="features-list">
                <li>إدارة 5 متاجر</li>
                <li>حتى 15 موظف</li>
                <li>تقارير متقدمة</li>
                <li>دعم فني على مدار الساعة</li>
                <li>تكامل مع أنظمة الدفع</li>
              </ul>
              <button
                className="pricing-btn primary"
                onClick={() => smoothScroll("signup")}
              >
                اختر الباقة
              </button>
            </div>

            <div className="pricing-card">
              <div className="pricing-header">
                <h3>باقة المؤسسات</h3>
                <div className="price">
                  <span className="amount">699</span>
                  <span className="period">ريال/شهر</span>
                </div>
              </div>
              <ul className="features-list">
                <li>عدد غير محدود من المتاجر</li>
                <li>موظفين غير محدودين</li>
                <li>تقارير شاملة ومخصصة</li>
                <li>دعم فني مخصص</li>
                <li>تكامل مع أنظمة المخزون</li>
              </ul>
              <button
                className="pricing-btn"
                onClick={() => smoothScroll("signup")}
              >
                اختر الباقة
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "كيف يمكنني استبدال بين حساباتي تجارية و الوضيفية؟",
      answer:
        "بعد تسجيل دخول لسابك و ضغط على القائمة العلوية ليمنا سيتم اضهار لبياناتك و فلخيارات الاعدادات الحساب سيضهر لك استبدادا بين الحسابات وبعد ضغطك عليها سيتم اضهار لبيانات لحسابات الاخرى ان كانت تجارية او العمل و لكن ان لم تمتلكهم فلن تضهر عند لخيار",
    },
    {
      question: "كيف يمكنني انشاء حساب تجاري فلمنصة؟",
      answer:
        "من اجل انشاء حسابك تجاري يتوجب عليك تسجيل دخول لحسابك الشخص ثم انتقال الى صفحة المشتريات و الاشتراكات ثم تختار لباقة  لمناسب لك ثم املاء لبياتات لمطلوب و اتمامها ستنتزر الرد من الاكمال طلبيتك و من اجل دخول حسابك تجاري سيظهر لك خياري يسمى بي الاستبدال ببين لحسابات للحصول عليه اضغط على القائمة العلوية اليمنا مع الاعدادات الحساب",
    },
    {
      question: "كيف يمكنني تجديد الاشتراك الحسابي تجاري فلمنصة؟",
      answer:
        " من اجل تجديد الاشتراك يتوجب عليك دخول حسابك تجاري و انتقال للصفحة الاشتراكات و تمديده يوجد او قد يوجد خيار تميد قبل نهايته  سيتم طلب منك بيانات قم باملائها و سيتم مراجعتها و رد عليك",
    },
    {
      question: "كم حساب تجاري يمكنني انشائه فلمنصة؟",
      answer:
        " كمية غير محدود و لكن من لمتوقع فرض ضريب نسبية للاشخاص يمتلكون اكثر من 3 و تكون اعلى ايضا نسبية للمن يمتلك 5",
    },
    {
      question: "هل يمكنني تجربة المنصة قبل الاشتراك؟",
      answer:
        "نعم، سيتاح للكل لمستخدم شهر اول للحسابه تجاري مجانا لكن بضريب نسبية سيتم ذكرها لاحقا لكن هذه للحسابك التجاري الاول فقط كما انك ستحصل على امكانيات اقل فلاشتراك نظرا لان لهدف لاول هو تجرب سيتم توضيح تفاصيل لاحقاز.",
    },
    {
      question: "كيف يمكنني إضافة موظفين إلى المنصة؟",
      answer:
        "يمكنك إضافة موظفين من خلال قسم إدارة الموظفين، حيث يمكنك تحديد صلاحيات كل موظف والمتاجر التي يمكنه الوصول إليها ز توثيق لدفع الراتبه و خدمات اخرى.",
    },
    {
      question: "هل المنصة متوافقة مع الهواتف الذكية؟",
      answer:
        "نعم، المنصة مصممة لتكون متجاوبة مع جميع أحجام الشاشات بما في ذلك الهواتف الذكية والأجهزة اللوحية.",
    },
  ];

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="section-header">
          <h2>أسئلة شائعة</h2>
          <p>إجابات على الأسئلة الأكثر شيوعاً</p>
        </div>

        <div className="faq-list">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h3>{item.question}</h3>
                <span className="faq-toggle">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = ({ smoothScroll }) => {
  return (
    <section id="cta" className="cta">
      <div className="container">
        <div className="cta-content">
          <h2>جاهز لبدء رحلتك مع منصة NBMstoreG</h2>
          <p>انضم للمجتمع اكثر تنوع و ابداع من هنا يكون صعب سهلا</p>
          <Link
            to="/login"
            style={{ textDecoration: "none", width: "fit-content" }}
          >
            ابدأ مجانًا الآن
          </Link>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-icon">
                <span>NBM</span>
              </div>
              <span className="logo-text colorWIT">NBMstoreG</span>
            </div>
            <p>الحل الشامل لإدارة متاجرك ومحلاتك بكل كفاءة واحترافية</p>
          </div>

          <div className="footer-section">
            <h4>روابط سريعة</h4>
            <a href="#why-us">لماذا نحن</a>
            <a href="#services">خدماتنا</a>
            <a href="#pricing">الباقات</a>
            <a href="#faq">أسئلة شائعة</a>
          </div>

          <div className="footer-section">
            <h4>اتصل بنا</h4>
            <p>nourbingmak@gmail.com</p>
            <p>+222 48 17 53 81</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 منصة NBMstoreG. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-to-top">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 15L12 9L6 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default IndexHome;
