import React from 'react'
import ReactPaginate from 'react-paginate'
import Icon from '../Icon'
import {
  NEXT_LABEL_DEFAULT_TEXT,
  PREVIOUS_LABEL_DEFAULT_TEXT,
  PAGE_RANGE_DISPLAYED
} from './consts'
import { TPaginationProps } from './types'
import '../../assets/styles/components/_pagination.scss'
import classNames from 'classnames'

export const Pagination = (props: TPaginationProps): JSX.Element | null => {
  const {
    labels = {
      next: NEXT_LABEL_DEFAULT_TEXT,
      previous: PREVIOUS_LABEL_DEFAULT_TEXT
    },
    totalCount,
    handleChangePage,
    breakLabel = <Icon name="more" />,
    classname = '',
    size = 'large',
    pageSize
  } = props

  const handlePageChange = ({ selected }: { selected: number }) => {
    handleChangePage(selected + 1)
  }

  return (
    <div className="pagination-wrapper flexbox git status">
      <ReactPaginate
        pageCount={totalCount / pageSize}
        pageRangeDisplayed={PAGE_RANGE_DISPLAYED}
        marginPagesDisplayed={1}
        onPageChange={handlePageChange}
        containerClassName={classNames(`pagination pagination--${size}`, classname)}
        activeClassName={classname || 'active'}
        previousLabel={labels?.previous}
        nextLabel={labels?.next}
        breakClassName="page-item"
        breakLinkClassName="page-link"
        breakLabel={breakLabel}
        initialPage={0}
      />
    </div>
  )
}
