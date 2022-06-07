import Header from "../components/header";
import Footer from "../components/footer";

const BookManager = {
    async render() {
        const books = await (await fetch(`http://localhost:3001/books`)).json();
        console.log(books);
        return /*html*/`
            <div id="header">${Header.render()}</div>
            <div id="news">
                <div class="bg-white w-4/5 mx-auto rounded-md pb-5">
                    <h3 class="m-0 py-5 px-5 text-blue-900 font-bold text-lg">TẤT CẢ SẢN PHẨM</h3>
                    <table class="table-fixed m-5">
                        <thead>
                            <tr>
                                <th class="w-1">STT</th>
                                <th>Tên sách</th>
                                <th>Ảnh</th>
                                <th>Tác giả</th>
                                <th>Mô tả</th>
                                <th>Giá</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${books.map((item, index) => `
                                <tr>
                                    <td class="w-1 text-center">${index + 1}</td>
                                    <td class="text-center font-medium">
                                        <a href="/admin/books/${item.id}">${item.name}</a>
                                    </td>
                                    <td class="w-28">${item.images.map(img => `
                                        <a href="/admin/books/${item.id}">
                                            <img src="${img.base_url}" alt="">
                                        </a>
                                    `).join('')}</td>
                                    <td class="text-center">${item.authors ? item.authors.map(tg => tg.name) : ""}</td>
                                    <td class="text-center">${item.short_description}</td>
                                    <td class="text-center w-20 text-red-500">${item.original_price} đ</td>
                                    <td class="text-center">
                                        <button type="submit" class="bg-red-500 w-20 p-2 rounded mb-1">Delete</button>
                                        <button type="submit" class="bg-sky-400 w-20 p-2 rounded">Edit</button>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
            <div id="footer">${Footer.render()}</div>
        `
    }
}

export default BookManager;