const Navbar = {
    render() {
        return /*html*/`
            <div class="menu-text">
                <div class="box-1">
                    <h4>DANH MỤC SẢN PHẨM</h4>
                    <ul>
                    <li><a href="">English Books</a></li>
                    <li><a href="">Sách tiếng Việt</a></li>
                    <li><a href="">Văn phòng phẩm</a></li>
                    <li><a href="">Quà lưu niệm</a></li>
                    </ul>
                </div>
                <div class="box-1">
                    <h4>ĐỊA CHỈ NHẬN HÀNG</h4>
                    <ul class="address">
                    <li><a href="">Q.Hoàn Kiếm, P.Hàng Trống, Hà Nội</a></li>
                    </ul>
                </div>
                <div class="box-2">
                    <h4>DỊCH VỤ</h4>
                    <div class="check-box1">
                    <input type="checkbox" id="" name="">
                    <img src="./asset/icon-tikinow.png" alt="">
                    <p>Giao Siêu Tốc 2H</p>
                    </div>
                    <div class="check-box1">
                    <input type="checkbox" id="" name="">
                    <img src="./asset/icon-freeship.png" alt="">
                    <p>Không Giới Hạn</p>
                    </div>
                    <div class="check-box2">
                    <input type="checkbox" id="" name="">
                    <p>Rẻ Hơn Hoàn Tiền</p>
                    </div>
                    <div class="check-box2">
                    <input type="checkbox" id="" name="">
                    <p>Trả Góp 0%</p>
                    </div>
                </div>
                <div class="box-3">
                    <h4>NƠI BÁN</h4>
                    <input type="checkbox" name="" id="">Hà Nội<br>
                    <input type="checkbox" name="" id="">Hồ Chí Minh <br>
                    <input type="checkbox" name="" id="">Đà Nẵng <br>
                    <input type="checkbox" name="" id="">Ninh Thuận<br>
                    <input type="checkbox" name="" id="">Thái Nguyên<br>
                </div>
                <div class="box-3">
                    <h4>THƯƠNG HIỆU</h4>
                    <input type="checkbox" name="" id="">Thiên Long<br>
                    <input type="checkbox" name="" id="">CHONMUA 365<br>
                    <input type="checkbox" name="" id="">Deli<br>
                    <input type="checkbox" name="" id="">Stabilo<br>
                    <input type="checkbox" name="" id="">Pentel<br>
                </div>
                <div class="box-3">
                    <h4>NHÀ CUNG CẤP</h4>
                    <input type="checkbox" name="" id="">Nhà sách Fahasa<br>
                    <input type="checkbox" name="" id="">Tiki Trading<br>
                    <input type="checkbox" name="" id="">Nhà Sách Vĩnh Thụy<br>
                    <input type="checkbox" name="" id="">Minhhabooks<br>
                    <input type="checkbox" name="" id="">Times Books<br>
                </div>
                <div class="box-4">
                    <h4>GIAO HÀNG</h4>
                    <input type="radio" name="" id="">Hàng Nội Địa<br>
                    <input type="radio" name="" id="">Hàng Quốc Tế<br>
                </div>
            </div>
        `;
    },
};
export default Navbar;