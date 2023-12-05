import { expect, test } from 'vitest'
import { transform } from '../src/index.js'

test('set', () => {
  const res = transform(new Set([1, 2, 3] as const), (x) => x.toString())
  expect(res).toEqual(new Set(['1', '2', '3']))
})

test('map', () => {
  const res = transform(
    new Map([
      [1, 'a'],
      [2, 'b'],
      [3, 'c']
    ] as const),
    ([k, v], index) => [index, JSON.stringify([k, v])]
  )

  expect(res).toEqual(
    new Map([
      [0, '[1,"a"]'],
      [1, '[2,"b"]'],
      [2, '[3,"c"]']
    ])
  )
})

test('object', () => {
  expect(
    transform(
      {
        key: 'value'
      } as const,
      ([k, v]) => [k.toUpperCase(), v.toUpperCase()]
    )
  ).toEqual({
    KEY: 'VALUE'
  })
})
