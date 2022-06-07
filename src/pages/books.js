import Header from "../components/header";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Books = {
    async render() {
        const books = await (await fetch(`http://localhost:3001/books`)).json();
        console.log(books);
        return /*html*/`
            <div id="header">${Header.render()}</div>
                <div id="news">
                    <div class="news-main">
                        ${Navbar.render()}
                        <div class="new-pro">
                            <div class="banner">
                                <div class="banner-text">
                                    <h2>Nhà Sách TiKi</h2>
                                </div>
                                <div class="banner-img">
                                    <img src="../../asset/banner.png" alt="">
                                </div>
                            </div>
                            <div class="new-pro-menu">
                                <ul>
                                    <li><a href="">Phổ Biến</a></li>
                                    <li><a href="">Bán Chạy</a></li>
                                    <li><a href="">Hàng Mới</a></li>
                                    <li><a href="">Giá Thấp</a></li>
                                    <li><a href="">Giá Cao</a></li>
                                    <li><a href="/admin/books" data-navigo>Quản lý</a></li>
                                </ul>
                            </div>
                            <div class="products">
                                ${books.map(items => `
                                    <div class="pro_col">
                                        <a href="">
                                            <img src="${items.images[0].base_url}" alt="">
                                            
                                            <h3>${items.name}</h3>
                                            <p>Giá bán: ${items.original_price}đ</p>
                                        </a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            <div id="footer">${Footer.render()}</div>
        `
    }
}

export default Books;