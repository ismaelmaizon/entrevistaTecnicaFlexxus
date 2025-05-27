import expres, { Response } from 'express'

const router = expres.Router()

router.get('/', (_req, res: Response) => {
  const n = 100
  const numerosImpares = []
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      numerosImpares.push(i)
    }
  }
  res.json(numerosImpares)
})

export default router
