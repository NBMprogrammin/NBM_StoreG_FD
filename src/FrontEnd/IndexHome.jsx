import React, { useState, useEffect, useRef } from "react";
import "./IndexHome.css";
import { Link } from "react-router-dom";
import Header from "./layoute/Header";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import GroupIcon from "@mui/icons-material/Group";
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
  const currentTextIndexRef = useRef(0);
  const [activeSection, setActiveSection] = useState("home");
  
  const rotatingTexts = [
    "قدم ميزة طلبيات عن بعد للزبائنك وإدارتها من خلال خدماتنا",
    "منصة متكاملة لإدارة متعددة المتاجر من حساب واحد",
    "إدارة موظفيك وعملائك ومبيعاتك بكل كفاءة واحترافية",
    "حلول ذكية تنمو مع نمو أعمالك وتوسعك",
  ];

  useEffect(() => {
    const textInterval = setInterval(() => {
      currentTextIndexRef.current = 
        currentTextIndexRef.current === rotatingTexts.length - 1 
          ? 0 
          : currentTextIndexRef.current + 1;
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

  return (
    <div className="index-home">
      <Header
        typpage="index"
        smoothScroll={smoothScroll}
        activeSection={activeSection}
      />
      <HeroSection
        rotatingText={rotatingTexts[currentTextIndexRef.current]}
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

const HeroSection = ({ rotatingText, smoothScroll }) => {
  const [displayText, setDisplayText] = useState('');
  const currentIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const loopNumRef = useRef(0);
  
  const originalText = "بكم في أكثر مجتمع تنوعاً من الإبداع والتميز.. من هنا ومعكم يكون الصعب أسهل";
  const texts = [originalText];
  
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNumRef.current % texts.length;
      const fullText = texts[current];

      if (isDeletingRef.current) {
        setDisplayText(fullText.substring(0, currentIndexRef.current - 1));
        currentIndexRef.current = currentIndexRef.current - 1;
      } else {
        setDisplayText(fullText.substring(0, currentIndexRef.current + 1));
        currentIndexRef.current = currentIndexRef.current + 1;
      }

      if (!isDeletingRef.current && currentIndexRef.current === fullText.length) {
        setTimeout(() => isDeletingRef.current = true, pauseTime);
      } else if (isDeletingRef.current && currentIndexRef.current === 0) {
        isDeletingRef.current = false;
        loopNumRef.current = loopNumRef.current + 1;
      }
    };

    const timer = setTimeout(handleTyping, isDeletingRef.current ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, texts]);

  return (
    <section id="home" className="hero anm-home">
      <div className="hero-background">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div>
            <div className="hero-badge animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <span>أقوى خدمة في إدارة المعاملات بين التجار والزبائن والموظفين</span>
            </div>
          </div>

          <h1 className="typing-container animate-fade-in-up" style={{ direction: 'rtl', animationDelay: '.65s' }}>
            <div className="gradient-text">اهلاً وسهلاً</div>
            <span className="typing-text">{displayText}</span>
            <span className="typing-cursor">|</span>
          </h1>

          <div className="rotating-text animate-fade-in-up" style={{animationDelay: '1s'}}>
            <p>{rotatingText}</p>
          </div>

          <div className="hero-description animate-fade-in-up" style={{animationDelay: '1.35s'}}>
            <p>
              منصة متكاملة تمكنك من سهولة إنشاء الطلبات لكل تاجر يمتلك علاقة زبائنية، 
              وللتاجر قدرة وسيطرة متعددة، لمتجر أو محل أي كان نوعه أو مجاله. 
              إدارة موظفيك، عملائك ومبيعاتك من مكان واحد. حلول ذكية تنمو مع نمو 
              أعمالك وتواكب تطورها.
            </p>
          </div>

          <div className="cta-buttons animate-fade-in-up" style={{animationDelay: '1.7s'}}>
            <Link
              className="primary-btn with-icon btn-hover-effect"
              to="/register"
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
              className="secondary-btn with-icon btn-hover-effect"
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

          <div className="hero-features animate-fade-in-up" style={{animationDelay: '1.2s', direction: 'rtl'}}>
            <div className="feature-item feature-animate" style={{animationDelay: '1.3s'}}>
              <div className="StyleConHome">✓</div>
              <span>فلسطين حرة وإلى الأبد</span>
            </div>
            <div className="feature-item feature-animate" style={{animationDelay: '1.4s'}}>
              <div className="StyleConHome">✓</div>
              <span>تجربة مجانية لشهرك الأول</span>
            </div>
            <div className="feature-item feature-animate" style={{animationDelay: '1.5s'}}>
              <div className="StyleConHome">✓</div>
              <span>دعم فني 24/7</span>
            </div>
          </div>
        </div>
      </div>

      <div className="contscrotomorshow animate-bounce">
        <div className="scroll-indicator">
          <div className="scroll-text">اكتشف المزيد</div>
          <div className="scroll-arrow">
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const numbersAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !numbersAnimated.current) {
          setIsVisible(true);
          numbersAnimated.current = true;
          
          const statNumbers = document.querySelectorAll('.stat-number');
          statNumbers.forEach((element) => {
            const target = parseInt(element.getAttribute('data-count'));
            if (!isNaN(target)) {
              animateNumber(element, 0, target, 2000);
            }
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const animateNumber = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      element.textContent = value.toLocaleString();
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  return (
    <section id="stats" className="stats" ref={sectionRef}>
      <div className="container">
        <div className="stats-header" style={{ marginBottom: '22px' }}>
          <h2 className={`stats-title ${isVisible ? "animate-fade-in-up" : "" }`} style={{ animationDelay: '0.2s' }}>نظرة عامة على المستخدمين حالياً</h2>
        </div>

        <div className="stats-grid">
          <div className={`stat-item ${isVisible ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.5s' }}>
            <div className="stat-icon">
              <GroupIcon className="iconShwStyle" />
            </div>
            <div className="stat-text">عدد الحسابات التجارية</div>
            <div className="stat-number" data-count="1200"></div>
          </div>
          
          <div className={`stat-item ${isVisible ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.9s' }}>
            <div className="stat-icon">
              <GroupAddIcon className="iconShwStyle" />
            </div>
            <div className="stat-text">عدد المستخدمين</div>
            <div className="stat-number" data-count="95"></div>
          </div>
          
          <div className={`stat-item ${isVisible ? 'animate-slide-up' : ''}`} style={{ animationDelay: '1.4s' }}>
            <div className="stat-icon">
              <GroupIcon className="iconShwStyle" />
            </div>
            <div className="stat-text">عدد الحسابات التجارية النشطة</div>
           <div className="stat-number" data-count="866"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="why-us" className="why-us" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className={`${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.2s' }}>لماذا تختار منصة NBMstoreG؟</h2>
          <p className={`${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.35s' }}>اكتشف المميزات التي تجعلنا الخيار الأفضل لإدارة متجرك</p>
        </div>

        <div className="features-grid">
          <div className={`feature-card ${isVisible ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.4s' }}>
            <div className="stat-icon">
              <TimerOffIcon className="iconShwStyle" />
            </div>
            <h3>توفير الوقت والجهد</h3>
            <p>إدارة مركزية لكل عمليات متجرك من مكان واحد</p>
            <div className="feature-hover-effect"></div>
          </div>

          <div className={`feature-card ${isVisible ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.75s' }}>
            <div className="stat-icon">
              <Diversity2Icon className="iconShwStyle" />
            </div>
            <h3>مجتمع بنفس الأفكار</h3>
            <p>
              هنا سيكون بإمكانك التعرف على أشخاص جدد للمنافسة أو الشراكة أو التعاون
              معهم
            </p>
            <div className="feature-hover-effect"></div>
          </div>

          <div className={`feature-card ${isVisible ? 'animate-slide-up' : ''}`} style={{ animationDelay: '1s' }}>
            <div className="stat-icon">
              <ShoppingCartCheckoutIcon className="iconShwStyle" />
            </div>
            <h3>زيادة المبيعات</h3>
            <p>
              من خلال توفير طلبيات عن بُعد لكل زبائنك مجاناً ستزيد من مبيعاتك كما
              أنه سيتوفر لك تحليلات متقدمة
            </p>
            <div className="feature-hover-effect"></div>
          </div>

          <div className={`feature-card ${isVisible ? 'animate-slide-up' : ''}`} style={{ animationDelay: '1.35s' }}>
            <div className="stat-icon">
              <GppGoodIcon className="iconShwStyle" />
            </div>
            <h3>محترف وسهل</h3>
            <p>لوحة تحكم بديهية لا تحتاج إلى خبرة تقنية أو أي جهد إضافي</p>
            <div className="feature-hover-effect"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const [isVisibleServ, setIsVisibleServ] = useState(false);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisibleServ(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="services" className="services" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className={`${isVisibleServ ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.2s' }}>خدماتنا المتكاملة</h2>
          <p className={`${isVisibleServ ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.35s' }}>كل ما تحتاجه لإدارة متجرك في مكان واحد</p>
        </div>

        <div className="services-grid">
          <div className={`service-card ${isVisibleServ ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.55s' }}>
            <div className="stat-icon">
              <CategoryIcon className="iconShwStyle" />
            </div>
            <h3>إدارة التصنيفات</h3>
            <p>
              أنشئ وقسّم تصنيفات منتجاتك بشكل منظم وسهل مع إمكانية تخصيص كل متجر
            </p>
            <div className="service-card-hover"></div>
          </div>

          <div className={`service-card ${isVisibleServ ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.9s' }}>
            <div className="stat-icon">
              <FaBoxes className="iconShwStyle" />
            </div>
            <h3>إدارة المنتجات</h3>
            <p>
              أضف، عدّل، وأدر منتجاتك بكل تفاصيلها مع جرد آلي ومتابعة المخزون
            </p>
            <div className="service-card-hover"></div>
          </div>

          <div className={`service-card ${isVisibleServ ? 'animate-slide-up' : ''}`} style={{ animationDelay: '1.3s' }}>
            <div className="stat-icon">
              <AddBusinessIcon className="iconShwStyle" />
            </div>
            <h3>إدارة المبيعات</h3>
            <p>
              تتبع مبيعاتك بدقة مع تقارير مفصلة وتحليلات أداء لكل منتج وكل متجر
            </p>
            <div className="service-card-hover"></div>
          </div>

          <div className={`service-card ${isVisibleServ ? 'animate-slide-up' : ''}`} style={{ animationDelay: '1.65s' }}>
            <div className="stat-icon">
              <AddShoppingCartIcon className="iconShwStyle" />
            </div>
            <h3>إدارة الطلبات</h3>
            <p>
              ادفع طلبات العملاء من البداية إلى التسليم مع تحديثات الحالة في
              الوقت الفعلي
            </p>
            <div className="service-card-hover"></div>
          </div>

          <div className={`service-card ${isVisibleServ ? 'animate-slide-up' : ''}`} style={{ animationDelay: '1.9s' }}>
            <div className="stat-icon">
              <FiUserPlus className="iconShwStyle" />
            </div>
            <h3>إدارة الموظفين</h3>
            <p>
              أدر صلاحيات موظفيك، حدد مهامهم، وتابع أداءهم في كل متجر على حدة
            </p>
            <div className="service-card-hover"></div>
          </div>

          <div className={`service-card ${isVisibleServ ? 'animate-slide-up' : ''}`} style={{ animationDelay: '2.3s' }}>
            <div className="stat-icon">
              <PeopleIcon className="iconShwStyle" />
            </div>
            <h3>إدارة الزبائن</h3>
            <p>
              ابنِ قاعدة زبائن متكاملة مع تاريخ مشترياتهم وتفضيلاتهم في كل متجر
            </p>
            <div className="service-card-hover"></div>
          </div>

          <div className={`service-card ${isVisibleServ ? 'animate-slide-up' : ''}`} style={{ animationDelay: '2.7s' }}>
            <div className="stat-icon">
              <CreditScoreIcon className="iconShwStyle" />
            </div>
            <h3>الإدارة المالية</h3>
            <p>
              أدر صلاحيات موظفيك، حدد مهامهم، وتابع الأداء المالي اليومي لمحلك
            </p>
            <div className="service-card-hover"></div>
          </div>

          <div className={`service-card ${isVisibleServ ? 'animate-slide-up' : ''}`} style={{ animationDelay: '3s' }}>
            <div className="stat-icon">
              <CurrencyExchangeIcon className="iconShwStyle" />
            </div>
            <h3>إعدادات الدفع</h3>
            <p>
              حدد طرق الدفع وتحكم بها من حيث تعديل أو تفعيل أو إيقاف أي طريقة
              دفع خاصة بك
            </p>
            <div className="service-card-hover"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorksSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="how-it-works" className="how-it-works" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h3 className={`${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.2s' }}>طريقة الشروع في العمل على المنصة</h3>
          <p className={`${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.35s' }}>خطوات بسيطة لإنشاء حساب شخصي أو تجاري على منصتنا</p>
        </div>
      </div>

      <div className="steps-container">
        <div className="step-lines"></div>
        
        <div className={`step ${isVisible ? 'animate-step' : ''}`} style={{ animationDelay: '0.4s' }}>
          <div className='step-number'>1</div>
          <div className="step-contents">
            <h2 className={`${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.5s' }}>الانتقال إلى صفحة إنشاء الحساب</h2>
            <p className={`${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.55s' }}>
              هذه الخطوة مشتركة للحسابين الشخصي والتجاري، ويمكنك العثور عليها في أي خيار مكتوب عليه "إنشاء حساب"
            </p>
          </div>
        </div>

        <div className={`step ${isVisible ? 'animate-step' : ''}`} style={{ animationDelay: '.65s' }}>
          <div className="step-number">2</div>
          <div className="step-contents">
            <h3 className={`${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.7s' }}>إملاء البيانات المطلوبة</h3>
            
            <div className="account-types">
              <div className={`account-type personal-account ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '1.1s' }}>
                <div className={`account-header ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '1.4s' }}>
                  <div>👤</div>
                  <h4>الحساب الشخصي</h4>
                </div>
                <p className={`${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '1.8s' }}>
                  في نفس صفحة إنشاء الحساب، تقوم بملء جميع البيانات المطلوبة 
                  وعدم ترك أي حقل فارغ من أجل إتمام العملية بنجاح
                </p>
              </div>

              <div className={`account-type business-account ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '2.2s' }}>
                <div className={`account-header ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '2.6s' }}>
                  <div className="account-icon">🏪</div>
                  <h4>الحساب التجاري</h4>
                </div>
                <p className={`${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '2.9s' }}>
                  يتطلب إنشاء حساب شخصي أولاً، ثم الانتقال إلى صفحة المشتريات 
                  والاشتراكات واختيار الباقة المناسبة لك، ثم ملء البيانات المطلوبة. 
                  بعدها تنتظر اتمام طلبك، وعند اكتماله سيكون بمقدورك التبديل بين 
                  حساباتك بسلاسة
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PricingSection = ({ smoothScroll }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section id="pricing" className="pricing" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className={`${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.2s' }}>باقاتنا</h2>
          <p className={`${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.35s' }}>اختر الباقة المناسبة لاحتياجات عملك</p>
        </div>

        <div className="pricing-grid">
          <div className={`pricing-card ${isVisible ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.4s' }}>
            <div className="pricing-header">
              <h3>الباقة الأساسية</h3>
              <div className="price">
                <span className="amount">100</span>
                <span className="period">MRU/شهر</span>
              </div>
            </div>
            <ul className="features-list">
              <li>عدد المنتجات المسموح بها (30)</li>
              <li>عدد الموظفين المسموح بهم (2)</li>
              <li>عدد طرق الدفع المسموح بها (5)</li>
              <li>إمكانية الحصول على تحليلات متقدمة</li>
              <li>إمكانية تعديل الإدارة المالية اليومية كل 24 ساعة</li>
              <li>دعم فني</li>
              <li>صلاحية إدارة الطلبيات المتقدمة</li>
              <li>تكامل مع أنظمة المخزون</li>
            </ul>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <button className="pricing-btn" onClick={() => smoothScroll("signup")}>
                تسجيل الدخول
              </button>
            </Link>
          </div>

          <div className={`pricing-card featured ${isVisible ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.8s' }}>
            <div className="popular-badge" style={{ direction: 'rtl' }}>الأكثر شيوعاً (TEST)</div>
            <div className="pricing-header">
              <h3>الباقة المتقدمة</h3>
              <div className="price">
                <span className="amount">200</span>
                <span className="period">MRU/شهر</span>
              </div>
            </div>
            <ul className="features-list">
              <li>عدد المنتجات المسموح بها (80)</li>
              <li>عدد الموظفين المسموح بهم (10)</li>
              <li>عدد طرق الدفع المسموح بها (10)</li>
              <li>إمكانية الحصول على تحليلات متقدمة</li>
              <li>إمكانية تعديل الإدارة المالية اليومية كل 14 ساعة</li>
              <li>دعم فني على مدار الساعة</li>
              <li>صلاحية إدارة الطلبيات المتقدمة</li>
              <li>تكامل مع أنظمة المخزون</li>
            </ul>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <button className="pricing-btn primary" onClick={() => smoothScroll("signup")}>
                تسجيل الدخول
              </button>
            </Link>
          </div>

          <div className={`pricing-card ${isVisible ? 'animate-slide-up' : ''}`} style={{ animationDelay: '1.2s' }}>
            <div className="pricing-header">
              <h3>باقة الأسياد</h3>
              <div className="price">
                <span className="amount">300</span>
                <span className="period">MRU/شهر</span>
              </div>
            </div>
            <ul className="features-list">
              <li>عدد المنتجات المسموح بها (+185)</li>
              <li>عدد الموظفين المسموح بهم (+20)</li>
              <li>عدد طرق الدفع المسموح بها (+20)</li>
              <li>إمكانية الحصول على تحليلات متقدمة</li>
              <li>إمكانية تعديل الإدارة المالية اليومية كل 8 ساعات</li>
              <li>دعم فني متخصص</li>
              <li>صلاحية إدارة الطلبيات المتقدمة</li>
              <li>تكامل مع أنظمة المخزون</li>
            </ul>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <button className="pricing-btn" onClick={() => smoothScroll("signup")}>
                تسجيل الدخول
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "كيف يمكنني الحصول على شارة توثيقية؟",
      answer: "من أجل الحصول على الشارة التوثيقية لحسابك الشخصي، ستنتقل إلى صفحة المشتريات والاشتراكات وتختار من خلال البطاقات المعروضة، ثم ترفقها بإثبات تحويل الأموال من خلال صورة، ونفس الشيء للحساب التجاري لكن في صفحة الاشتراكات وبعد اكمال الإجراءات سيتم معالجة طلبيتك والرد عليها في أسرع وقت."
    },
    {
      question: "كيف يمكنني زيادة الإعدادات المسموحة لي في الاشتراك الخاص بالمنتجات أو غيرها؟",
      answer: "من أجل زيادة العدد المسموح لك به حسب اشتراكك، سيكون بإمكانك فعلها بعد دخولك لحسابك التجاري والانتقال لصفحة الاشتراكات، سيكون هناك مجموعة من البطاقات مثل زيادة عدد المنتجات أو طرق الدفع وغيرها، يمكنك اختيار البطاقة والعدد الذي تريده ثم ارفقها بصورة تحويل الأموال وإرسال طلبك، سيتم مراجعة طلبك والرد عليك في أسرع وقت ممكن، وبهذه الطريقة تكون قادراً على تجديدها وتعديلها كما تريد."
    },
    {
      question: "كيف يمكنني الاستبدال بين حساباتي التجارية والوظيفية؟",
      answer: "بعد تسجيل دخول حسابك والضغط على القائمة العلوية اليمنى، سيتم إظهار بياناتك وفي خيارات إعدادات الحساب سيظهر لك استبدال بين الحسابات، وبعد ضغطك عليها سيتم إظهار بيانات الحسابات الأخرى إن كانت تجارية أو عمل، ولكن إن لم تمتلكها فلن تظهر عند الخيار."
    },
    {
      question: "كيف يمكنني إنشاء حساب تجاري في المنصة؟",
      answer: "من أجل إنشاء حسابك التجاري يتوجب عليك تسجيل دخول لحسابك الشخصي ثم الانتقال إلى صفحة المشتريات والاشتراكات، ثم تختار الباقة المناسبة لك ثم تملأ البيانات المطلوبة وتتمها، ستنتظر الرد لإكمال طلبيتك، ومن أجل دخول حسابك التجاري سيظهر لك خيار يسمى الاستبدال بين الحسابات، للحصول عليه اضغط على القائمة العلوية اليمنى مع إعدادات الحساب."
    },
    {
      question: "كيف يمكنني تجديد الاشتراك الحسابي التجاري في المنصة؟",
      answer: "من أجل تجديد الاشتراك يتوجب عليك دخول حسابك التجاري والانتقال لصفحة الاشتراكات وتمديده، يوجد أو قد يوجد خيار تمديد قبل نهايته، سيتم طلب منك بيانات قم بملئها وسيتم مراجعتها والرد عليك."
    },
    {
      question: "كم حساب تجاري يمكنني إنشاؤه في المنصة؟",
      answer: "كمية غير محدودة، ولكن من المتوقع فرض ضريبة نسبية للأشخاص الذين يمتلكون أكثر من 3 حسابات، وتكون أعلى أيضاً نسبياً لمن يمتلك 5 حسابات وبعدها سيتم فرض ضريبة على كل 5 حسابات بعدها سيتم فرض نسبة ثابتة لكل من يمتلك 10 حسابات نشطة وبعد مرور 3 أشهر سيتم إلغاء الضريبة وجعلها لكل 3 أشهر بدلاً من شهرية مع تخفيض."
    },
    {
      question: "هل يمكنني تجربة المنصة قبل الاشتراك؟",
      answer: "نعم، سيتم احتساب الشهر الأول للحساب التجاري مجاناً لكن بضريبة نسبية سيتم ذكرها لاحقاً، لكن هذا للحساب التجاري الأول فقط، كما أنك ستحصل على إمكانيات أقل في الاشتراك نظراً لأن الهدف الأول هو التجربة، وستكون فقط على الاشتراك باقة الأساسية وللعلم تغيير الباقة للحساب التجاري ليس ببساطة كما سيتم توضيح التفاصيل لاحقاً."
    },
    {
      question: "كيف يمكنني إضافة موظفين إلى المنصة؟",
      answer: "يمكنك إضافة موظفين من خلال قسم إدارة الموظفين، حيث يمكنك تحديد صلاحيات كل موظف والمتاجر التي يمكنه الوصول إليها وتوثيق دفع الراتب وخدمات أخرى."
    },
    {
      question: "هل المنصة متوافقة مع الهواتف الذكية؟",
      answer: "نعم، المنصة مصممة لتكون متجاوبة مع جميع أحجام الشاشات بما في ذلك الهواتف الذكية والأجهزة اللوحية."
    },
    {
      question: "هل هناك مزيد من الأسئلة لم يتم ذكرها؟",
      answer: "نعم هناك الكثير المرتبط مثلاً بالإدارات التجارية والعلاقات البينية وغيرها، وهذا لأننا نريد للمستخدم خوض تجربة الاستخدام وسيكون التعلم سهلاً وسريعاً بها."
    },
  ];

  return (
    <section id="faq" className="faq" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className={`${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.2s' }}>أسئلة شائعة</h2>
          <p className={`${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.25s' }}>إجابات على الأسئلة الأكثر شيوعاً</p>
        </div>

        <div className="faq-list">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""} ${
                isVisible ? 'animate-slide-in' : ''
              }`}
              style={{ animationDelay: `${index * 0.4}s` }}
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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section id="cta" className="cta" ref={sectionRef}>
      <div className="container">
        <div className="cta-content">
          <h2 className={`${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.4s' }}>جاهز لبدء رحلتك مع منصة NBMstoreG</h2>
          <p className={`${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.5s' }}>انضم للمجتمع الأكثر تنوعاً وإبداعاً من هنا يكون الصعب سهلاً</p>
          <div className={`styfooterhome ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.6s' }}>
            <Link
              to="/login"
              style={{ textDecoration: "none", width: "fit-content" }}
            >
              ابدأ مجانًا الآن
            </Link>
            <Link
              to="/"
              style={{ textDecoration: "none", width: "fit-content" }}
            >
              أشخاص قد تعرفهم
            </Link>
          </div>
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