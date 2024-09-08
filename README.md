- Biết thêm về PassportJS
- Biết thêm về tạo thư mục .env để lưu đường dẫn kết nối database
- Biết thêm về các http status codes thông dụng
- Biết thêm về xác thực và phân quyền cho người dùng.
- Biết thêm về Cookie trên web khi vào ứng dụng

- Chưa hiểu kỹ về code và cách luồng chạy của chức năng
- Còn lỗi phần kết nối database. (Có xem cách fix thì thấy code trong video đã cũ nên có áp dụng cách mới từ video trước nhưng vẫn còn lỗi)
- Em xin thêm tài liệu về phần xác thực và phân quyền này để ôn thêm.

- Về bài trước của em chỉ có mã hóa tài khoản và lưu vào data chứ chưa có xác thực bằng JWT Token như bài này.
- Em có học về sử dụng Token Beer ở khóa học trước em học. Nhưng vẫn còn hơi mơ hồ.

## Góp Ý

1. Khi em tạo env thì em cần tạo 1 file `.env.example`, trong file này sẽ chứa các biến mà em cần trong project **Nhưng giá trị của các biến này là tạm, ko phải key thật** . Lí do cần có file này là để cho các dev khác khi họ down về họ sẽ copy file này và đổi tên lại thành `.env`, rồi họ sẽ điền các giá trị đúng cho các biến đó.

   **Note**:

   - em nhớ là ko dc commit file `.env` lên git vì trong file đó có chứa các key quan trọng, nếu commit lên thì sẽ bị lộ code.
   - các biến để trong `.env` em nên viết hoa hết, vd: SECRET

2. Thiếu package `nodemon`, anh ko biết bên em bị lỗi gì khi em chạy lên nhưng có thể em chưa hiểu hết cấu trúc về nodejs nên em ko chạy lệnh `yarn dev` nên ko bị lỗi.

3. Vấn đề tiếp theo anh thấy là do em tải project từ github về nhưng em ko update thư viện lên bản mới nhất. khi anh chạy lệnh `npm outdated` thì 1 số thư viện đã cũ rồi. em có thể thử trên code của em nha.
