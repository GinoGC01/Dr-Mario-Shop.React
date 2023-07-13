import { useId } from 'react'

export function useIDS () {
  const NAME_ID_FORCOMP = useId()
  const EMAIL_ID_FORCOMP = useId()
  const NUMERO_TEL_ID_FORCOMP = useId()
  const DIRECTION_ID_FORCOMP = useId()
  const INDICACIONES_ID_FORCOMP = useId()

  return ({
    NAME_ID_FORCOMP,
    EMAIL_ID_FORCOMP,
    NUMERO_TEL_ID_FORCOMP,
    DIRECTION_ID_FORCOMP,
    INDICACIONES_ID_FORCOMP
  })
}
