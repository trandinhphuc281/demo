const Header = {
    render() {
        return /*html*/`
            <div class="header-top">
                <div class="logo">
                    <img src="../../asset/logo.png" alt=""> 
                </div>
                <div class="search">
                    <form action="">
                        <input type="text" id="search" name="" placeholder="   Tìm sản phẩm, danh mục hay thương hiệu mong muốn...">
                        <button type="" id="search-bt">Tìm kiếm</button>
                    </form>
                </div>
                <div class="accounts">
                    <img src="../../asset/account.png" alt="">
                    <ul>
                        <li><a href="">Đăng kí</a></li>
                        <li><a href="">/</a></li>
                        <li><a href="">Đăng nhập</a></li>
                    </ul>
                </div>
                <div class="pro-cart">
                    <a href="">
                        <img src="../../asset/cart-pro.png" alt="">
                    </a>
                    <p>Giỏ hàng</p>
                </div>
            </div>
            <div class="header-main">
                <div class="text-logo">
                    <img src="../../asset/text-logo.png" alt="">
                </div>
                <div class="list-menu-header">
                    <ul>
                        <li><a href="">tokyo revengers tập 1</a></li>
                        <li><a href="">văn phòng thám tử quái vật</a></li>
                        <li><a href="">sách hay</a></li>
                        <li><a href="">nguyễn nhật ánh</a></li>
                        <li><a href="">spy x family</a></li>
                        <li><a href="">muôn kiếp nhân sinh</a></li>
                    </ul>
                </div>
                <div class="icon-soler">
                    <img src="./asset/icon-seller.png" alt="">
                    <p>Bán hàng cùng Tiki</p>
                </div>
            </div>
        `;
    },
};
export default Header;