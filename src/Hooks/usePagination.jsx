import { useState, useEffect } from 'react'

export function usePagination ({ products }) {
  const ITEM_FOR_PAGE = 8
  const [items, setItems] = useState([])
  const [currenPage, setCurrentPage] = useState(0)

  useEffect(() => {
    const itemsPage = [...products].splice(0, ITEM_FOR_PAGE)
    setItems(itemsPage)
    setCurrentPage(0)
  }, [products])

  const nextPage = () => {
    const totalElements = products.length
    const nexPage = currenPage + 1
    const firstIndex = nexPage * ITEM_FOR_PAGE

    if (firstIndex >= totalElements) return

    const itemsPage = [...products].splice(firstIndex, ITEM_FOR_PAGE)

    setItems(itemsPage)
    setCurrentPage(nexPage)
  }

  const prevPage = () => {
    const prevPage = currenPage - 1

    if (prevPage < 0) return

    const firstIndex = prevPage * ITEM_FOR_PAGE

    const itemsPage = [...products].splice(firstIndex, ITEM_FOR_PAGE)

    setItems(itemsPage)
    setCurrentPage(prevPage)
  }

  const currentPageVisible = currenPage + 1
  const totalPages = Math.ceil((products.length / ITEM_FOR_PAGE))

  return ({
    items,
    nextPage,
    prevPage,
    currentPageVisible,
    totalPages

  })
}
