import { useEffect, useRef, useState } from "react";
import InputComponent from "../../atoms/input";
import { buttonType } from "../../../enum";
import ButtonComponent from "../../atoms/button";
import axios from "axios";
import styles from './style.module.scss';
import Pagination from "../../molecules/pagination";

type Book = {
  title: string;
  image: string;
  author: string;
  publisher: string;
  discount: string;
  link: string;
  description: string;
};
const DISPLAY_COUNT = 10;
const BookTemplateComponent = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState<Book[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const start = (currentPage - 1) * DISPLAY_COUNT + 1;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [currentPage]);

  useEffect(() => {
    if (query) searchBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start]);

  const handleSearch = () => {
    setCurrentPage(1);
    searchBooks();
  };

  const searchBooks = async () => {
    if (!query) return;
    setLoading(true);

    try {
      const response = await axios.get(
        `/naver-api/v1/search/book.json`,
        {
          params: {
            query: query,
            display: DISPLAY_COUNT,
            start,
          },
          headers: {
            "X-Naver-Client-Id": process.env.REACT_APP_NAVER_CLIENT_ID,
            "X-Naver-Client-Secret": process.env.REACT_APP_NAVER_CLIENT_SECRET,
          },
        }
      )
      if (response.data?.items) {
        setBooks(response.data.items);
        setTotal(Number(response.data.total));
      } else {
        setBooks([]);
        setTotal(0);

      }
    } catch (error) {
      console.error("도서 검색 실패:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className={styles.projectIntro}>
        <h2>📘 프로젝트 소개</h2>
        <p>NAVER Open API를 활용한 책 검색기입니다.</p>
        <p>
          원하는 책 제목을 입력하면 저자, 출판사, 가격, 설명 등의 정보를 확인할 수 있으며,
          페이지네이션을 통해 여러 결과를 나눠서 볼 수 있습니다.
        </p>
      </div>
      <div className={styles.searchContainer}>
        <InputComponent
          label='기본'
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            console.log('e', e)
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <ButtonComponent label='검색' type={buttonType.XLARGE_LOW} onClick={handleSearch} />
      </div>
      {loading && <p>검색 중입니다...</p>}

      {/* 결과 없음 표시 */}
      {!loading && query && books.length === 0 && (
        <p className="text-center text-gray-500"> 검색 결과가 없습니다.</p>
      )}

      {/* 검색 결과 그리드 */}
      <div className={styles.bookInfo} ref={scrollRef}>
        {books.map((book, idx) => (
          <div key={idx} className={styles.bookItem}>
            <a href={book.link} target="_blank" rel="noopener noreferrer">
              <img
                src={book.image || "https://via.placeholder.com/120x174?text=No+Image"}
                alt={book.title}
                className={styles.bookThumbnail}
              />
            </a>
            <div className={styles.bookContent}>
              <div>
                <h2
                  className={styles.bookTitle}
                  dangerouslySetInnerHTML={{ __html: book.title }}
                />
                <div className={styles.bookMeta}>
                  {book.author} | {book.publisher}
                </div>
                <div className={styles.bookPrice}>
                  정가: {Number(book.discount).toLocaleString()}원
                </div>
                <p
                  className={styles.bookDescription}
                  dangerouslySetInnerHTML={{ __html: book.description }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {!loading && books.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalItems={total}
          itemsPerPage={DISPLAY_COUNT}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  );
};

export default BookTemplateComponent;