import ButtonComponent from "../../atoms/button";
import styles from "./style.module.scss";

type PaginationProps = {
    currentPage: number;
    totalItems: number;
    itemsPerPage: number;
    onPageChange: (page: number) => void;
};

const Pagination = (props: PaginationProps) => {
    const { currentPage, totalItems, itemsPerPage, onPageChange } = props
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const maxVisible = 5;

    const startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    const endPage = Math.min(totalPages, startPage + maxVisible - 1);

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    return (
        <div className={styles.pagination}>
            <ButtonComponent
                label="⏮ 처음"
                type={`pageButton`}
                disabled={currentPage === 1}
                onClick={() => onPageChange(1)}
            />
            <ButtonComponent
                label="◀ 이전"
                type={`pageButton`}
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            />
            {pages.map((page) => (

                <ButtonComponent
                    key={page}
                    label={page.toString()}
                    type={`pageButton`}
                    disabled={currentPage === page}
                    onClick={() => onPageChange(page)}
                />
            ))}
            <ButtonComponent
                label="다음 ▶"
                type={`pageButton`}
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            />

            <ButtonComponent
                label="끝 ⏭"
                type={`pageButton`}
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(totalPages)}
            />
        </div>
    );
}

export default Pagination;