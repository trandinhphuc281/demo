import Header from "../components/header";
import Footer from "../components/footer";

const BookDetail = {
    async render(id) {
        const books = await (await fetch(`http://localhost:3001/books/${id}`)).json();
        console.log(books);
        return /*html*/`
            <div id="header">${Header.render()}</div>
            <div id="news mb-0">
                <div class="products-detail" style="width:80%;margin: 0 auto;padding: 50px 0;">
                    <div class="colum1s">
                        <a href="">
                            <img src="${books.images[0].base_url}" alt="">
                        </a>
                        <div style=" display:grid;grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;grid-gap:5px;">
                            ${books.images.map(img => `
                                <img src="${img.base_url}" alt="" style="width:100%;">
                            `).join('')}
                        </div>
                        <p class="flex" style="margin-top:20px;">Chia sẻ đến:
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-facebook.svg" alt="" style="margin-left:35px;margin-right:5px;">
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-messenger.svg" alt="" style="margin-right:5px;">
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-pinterest.svg" alt="" style="margin-right:5px;">
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-twitter.svg" alt="" style="margin-right:5px;">
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-copy.svg" alt="" style="margin-right:5px;">
                        </p>
                    </div>
                    <div class="colum2">
                        <span style="padding-bottom:10px;">Tác giả: ${books.authors ? books.authors.map(tacgia => tacgia.name) : ""}</span>
                        <h3 style="padding-bottom:8px;">Tên sách: ${books.name}</h3>
                        <span style="padding-bottom:10px;font-size: 13px;">${books.quantity_sold.text} | ${books.quantity_sold.value}</span>
                        <p style="font-size: 25px;color:black;text-decoration: none;padding-bottom:10px;">Giá: ${books.original_price}đ
                            <img src="https://salt.tikicdn.com/ts/upload/2e/da/c9/4b9c0150392c753ccb65b2595500e9d6.png" alt="" style="width:120px;">
                        </p>
                        <span style="color:black;">Địa chỉ:
                            <a href="" style="color:rgb(26, 148, 255);" >
                                Q.Hoàn Kiếm, P.Hàng Trống, Hà Nội
                            </a>
                        </span>
                        <form action="" style="text-align:center;">
                            Số lượng:
                            <input type="number" min="0" id="" name="" style="border:1px solid #cccc;margin-bottom:10px;"><br>
                            <button style="padding:7px;height:40px;width:100px;border-radius:10px;">Chọn Mua</button>
                         </form>
                    </div>
                    <div class="colum3">
                        <h4>${books.specifications[0].name}</h4>
                        <table style="width:100%;border:1px solid #ffff;">
                            <tbody>
                                ${books.specifications[0].attributes.map(cty => `
                                    <tr>
                                        <td style="width:50%;">${cty.name}</td>
                                        <td>${cty.value}</td>
                                    </tr>
                                `).join('')}   
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="profiles" style="width:80%;margin:0 auto;padding-bottom:50px;">
                    <h4 style="font-size: 25px;">Mô tả sản phẩm</h4>
                    <p>${books.description}</p>
                </div>
            </div>
            <div id="footer">${Footer.render()}</div>
        `
    }
}

export default BookDetail;
