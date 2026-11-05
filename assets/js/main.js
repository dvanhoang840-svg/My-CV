/**
 * ==============================================================================
 * PORTFOLIO CÁ NHÂN - ĐINH VĂN HOÀNG
 * Sinh viên năm nhất ngành Công nghệ Thông tin - Trường Đại học Đại Nam
 * File: assets/js/main.js
 * Chức năng: Xử lý tương tác giao diện người dùng bằng JavaScript cơ bản (Vanilla JS)
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initBackToTop();
  initScrollReveal();
  initActiveNavOnScroll();
  initStoryModals();
  initContactForm();
  initSkillBarsAnimation();
});

/**
 * 1. ĐIỀU HƯỚNG & MENU DI ĐỘNG (MOBILE NAVIGATION)
 */
function initNavbar() {
  const header = document.querySelector('.site-header');
  const toggleBtn = document.getElementById('menu-toggle');
  const navList = document.querySelector('.nav-list');
  const navLinks = document.querySelectorAll('.nav-link');

  // Thêm viền & bóng đổ khi cuộn trang
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // Đóng/mở menu trên điện thoại
  if (toggleBtn && navList) {
    toggleBtn.addEventListener('click', () => {
      const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', !isExpanded);
      toggleBtn.classList.toggle('active');
      navList.classList.toggle('active');
    });

    // Tự động đóng menu khi bấm vào một mục điều hướng
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.classList.remove('active');
        navList.classList.remove('active');
      });
    });

    // Đóng menu khi click ra ngoài
    document.addEventListener('click', (e) => {
      if (!header.contains(e.target) && navList.classList.contains('active')) {
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.classList.remove('active');
        navList.classList.remove('active');
      }
    });
  }
}

/**
 * 2. NÚT QUAY LẠI ĐẦU TRANG (BACK TO TOP BUTTON)
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * 3. HIỆU ỨNG XUẤT HIỆN NHẸ KHI CUỘN TRANG (SCROLL REVEAL)
 */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  // Sử dụng IntersectionObserver nếu trình duyệt hỗ trợ
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Thêm độ trễ nhẹ cho các phần tử xuất hiện lần lượt tự nhiên
          setTimeout(() => {
            entry.target.classList.add('active');
          }, index * 40);
          obs.unobserve(entry.target); // Chỉ chạy hiệu ứng một lần
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px'
    });

    reveals.forEach(el => observer.observe(el));
  } else {
    // Phương án dự phòng cho trình duyệt cũ
    reveals.forEach(el => el.classList.add('active'));
  }
}

/**
 * 4. HIỆU ỨNG HOẠT HỌA THANH TIẾN TRÌNH KỸ NĂNG (SKILL BARS)
 */
function initSkillBarsAnimation() {
  const skillSection = document.getElementById('skills');
  if (!skillSection) return;

  const progressFills = skillSection.querySelectorAll('.progress-fill');
  if (!progressFills.length) return;

  // Lưu trữ độ rộng đích ban đầu từ inline style hoặc attribute
  const originalWidths = [];
  progressFills.forEach((fill, i) => {
    originalWidths[i] = fill.style.width || '0%';
    fill.style.width = '0%'; // Thu nhỏ về 0 ban đầu
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Bắt đầu đẩy thanh tiến trình chạy mượt mà
          progressFills.forEach((fill, i) => {
            setTimeout(() => {
              fill.style.width = originalWidths[i];
            }, i * 120);
          });
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });

    observer.observe(skillSection);
  } else {
    // Dự phòng: trả về độ rộng ban đầu
    progressFills.forEach((fill, i) => {
      fill.style.width = originalWidths[i];
    });
  }
}

/**
 * 5. ĐÁNH DẤU MỤC MENU ĐANG XEM KHI CUỘN (ACTIVE LINK ON SCROLL)
 */
function initActiveNavOnScroll() {
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { passive: true });
}

/**
 * 6. CỬA SỔ XEM CHI TIẾT KỶ NIỆM (STORY MODAL)
 */
function initStoryModals() {
  const openButtons = document.querySelectorAll('[data-modal-target]');
  const closeButtons = document.querySelectorAll('.modal-close-btn, .modal-action-btn');
  const modals = document.querySelectorAll('.story-modal-overlay');

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-modal-target');
      const modal = document.getElementById(targetId);
      if (modal) {
        modal.classList.add('is-open');
        document.body.style.overflow = 'hidden'; // Ngăn cuộn trang phía sau
      }
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modal = btn.closest('.story-modal-overlay');
      if (modal) {
        modal.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    });
  });

  // Đóng modal khi bấm ra ngoài phần nội dung
  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    });
  });

  // Đóng modal bằng phím ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const openModal = document.querySelector('.story-modal-overlay.is-open');
      if (openModal) {
        openModal.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    }
  });
}

/**
 * 7. XỬ LÝ BIỂU MẪU LIÊN HỆ (CONTACT FORM)
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const alertBox = document.getElementById('form-feedback');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('user-name');
    const emailInput = document.getElementById('user-email');
    const subjectInput = document.getElementById('user-subject');
    const messageInput = document.getElementById('user-message');

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const subject = subjectInput ? subjectInput.value.trim() : 'Liên hệ từ Portfolio';
    const message = messageInput ? messageInput.value.trim() : '';

    if (!name || !email || !message) {
      if (alertBox) {
        alertBox.textContent = 'Vui lòng điền đầy đủ các thông tin bắt buộc!';
        alertBox.className = 'form-feedback error';
        alertBox.style.display = 'block';
      }
      return;
    }

    // Mở ứng dụng email với nội dung đã nhập
    const mailtoUrl = `mailto:dvanhoang304@gmail.com?subject=${encodeURIComponent(`[Portfolio CV] ${subject} - từ ${name}`)}&body=${encodeURIComponent(`Họ và tên: ${name}\nEmail liên hệ: ${email}\n\nNội dung lời nhắn:\n${message}`)}`;
    window.location.href = mailtoUrl;

    // Hiển thị thông báo thân thiện
    if (alertBox) {
      alertBox.textContent = `Cảm ơn ${name}! Ứng dụng email của bạn đang được mở để gửi tin nhắn tới Hoàng.`;
      alertBox.className = 'form-feedback success';
      alertBox.style.display = 'block';
    }

    // Reset form sau 2 giây
    setTimeout(() => {
      form.reset();
      if (alertBox) {
        setTimeout(() => {
          alertBox.style.display = 'none';
        }, 5000);
      }
    }, 1500);
  });
}
