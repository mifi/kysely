import type {
  NoDehydrate,
  NumericString,
  ShallowDehydrateObject,
  ShallowDehydrateValue,
} from '..'
import { expectType } from 'tsd'

type NumericStringUnion = NumericString
type LiteralNumericUnion = '1' | '2'

type Baseline = ShallowDehydrateObject<{ b: NumericStringUnion }>
type DecoratedRoot = ShallowDehydrateObject<{
  b: NoDehydrate<NumericStringUnion>
}>
type DecoratedValue = ShallowDehydrateValue<NoDehydrate<NumericStringUnion>>
type DecoratedLiteralRoot = ShallowDehydrateObject<{
  b: NoDehydrate<LiteralNumericUnion>
}>
type DecoratedArrayRoot = ShallowDehydrateObject<{
  b: NoDehydrate<NumericStringUnion[]>
}>
type DecoratedArrayElement = ShallowDehydrateObject<{
  b: NoDehydrate<NumericStringUnion>[]
}>

expectType<{ b: number }>({} as Baseline)
expectType<{ b: NumericStringUnion }>({} as DecoratedRoot)
expectType<NumericStringUnion>({} as DecoratedValue)
expectType<{ b: LiteralNumericUnion }>({} as DecoratedLiteralRoot)
expectType<{ b: NumericStringUnion[] }>({} as DecoratedArrayRoot)
expectType<{ b: NumericStringUnion[] }>({} as DecoratedArrayElement)
