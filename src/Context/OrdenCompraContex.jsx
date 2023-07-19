import React, { createContext, useState } from 'react'

export const OrdenCompraContext = createContext()

export function OrdenCompraContexProvider ({ children }) {
  const [sendMail, setSendMail] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  return (
    <OrdenCompraContext.Provider value={{
      sendMail,
      setSendMail,
      loading,
      setLoading,
      error,
      setError
    }
      }>
          {children}
      </OrdenCompraContext.Provider>
  )
}
