import Navigo from 'navigo'; // When using ES modules.
import Books from './pages/books';
import BookManager from './pages/books-manager';
import BookDetail from './pages/books-detail-manager';
import '../style.css';

const router = new Navigo('/', { linksSelector: "a" });
const print = async function (page, id) {
  const app = document.getElementById('app');
  if (app) {
    app.innerHTML = await page.render(id);
  }
};

router.on({
  '/': () => print(Books),
  '/admin/books': () => print(BookManager),
  '/admin/books/:id': (data) => {
    const id = +data.data.id;
    print(BookDetail, id);
  },
});
router.resolve();