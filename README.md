# Portfolio CV — Đinh Văn Hoàng

## Mô tả

**My-CV** là trang CV/portfolio cá nhân của **Đinh Văn Hoàng**. Website giới thiệu thông tin cá nhân, sở thích và kỹ năng, đồng thời trưng bày một số khoảnh khắc đáng nhớ dưới dạng các thẻ nội dung. Dự án được xây dựng hoàn toàn bằng **HTML5 và CSS3**, không phụ thuộc framework hay backend.

## Chức năng

- Trang giới thiệu bản thân với ảnh đại diện và mô tả ngắn.
- Thanh điều hướng dạng sticky, hỗ trợ cuộn đến từng khu vực trên trang.
- Danh sách sở thích/kỹ năng hiển thị dưới dạng chip.
- Danh sách kỷ niệm hiển thị bằng bố cục lưới.
- Liên kết email và Zalo để người xem có thể liên hệ trực tiếp.
- Thiết kế responsive cho điện thoại, máy tính bảng và máy tính để bàn.
- Cuộn mượt, hiệu ứng chuyển động nhẹ và hỗ trợ chế độ ưu tiên giảm chuyển động (`prefers-reduced-motion`).
- Hỗ trợ truy cập cơ bản bằng thẻ ngữ nghĩa, thuộc tính `aria` và `alt` cho hình ảnh.

## Công nghệ sử dụng

- HTML5
- CSS3: Flexbox, CSS Grid, Custom Properties, Media Queries
- Git và GitHub
- Máy chủ tĩnh Python hoặc Docker/Nginx (tùy cách chạy)

> Trang không sử dụng JavaScript, cơ sở dữ liệu, thư viện CSS hay trình quản lý package.

## Cấu trúc thư mục

```text
My-CV/
├── index.html             # Nội dung và cấu trúc trang
├── assets/
│   ├── css/
│   │   └── styles.css     # Toàn bộ giao diện và responsive
│   └── img/               # Ảnh đại diện và ảnh kỷ niệm
├── BAOCAO-A2.1.docx       # Báo cáo bài tập
└── README.md              # Tài liệu hướng dẫn
```

## Yêu cầu môi trường

### Chạy trực tiếp trong trình duyệt

- Trình duyệt mới: Microsoft Edge, Google Chrome, Firefox hoặc Safari.
- Git (khuyến nghị để tải mã nguồn).

### Chạy bằng máy chủ nội bộ Python

- Python 3.8 trở lên.
- Một terminal phù hợp với hệ điều hành đang dùng.

Kiểm tra Python:

```bash
python --version
```

### Chạy bằng Docker

- Docker Desktop trên Windows hoặc macOS.
- Docker Engine và Docker Compose trên Linux.
- Cổng `8080` chưa được sử dụng trên máy.

## Cài đặt

### 1. Sao chép dự án

```bash
git clone https://github.com/dvanhoang840-svg/My-CV.git
cd My-CV
```

Nếu không dùng Git, hãy tải repository dưới dạng ZIP từ GitHub, giải nén rồi mở terminal tại thư mục chứa `index.html`.

### 2. Windows

**Mở trực tiếp:**

- Chạy `index.html` bằng trình duyệt hoặc nhấn đúp chuột vào tệp này.

**Chạy qua terminal PowerShell:**

```powershell
cd "D:\đường-dẫn\My-CV"
python -m http.server 8080
```

**Chạy qua Command Prompt (CMD):**

```bat
cd /d D:\đường-dẫn\My-CV
python -m http.server 8080
```

Kiểm tra Python không tồn tại:

```powershell
py --version
py -m http.server 8080
```

### 3. macOS

**Cài Python bằng Homebrew nếu cần:**

```bash
brew install python
```

**Chạy máy chủ:**

```bash
cd /đường-dẫn/My-CV
python3 -m http.server 8080
```

### 4. Linux

Ví dụ trên Ubuntu/Debian:

```bash
sudo apt update
sudo apt install python3
cd /đường-dẫn/My-CV
python3 -m http.server 8080
```

Trên Fedora/RHEL có thể dùng:

```bash
sudo dnf install python3
```

> Nếu chạy máy chủ ảo, thay `8080` bằng một cổng được mở trên firewall của hệ thống.

## Chạy thử

Sau khi khởi động máy chủ, truy cập trong trình duyệt:

- http://localhost:8080
- http://127.0.0.1:8080

Nhấn `Ctrl+C` trong terminal để dừng máy chủ.

### Kiểm tra bằng Docker

**macOS/Linux:**

```bash
docker run --rm -p 8080:80 -v "$PWD:/usr/share/nginx/html:ro" nginx:alpine
```

**Windows PowerShell:**

```powershell
docker run --rm -p 8080:80 -v "${PWD}:/usr/share/nginx/html:ro" nginx:alpine
```

Sau đó mở http://localhost:8080.

Bạn cũng có thể tạo file `docker-compose.yml` tại thư mục gốc:

```yaml
services:
  cv-site:
    image: nginx:alpine
    ports:
      - "8080:80"
    volumes:
      - ./:/usr/share/nginx/html:ro
    restart: unless-stopped
```

Chạy và dừng bằng Compose:

```bash
docker compose up -d
docker compose down
```

## Cấu hình

### Thay đổi nội dung

Chỉnh sửa nội dung trong [`index.html`](./index.html), gồm:

- Tiêu đề, mô tả và vai trò trong phần Hero.
- Danh sách sở thích/kỹ năng trong `#skills`.
- Các thẻ kỷ niệm trong `#projects`.
- Email và Zalo trong `#contact`.

### Thay đổi giao diện

Chỉnh sửa [`assets/css/styles.css`](./assets/css/styles.css). Các thông số màu sắc, font chữ, khoảng cách và bo góc chủ yếu nằm trong khối CSS Custom Properties ở đầu tệp:

```css
:root {
  --color-primary: #4f46e5;
  --color-accent: #06b6d4;
  --color-bg: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --container-max: 1200px;
  --radius: 14px;
}
```

### Thay đổi hình ảnh

- Ảnh đại diện: `assets/img/avatar.jpg`.
- Ảnh các mục kỷ niệm: các tệp JPG trong thư mục `assets/img/`.
- Sau khi thay ảnh, cập nhật thuộc tính `src` tương ứng trong `index.html`.
- Khuyến nghị dùng ảnh định dạng JPG/WebP và tối ưu kích thước để tải nhanh hơn.

### Thêm liên kết liên hệ

Trong phần `#contact`, email dùng định dạng `mailto:` còn Zalo dùng liên kết `https://zalo.me/...`:

```html
<a href="mailto:dvanhoang304@gmail.com">dvanhoang304@gmail.com</a>
<a href="https://zalo.me/0983989930">0983989930</a>
```

## Triển khai tĩnh

Dự án có thể triển khai trực tiếp trên các dịch vụ hosting tĩnh như GitHub Pages, Cloudflare Pages hoặc Netlify.

Ví dụ với GitHub Pages:

1. Đưa mã nguồn lên nhánh `main`.
2. Vào **Settings → Pages** của repository.
3. Ở phần **Build and deployment**, chọn **Deploy from a branch**.
4. Chọn nhánh `main` và thư mục `/ (root)`.
5. Lưu cấu hình và truy cập URL GitHub Pages được cấp.

## Xử lý lỗi thường gặp

### Không mở được ảnh hoặc CSS

- Đảm bảo thư mục `assets` nằm cùng cấp với `index.html`.
- Không đổi sai chữ hoa/chữ thường trong tên thư mục và tên tệp.
- Mở trang qua máy chủ HTTP thay vì lịch sử cache; thử tải lại bằng `Ctrl+F5` hoặc xóa cache.

### Python không nhận lệnh

- Windows: thử thay `python` bằng `py`.
- macOS/Linux: dùng `python3` thay cho `python`.
- Khởi động lại terminal sau khi cài Python.

### Cổng 8080 đã được sử dụng

Đổi sang cổng khác, ví dụ `8081`:

```bash
python -m http.server 8081
```

Hoặc trên macOS/Linux với Docker:

```bash
docker run --rm -p 8081:80 -v "$PWD:/usr/share/nginx/html:ro" nginx:alpine
```

## Thông tin liên hệ

- **Họ và tên:** Đinh Văn Hoàng
- **Email:** [dvanhoang304@gmail.com](mailto:dvanhoang304@gmail.com)
- **Zalo:** [0983989930](https://zalo.me/0983989930)
- **GitHub:** https://github.com/dvanhoang840-svg/My-CV

## Giấy phép

Repository chưa khai báo tệp license riêng. Nếu sử dụng lại hoặc phân phối, hãy liên hệ tác giả để xin phép.
