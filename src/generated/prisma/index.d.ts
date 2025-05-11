
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserWallet
 * 
 */
export type UserWallet = $Result.DefaultSelection<Prisma.$UserWalletPayload>
/**
 * Model LinkedAccount
 * 
 */
export type LinkedAccount = $Result.DefaultSelection<Prisma.$LinkedAccountPayload>
/**
 * Model Token
 * 
 */
export type Token = $Result.DefaultSelection<Prisma.$TokenPayload>
/**
 * Model Engagement
 * 
 */
export type Engagement = $Result.DefaultSelection<Prisma.$EngagementPayload>
/**
 * Model TokenTransaction
 * 
 */
export type TokenTransaction = $Result.DefaultSelection<Prisma.$TokenTransactionPayload>
/**
 * Model BuyAmount
 * 
 */
export type BuyAmount = $Result.DefaultSelection<Prisma.$BuyAmountPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userWallet`: Exposes CRUD operations for the **UserWallet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserWallets
    * const userWallets = await prisma.userWallet.findMany()
    * ```
    */
  get userWallet(): Prisma.UserWalletDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.linkedAccount`: Exposes CRUD operations for the **LinkedAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LinkedAccounts
    * const linkedAccounts = await prisma.linkedAccount.findMany()
    * ```
    */
  get linkedAccount(): Prisma.LinkedAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.engagement`: Exposes CRUD operations for the **Engagement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Engagements
    * const engagements = await prisma.engagement.findMany()
    * ```
    */
  get engagement(): Prisma.EngagementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tokenTransaction`: Exposes CRUD operations for the **TokenTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TokenTransactions
    * const tokenTransactions = await prisma.tokenTransaction.findMany()
    * ```
    */
  get tokenTransaction(): Prisma.TokenTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.buyAmount`: Exposes CRUD operations for the **BuyAmount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BuyAmounts
    * const buyAmounts = await prisma.buyAmount.findMany()
    * ```
    */
  get buyAmount(): Prisma.BuyAmountDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    UserWallet: 'UserWallet',
    LinkedAccount: 'LinkedAccount',
    Token: 'Token',
    Engagement: 'Engagement',
    TokenTransaction: 'TokenTransaction',
    BuyAmount: 'BuyAmount'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userWallet" | "linkedAccount" | "token" | "engagement" | "tokenTransaction" | "buyAmount"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserWallet: {
        payload: Prisma.$UserWalletPayload<ExtArgs>
        fields: Prisma.UserWalletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserWalletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWalletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserWalletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWalletPayload>
          }
          findFirst: {
            args: Prisma.UserWalletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWalletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserWalletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWalletPayload>
          }
          findMany: {
            args: Prisma.UserWalletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWalletPayload>[]
          }
          create: {
            args: Prisma.UserWalletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWalletPayload>
          }
          createMany: {
            args: Prisma.UserWalletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserWalletCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWalletPayload>[]
          }
          delete: {
            args: Prisma.UserWalletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWalletPayload>
          }
          update: {
            args: Prisma.UserWalletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWalletPayload>
          }
          deleteMany: {
            args: Prisma.UserWalletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserWalletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserWalletUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWalletPayload>[]
          }
          upsert: {
            args: Prisma.UserWalletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWalletPayload>
          }
          aggregate: {
            args: Prisma.UserWalletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserWallet>
          }
          groupBy: {
            args: Prisma.UserWalletGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserWalletGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserWalletCountArgs<ExtArgs>
            result: $Utils.Optional<UserWalletCountAggregateOutputType> | number
          }
        }
      }
      LinkedAccount: {
        payload: Prisma.$LinkedAccountPayload<ExtArgs>
        fields: Prisma.LinkedAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LinkedAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LinkedAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountPayload>
          }
          findFirst: {
            args: Prisma.LinkedAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LinkedAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountPayload>
          }
          findMany: {
            args: Prisma.LinkedAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountPayload>[]
          }
          create: {
            args: Prisma.LinkedAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountPayload>
          }
          createMany: {
            args: Prisma.LinkedAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LinkedAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountPayload>[]
          }
          delete: {
            args: Prisma.LinkedAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountPayload>
          }
          update: {
            args: Prisma.LinkedAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountPayload>
          }
          deleteMany: {
            args: Prisma.LinkedAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LinkedAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LinkedAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountPayload>[]
          }
          upsert: {
            args: Prisma.LinkedAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountPayload>
          }
          aggregate: {
            args: Prisma.LinkedAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLinkedAccount>
          }
          groupBy: {
            args: Prisma.LinkedAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<LinkedAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.LinkedAccountCountArgs<ExtArgs>
            result: $Utils.Optional<LinkedAccountCountAggregateOutputType> | number
          }
        }
      }
      Token: {
        payload: Prisma.$TokenPayload<ExtArgs>
        fields: Prisma.TokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
      Engagement: {
        payload: Prisma.$EngagementPayload<ExtArgs>
        fields: Prisma.EngagementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EngagementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngagementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EngagementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngagementPayload>
          }
          findFirst: {
            args: Prisma.EngagementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngagementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EngagementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngagementPayload>
          }
          findMany: {
            args: Prisma.EngagementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngagementPayload>[]
          }
          create: {
            args: Prisma.EngagementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngagementPayload>
          }
          createMany: {
            args: Prisma.EngagementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EngagementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngagementPayload>[]
          }
          delete: {
            args: Prisma.EngagementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngagementPayload>
          }
          update: {
            args: Prisma.EngagementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngagementPayload>
          }
          deleteMany: {
            args: Prisma.EngagementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EngagementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EngagementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngagementPayload>[]
          }
          upsert: {
            args: Prisma.EngagementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngagementPayload>
          }
          aggregate: {
            args: Prisma.EngagementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEngagement>
          }
          groupBy: {
            args: Prisma.EngagementGroupByArgs<ExtArgs>
            result: $Utils.Optional<EngagementGroupByOutputType>[]
          }
          count: {
            args: Prisma.EngagementCountArgs<ExtArgs>
            result: $Utils.Optional<EngagementCountAggregateOutputType> | number
          }
        }
      }
      TokenTransaction: {
        payload: Prisma.$TokenTransactionPayload<ExtArgs>
        fields: Prisma.TokenTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenTransactionPayload>
          }
          findFirst: {
            args: Prisma.TokenTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenTransactionPayload>
          }
          findMany: {
            args: Prisma.TokenTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenTransactionPayload>[]
          }
          create: {
            args: Prisma.TokenTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenTransactionPayload>
          }
          createMany: {
            args: Prisma.TokenTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenTransactionPayload>[]
          }
          delete: {
            args: Prisma.TokenTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenTransactionPayload>
          }
          update: {
            args: Prisma.TokenTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenTransactionPayload>
          }
          deleteMany: {
            args: Prisma.TokenTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenTransactionPayload>[]
          }
          upsert: {
            args: Prisma.TokenTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenTransactionPayload>
          }
          aggregate: {
            args: Prisma.TokenTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTokenTransaction>
          }
          groupBy: {
            args: Prisma.TokenTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TokenTransactionCountAggregateOutputType> | number
          }
        }
      }
      BuyAmount: {
        payload: Prisma.$BuyAmountPayload<ExtArgs>
        fields: Prisma.BuyAmountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BuyAmountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyAmountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BuyAmountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyAmountPayload>
          }
          findFirst: {
            args: Prisma.BuyAmountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyAmountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BuyAmountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyAmountPayload>
          }
          findMany: {
            args: Prisma.BuyAmountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyAmountPayload>[]
          }
          create: {
            args: Prisma.BuyAmountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyAmountPayload>
          }
          createMany: {
            args: Prisma.BuyAmountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BuyAmountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyAmountPayload>[]
          }
          delete: {
            args: Prisma.BuyAmountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyAmountPayload>
          }
          update: {
            args: Prisma.BuyAmountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyAmountPayload>
          }
          deleteMany: {
            args: Prisma.BuyAmountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BuyAmountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BuyAmountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyAmountPayload>[]
          }
          upsert: {
            args: Prisma.BuyAmountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyAmountPayload>
          }
          aggregate: {
            args: Prisma.BuyAmountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBuyAmount>
          }
          groupBy: {
            args: Prisma.BuyAmountGroupByArgs<ExtArgs>
            result: $Utils.Optional<BuyAmountGroupByOutputType>[]
          }
          count: {
            args: Prisma.BuyAmountCountArgs<ExtArgs>
            result: $Utils.Optional<BuyAmountCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userWallet?: UserWalletOmit
    linkedAccount?: LinkedAccountOmit
    token?: TokenOmit
    engagement?: EngagementOmit
    tokenTransaction?: TokenTransactionOmit
    buyAmount?: BuyAmountOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    linkedAccounts: number
    engagements: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    linkedAccounts?: boolean | UserCountOutputTypeCountLinkedAccountsArgs
    engagements?: boolean | UserCountOutputTypeCountEngagementsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLinkedAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkedAccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEngagementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EngagementWhereInput
  }


  /**
   * Count Type TokenCountOutputType
   */

  export type TokenCountOutputType = {
    transactions: number
    Engagement: number
  }

  export type TokenCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | TokenCountOutputTypeCountTransactionsArgs
    Engagement?: boolean | TokenCountOutputTypeCountEngagementArgs
  }

  // Custom InputTypes
  /**
   * TokenCountOutputType without action
   */
  export type TokenCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenCountOutputType
     */
    select?: TokenCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TokenCountOutputType without action
   */
  export type TokenCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenTransactionWhereInput
  }

  /**
   * TokenCountOutputType without action
   */
  export type TokenCountOutputTypeCountEngagementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EngagementWhereInput
  }


  /**
   * Count Type TokenTransactionCountOutputType
   */

  export type TokenTransactionCountOutputType = {
    Engagement: number
  }

  export type TokenTransactionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Engagement?: boolean | TokenTransactionCountOutputTypeCountEngagementArgs
  }

  // Custom InputTypes
  /**
   * TokenTransactionCountOutputType without action
   */
  export type TokenTransactionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenTransactionCountOutputType
     */
    select?: TokenTransactionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TokenTransactionCountOutputType without action
   */
  export type TokenTransactionCountOutputTypeCountEngagementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EngagementWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    fid: number | null
  }

  export type UserSumAggregateOutputType = {
    fid: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    fid: number | null
    username: string | null
    displayName: string | null
    pfp: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fid: number | null
    username: string | null
    displayName: string | null
    pfp: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fid: number
    username: number
    displayName: number
    pfp: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    fid?: true
  }

  export type UserSumAggregateInputType = {
    fid?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    fid?: true
    username?: true
    displayName?: true
    pfp?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fid?: true
    username?: true
    displayName?: true
    pfp?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fid?: true
    username?: true
    displayName?: true
    pfp?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    fid: number
    username: string
    displayName: string | null
    pfp: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fid?: boolean
    username?: boolean
    displayName?: boolean
    pfp?: boolean
    createdAt?: boolean
    wallet?: boolean | User$walletArgs<ExtArgs>
    linkedAccounts?: boolean | User$linkedAccountsArgs<ExtArgs>
    engagements?: boolean | User$engagementsArgs<ExtArgs>
    buyAmount?: boolean | User$buyAmountArgs<ExtArgs>
    token?: boolean | User$tokenArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fid?: boolean
    username?: boolean
    displayName?: boolean
    pfp?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fid?: boolean
    username?: boolean
    displayName?: boolean
    pfp?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fid?: boolean
    username?: boolean
    displayName?: boolean
    pfp?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fid" | "username" | "displayName" | "pfp" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | User$walletArgs<ExtArgs>
    linkedAccounts?: boolean | User$linkedAccountsArgs<ExtArgs>
    engagements?: boolean | User$engagementsArgs<ExtArgs>
    buyAmount?: boolean | User$buyAmountArgs<ExtArgs>
    token?: boolean | User$tokenArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      wallet: Prisma.$UserWalletPayload<ExtArgs> | null
      linkedAccounts: Prisma.$LinkedAccountPayload<ExtArgs>[]
      engagements: Prisma.$EngagementPayload<ExtArgs>[]
      buyAmount: Prisma.$BuyAmountPayload<ExtArgs> | null
      token: Prisma.$TokenPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fid: number
      username: string
      displayName: string | null
      pfp: string | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wallet<T extends User$walletArgs<ExtArgs> = {}>(args?: Subset<T, User$walletArgs<ExtArgs>>): Prisma__UserWalletClient<$Result.GetResult<Prisma.$UserWalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    linkedAccounts<T extends User$linkedAccountsArgs<ExtArgs> = {}>(args?: Subset<T, User$linkedAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkedAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    engagements<T extends User$engagementsArgs<ExtArgs> = {}>(args?: Subset<T, User$engagementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EngagementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    buyAmount<T extends User$buyAmountArgs<ExtArgs> = {}>(args?: Subset<T, User$buyAmountArgs<ExtArgs>>): Prisma__BuyAmountClient<$Result.GetResult<Prisma.$BuyAmountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    token<T extends User$tokenArgs<ExtArgs> = {}>(args?: Subset<T, User$tokenArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly fid: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly pfp: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.wallet
   */
  export type User$walletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWallet
     */
    select?: UserWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWallet
     */
    omit?: UserWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWalletInclude<ExtArgs> | null
    where?: UserWalletWhereInput
  }

  /**
   * User.linkedAccounts
   */
  export type User$linkedAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccount
     */
    select?: LinkedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccount
     */
    omit?: LinkedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountInclude<ExtArgs> | null
    where?: LinkedAccountWhereInput
    orderBy?: LinkedAccountOrderByWithRelationInput | LinkedAccountOrderByWithRelationInput[]
    cursor?: LinkedAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LinkedAccountScalarFieldEnum | LinkedAccountScalarFieldEnum[]
  }

  /**
   * User.engagements
   */
  export type User$engagementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engagement
     */
    select?: EngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engagement
     */
    omit?: EngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngagementInclude<ExtArgs> | null
    where?: EngagementWhereInput
    orderBy?: EngagementOrderByWithRelationInput | EngagementOrderByWithRelationInput[]
    cursor?: EngagementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EngagementScalarFieldEnum | EngagementScalarFieldEnum[]
  }

  /**
   * User.buyAmount
   */
  export type User$buyAmountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyAmount
     */
    select?: BuyAmountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuyAmount
     */
    omit?: BuyAmountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyAmountInclude<ExtArgs> | null
    where?: BuyAmountWhereInput
  }

  /**
   * User.token
   */
  export type User$tokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    where?: TokenWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserWallet
   */

  export type AggregateUserWallet = {
    _count: UserWalletCountAggregateOutputType | null
    _min: UserWalletMinAggregateOutputType | null
    _max: UserWalletMaxAggregateOutputType | null
  }

  export type UserWalletMinAggregateOutputType = {
    id: string | null
    userId: string | null
    address: string | null
    encryptedKey: string | null
    iv: string | null
    authTag: string | null
    createdAt: Date | null
  }

  export type UserWalletMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    address: string | null
    encryptedKey: string | null
    iv: string | null
    authTag: string | null
    createdAt: Date | null
  }

  export type UserWalletCountAggregateOutputType = {
    id: number
    userId: number
    address: number
    encryptedKey: number
    iv: number
    authTag: number
    createdAt: number
    _all: number
  }


  export type UserWalletMinAggregateInputType = {
    id?: true
    userId?: true
    address?: true
    encryptedKey?: true
    iv?: true
    authTag?: true
    createdAt?: true
  }

  export type UserWalletMaxAggregateInputType = {
    id?: true
    userId?: true
    address?: true
    encryptedKey?: true
    iv?: true
    authTag?: true
    createdAt?: true
  }

  export type UserWalletCountAggregateInputType = {
    id?: true
    userId?: true
    address?: true
    encryptedKey?: true
    iv?: true
    authTag?: true
    createdAt?: true
    _all?: true
  }

  export type UserWalletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserWallet to aggregate.
     */
    where?: UserWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWallets to fetch.
     */
    orderBy?: UserWalletOrderByWithRelationInput | UserWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserWallets
    **/
    _count?: true | UserWalletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserWalletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserWalletMaxAggregateInputType
  }

  export type GetUserWalletAggregateType<T extends UserWalletAggregateArgs> = {
        [P in keyof T & keyof AggregateUserWallet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserWallet[P]>
      : GetScalarType<T[P], AggregateUserWallet[P]>
  }




  export type UserWalletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWalletWhereInput
    orderBy?: UserWalletOrderByWithAggregationInput | UserWalletOrderByWithAggregationInput[]
    by: UserWalletScalarFieldEnum[] | UserWalletScalarFieldEnum
    having?: UserWalletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserWalletCountAggregateInputType | true
    _min?: UserWalletMinAggregateInputType
    _max?: UserWalletMaxAggregateInputType
  }

  export type UserWalletGroupByOutputType = {
    id: string
    userId: string
    address: string
    encryptedKey: string
    iv: string
    authTag: string
    createdAt: Date
    _count: UserWalletCountAggregateOutputType | null
    _min: UserWalletMinAggregateOutputType | null
    _max: UserWalletMaxAggregateOutputType | null
  }

  type GetUserWalletGroupByPayload<T extends UserWalletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserWalletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserWalletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserWalletGroupByOutputType[P]>
            : GetScalarType<T[P], UserWalletGroupByOutputType[P]>
        }
      >
    >


  export type UserWalletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    address?: boolean
    encryptedKey?: boolean
    iv?: boolean
    authTag?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userWallet"]>

  export type UserWalletSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    address?: boolean
    encryptedKey?: boolean
    iv?: boolean
    authTag?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userWallet"]>

  export type UserWalletSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    address?: boolean
    encryptedKey?: boolean
    iv?: boolean
    authTag?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userWallet"]>

  export type UserWalletSelectScalar = {
    id?: boolean
    userId?: boolean
    address?: boolean
    encryptedKey?: boolean
    iv?: boolean
    authTag?: boolean
    createdAt?: boolean
  }

  export type UserWalletOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "address" | "encryptedKey" | "iv" | "authTag" | "createdAt", ExtArgs["result"]["userWallet"]>
  export type UserWalletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserWalletIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserWalletIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserWalletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserWallet"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      address: string
      encryptedKey: string
      iv: string
      authTag: string
      createdAt: Date
    }, ExtArgs["result"]["userWallet"]>
    composites: {}
  }

  type UserWalletGetPayload<S extends boolean | null | undefined | UserWalletDefaultArgs> = $Result.GetResult<Prisma.$UserWalletPayload, S>

  type UserWalletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserWalletFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserWalletCountAggregateInputType | true
    }

  export interface UserWalletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserWallet'], meta: { name: 'UserWallet' } }
    /**
     * Find zero or one UserWallet that matches the filter.
     * @param {UserWalletFindUniqueArgs} args - Arguments to find a UserWallet
     * @example
     * // Get one UserWallet
     * const userWallet = await prisma.userWallet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserWalletFindUniqueArgs>(args: SelectSubset<T, UserWalletFindUniqueArgs<ExtArgs>>): Prisma__UserWalletClient<$Result.GetResult<Prisma.$UserWalletPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserWallet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserWalletFindUniqueOrThrowArgs} args - Arguments to find a UserWallet
     * @example
     * // Get one UserWallet
     * const userWallet = await prisma.userWallet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserWalletFindUniqueOrThrowArgs>(args: SelectSubset<T, UserWalletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserWalletClient<$Result.GetResult<Prisma.$UserWalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserWallet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWalletFindFirstArgs} args - Arguments to find a UserWallet
     * @example
     * // Get one UserWallet
     * const userWallet = await prisma.userWallet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserWalletFindFirstArgs>(args?: SelectSubset<T, UserWalletFindFirstArgs<ExtArgs>>): Prisma__UserWalletClient<$Result.GetResult<Prisma.$UserWalletPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserWallet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWalletFindFirstOrThrowArgs} args - Arguments to find a UserWallet
     * @example
     * // Get one UserWallet
     * const userWallet = await prisma.userWallet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserWalletFindFirstOrThrowArgs>(args?: SelectSubset<T, UserWalletFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserWalletClient<$Result.GetResult<Prisma.$UserWalletPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserWallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWalletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserWallets
     * const userWallets = await prisma.userWallet.findMany()
     * 
     * // Get first 10 UserWallets
     * const userWallets = await prisma.userWallet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWalletWithIdOnly = await prisma.userWallet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserWalletFindManyArgs>(args?: SelectSubset<T, UserWalletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserWallet.
     * @param {UserWalletCreateArgs} args - Arguments to create a UserWallet.
     * @example
     * // Create one UserWallet
     * const UserWallet = await prisma.userWallet.create({
     *   data: {
     *     // ... data to create a UserWallet
     *   }
     * })
     * 
     */
    create<T extends UserWalletCreateArgs>(args: SelectSubset<T, UserWalletCreateArgs<ExtArgs>>): Prisma__UserWalletClient<$Result.GetResult<Prisma.$UserWalletPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserWallets.
     * @param {UserWalletCreateManyArgs} args - Arguments to create many UserWallets.
     * @example
     * // Create many UserWallets
     * const userWallet = await prisma.userWallet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserWalletCreateManyArgs>(args?: SelectSubset<T, UserWalletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserWallets and returns the data saved in the database.
     * @param {UserWalletCreateManyAndReturnArgs} args - Arguments to create many UserWallets.
     * @example
     * // Create many UserWallets
     * const userWallet = await prisma.userWallet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserWallets and only return the `id`
     * const userWalletWithIdOnly = await prisma.userWallet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserWalletCreateManyAndReturnArgs>(args?: SelectSubset<T, UserWalletCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWalletPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserWallet.
     * @param {UserWalletDeleteArgs} args - Arguments to delete one UserWallet.
     * @example
     * // Delete one UserWallet
     * const UserWallet = await prisma.userWallet.delete({
     *   where: {
     *     // ... filter to delete one UserWallet
     *   }
     * })
     * 
     */
    delete<T extends UserWalletDeleteArgs>(args: SelectSubset<T, UserWalletDeleteArgs<ExtArgs>>): Prisma__UserWalletClient<$Result.GetResult<Prisma.$UserWalletPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserWallet.
     * @param {UserWalletUpdateArgs} args - Arguments to update one UserWallet.
     * @example
     * // Update one UserWallet
     * const userWallet = await prisma.userWallet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserWalletUpdateArgs>(args: SelectSubset<T, UserWalletUpdateArgs<ExtArgs>>): Prisma__UserWalletClient<$Result.GetResult<Prisma.$UserWalletPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserWallets.
     * @param {UserWalletDeleteManyArgs} args - Arguments to filter UserWallets to delete.
     * @example
     * // Delete a few UserWallets
     * const { count } = await prisma.userWallet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserWalletDeleteManyArgs>(args?: SelectSubset<T, UserWalletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserWallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWalletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserWallets
     * const userWallet = await prisma.userWallet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserWalletUpdateManyArgs>(args: SelectSubset<T, UserWalletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserWallets and returns the data updated in the database.
     * @param {UserWalletUpdateManyAndReturnArgs} args - Arguments to update many UserWallets.
     * @example
     * // Update many UserWallets
     * const userWallet = await prisma.userWallet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserWallets and only return the `id`
     * const userWalletWithIdOnly = await prisma.userWallet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserWalletUpdateManyAndReturnArgs>(args: SelectSubset<T, UserWalletUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWalletPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserWallet.
     * @param {UserWalletUpsertArgs} args - Arguments to update or create a UserWallet.
     * @example
     * // Update or create a UserWallet
     * const userWallet = await prisma.userWallet.upsert({
     *   create: {
     *     // ... data to create a UserWallet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserWallet we want to update
     *   }
     * })
     */
    upsert<T extends UserWalletUpsertArgs>(args: SelectSubset<T, UserWalletUpsertArgs<ExtArgs>>): Prisma__UserWalletClient<$Result.GetResult<Prisma.$UserWalletPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserWallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWalletCountArgs} args - Arguments to filter UserWallets to count.
     * @example
     * // Count the number of UserWallets
     * const count = await prisma.userWallet.count({
     *   where: {
     *     // ... the filter for the UserWallets we want to count
     *   }
     * })
    **/
    count<T extends UserWalletCountArgs>(
      args?: Subset<T, UserWalletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserWalletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserWallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWalletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserWalletAggregateArgs>(args: Subset<T, UserWalletAggregateArgs>): Prisma.PrismaPromise<GetUserWalletAggregateType<T>>

    /**
     * Group by UserWallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWalletGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserWalletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserWalletGroupByArgs['orderBy'] }
        : { orderBy?: UserWalletGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserWalletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserWalletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserWallet model
   */
  readonly fields: UserWalletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserWallet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserWalletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserWallet model
   */
  interface UserWalletFieldRefs {
    readonly id: FieldRef<"UserWallet", 'String'>
    readonly userId: FieldRef<"UserWallet", 'String'>
    readonly address: FieldRef<"UserWallet", 'String'>
    readonly encryptedKey: FieldRef<"UserWallet", 'String'>
    readonly iv: FieldRef<"UserWallet", 'String'>
    readonly authTag: FieldRef<"UserWallet", 'String'>
    readonly createdAt: FieldRef<"UserWallet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserWallet findUnique
   */
  export type UserWalletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWallet
     */
    select?: UserWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWallet
     */
    omit?: UserWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWalletInclude<ExtArgs> | null
    /**
     * Filter, which UserWallet to fetch.
     */
    where: UserWalletWhereUniqueInput
  }

  /**
   * UserWallet findUniqueOrThrow
   */
  export type UserWalletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWallet
     */
    select?: UserWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWallet
     */
    omit?: UserWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWalletInclude<ExtArgs> | null
    /**
     * Filter, which UserWallet to fetch.
     */
    where: UserWalletWhereUniqueInput
  }

  /**
   * UserWallet findFirst
   */
  export type UserWalletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWallet
     */
    select?: UserWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWallet
     */
    omit?: UserWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWalletInclude<ExtArgs> | null
    /**
     * Filter, which UserWallet to fetch.
     */
    where?: UserWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWallets to fetch.
     */
    orderBy?: UserWalletOrderByWithRelationInput | UserWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserWallets.
     */
    cursor?: UserWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserWallets.
     */
    distinct?: UserWalletScalarFieldEnum | UserWalletScalarFieldEnum[]
  }

  /**
   * UserWallet findFirstOrThrow
   */
  export type UserWalletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWallet
     */
    select?: UserWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWallet
     */
    omit?: UserWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWalletInclude<ExtArgs> | null
    /**
     * Filter, which UserWallet to fetch.
     */
    where?: UserWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWallets to fetch.
     */
    orderBy?: UserWalletOrderByWithRelationInput | UserWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserWallets.
     */
    cursor?: UserWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserWallets.
     */
    distinct?: UserWalletScalarFieldEnum | UserWalletScalarFieldEnum[]
  }

  /**
   * UserWallet findMany
   */
  export type UserWalletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWallet
     */
    select?: UserWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWallet
     */
    omit?: UserWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWalletInclude<ExtArgs> | null
    /**
     * Filter, which UserWallets to fetch.
     */
    where?: UserWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWallets to fetch.
     */
    orderBy?: UserWalletOrderByWithRelationInput | UserWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserWallets.
     */
    cursor?: UserWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWallets.
     */
    skip?: number
    distinct?: UserWalletScalarFieldEnum | UserWalletScalarFieldEnum[]
  }

  /**
   * UserWallet create
   */
  export type UserWalletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWallet
     */
    select?: UserWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWallet
     */
    omit?: UserWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWalletInclude<ExtArgs> | null
    /**
     * The data needed to create a UserWallet.
     */
    data: XOR<UserWalletCreateInput, UserWalletUncheckedCreateInput>
  }

  /**
   * UserWallet createMany
   */
  export type UserWalletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserWallets.
     */
    data: UserWalletCreateManyInput | UserWalletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserWallet createManyAndReturn
   */
  export type UserWalletCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWallet
     */
    select?: UserWalletSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserWallet
     */
    omit?: UserWalletOmit<ExtArgs> | null
    /**
     * The data used to create many UserWallets.
     */
    data: UserWalletCreateManyInput | UserWalletCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWalletIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserWallet update
   */
  export type UserWalletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWallet
     */
    select?: UserWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWallet
     */
    omit?: UserWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWalletInclude<ExtArgs> | null
    /**
     * The data needed to update a UserWallet.
     */
    data: XOR<UserWalletUpdateInput, UserWalletUncheckedUpdateInput>
    /**
     * Choose, which UserWallet to update.
     */
    where: UserWalletWhereUniqueInput
  }

  /**
   * UserWallet updateMany
   */
  export type UserWalletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserWallets.
     */
    data: XOR<UserWalletUpdateManyMutationInput, UserWalletUncheckedUpdateManyInput>
    /**
     * Filter which UserWallets to update
     */
    where?: UserWalletWhereInput
    /**
     * Limit how many UserWallets to update.
     */
    limit?: number
  }

  /**
   * UserWallet updateManyAndReturn
   */
  export type UserWalletUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWallet
     */
    select?: UserWalletSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserWallet
     */
    omit?: UserWalletOmit<ExtArgs> | null
    /**
     * The data used to update UserWallets.
     */
    data: XOR<UserWalletUpdateManyMutationInput, UserWalletUncheckedUpdateManyInput>
    /**
     * Filter which UserWallets to update
     */
    where?: UserWalletWhereInput
    /**
     * Limit how many UserWallets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWalletIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserWallet upsert
   */
  export type UserWalletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWallet
     */
    select?: UserWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWallet
     */
    omit?: UserWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWalletInclude<ExtArgs> | null
    /**
     * The filter to search for the UserWallet to update in case it exists.
     */
    where: UserWalletWhereUniqueInput
    /**
     * In case the UserWallet found by the `where` argument doesn't exist, create a new UserWallet with this data.
     */
    create: XOR<UserWalletCreateInput, UserWalletUncheckedCreateInput>
    /**
     * In case the UserWallet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserWalletUpdateInput, UserWalletUncheckedUpdateInput>
  }

  /**
   * UserWallet delete
   */
  export type UserWalletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWallet
     */
    select?: UserWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWallet
     */
    omit?: UserWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWalletInclude<ExtArgs> | null
    /**
     * Filter which UserWallet to delete.
     */
    where: UserWalletWhereUniqueInput
  }

  /**
   * UserWallet deleteMany
   */
  export type UserWalletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserWallets to delete
     */
    where?: UserWalletWhereInput
    /**
     * Limit how many UserWallets to delete.
     */
    limit?: number
  }

  /**
   * UserWallet without action
   */
  export type UserWalletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWallet
     */
    select?: UserWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWallet
     */
    omit?: UserWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWalletInclude<ExtArgs> | null
  }


  /**
   * Model LinkedAccount
   */

  export type AggregateLinkedAccount = {
    _count: LinkedAccountCountAggregateOutputType | null
    _min: LinkedAccountMinAggregateOutputType | null
    _max: LinkedAccountMaxAggregateOutputType | null
  }

  export type LinkedAccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    platform: string | null
    username: string | null
    accountId: string | null
    url: string | null
  }

  export type LinkedAccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    platform: string | null
    username: string | null
    accountId: string | null
    url: string | null
  }

  export type LinkedAccountCountAggregateOutputType = {
    id: number
    userId: number
    platform: number
    username: number
    accountId: number
    url: number
    _all: number
  }


  export type LinkedAccountMinAggregateInputType = {
    id?: true
    userId?: true
    platform?: true
    username?: true
    accountId?: true
    url?: true
  }

  export type LinkedAccountMaxAggregateInputType = {
    id?: true
    userId?: true
    platform?: true
    username?: true
    accountId?: true
    url?: true
  }

  export type LinkedAccountCountAggregateInputType = {
    id?: true
    userId?: true
    platform?: true
    username?: true
    accountId?: true
    url?: true
    _all?: true
  }

  export type LinkedAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinkedAccount to aggregate.
     */
    where?: LinkedAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedAccounts to fetch.
     */
    orderBy?: LinkedAccountOrderByWithRelationInput | LinkedAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LinkedAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LinkedAccounts
    **/
    _count?: true | LinkedAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LinkedAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LinkedAccountMaxAggregateInputType
  }

  export type GetLinkedAccountAggregateType<T extends LinkedAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateLinkedAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLinkedAccount[P]>
      : GetScalarType<T[P], AggregateLinkedAccount[P]>
  }




  export type LinkedAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkedAccountWhereInput
    orderBy?: LinkedAccountOrderByWithAggregationInput | LinkedAccountOrderByWithAggregationInput[]
    by: LinkedAccountScalarFieldEnum[] | LinkedAccountScalarFieldEnum
    having?: LinkedAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinkedAccountCountAggregateInputType | true
    _min?: LinkedAccountMinAggregateInputType
    _max?: LinkedAccountMaxAggregateInputType
  }

  export type LinkedAccountGroupByOutputType = {
    id: string
    userId: string
    platform: string
    username: string
    accountId: string
    url: string
    _count: LinkedAccountCountAggregateOutputType | null
    _min: LinkedAccountMinAggregateOutputType | null
    _max: LinkedAccountMaxAggregateOutputType | null
  }

  type GetLinkedAccountGroupByPayload<T extends LinkedAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LinkedAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LinkedAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LinkedAccountGroupByOutputType[P]>
            : GetScalarType<T[P], LinkedAccountGroupByOutputType[P]>
        }
      >
    >


  export type LinkedAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    platform?: boolean
    username?: boolean
    accountId?: boolean
    url?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["linkedAccount"]>

  export type LinkedAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    platform?: boolean
    username?: boolean
    accountId?: boolean
    url?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["linkedAccount"]>

  export type LinkedAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    platform?: boolean
    username?: boolean
    accountId?: boolean
    url?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["linkedAccount"]>

  export type LinkedAccountSelectScalar = {
    id?: boolean
    userId?: boolean
    platform?: boolean
    username?: boolean
    accountId?: boolean
    url?: boolean
  }

  export type LinkedAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "platform" | "username" | "accountId" | "url", ExtArgs["result"]["linkedAccount"]>
  export type LinkedAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LinkedAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LinkedAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LinkedAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LinkedAccount"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      platform: string
      username: string
      accountId: string
      url: string
    }, ExtArgs["result"]["linkedAccount"]>
    composites: {}
  }

  type LinkedAccountGetPayload<S extends boolean | null | undefined | LinkedAccountDefaultArgs> = $Result.GetResult<Prisma.$LinkedAccountPayload, S>

  type LinkedAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LinkedAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LinkedAccountCountAggregateInputType | true
    }

  export interface LinkedAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LinkedAccount'], meta: { name: 'LinkedAccount' } }
    /**
     * Find zero or one LinkedAccount that matches the filter.
     * @param {LinkedAccountFindUniqueArgs} args - Arguments to find a LinkedAccount
     * @example
     * // Get one LinkedAccount
     * const linkedAccount = await prisma.linkedAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LinkedAccountFindUniqueArgs>(args: SelectSubset<T, LinkedAccountFindUniqueArgs<ExtArgs>>): Prisma__LinkedAccountClient<$Result.GetResult<Prisma.$LinkedAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LinkedAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LinkedAccountFindUniqueOrThrowArgs} args - Arguments to find a LinkedAccount
     * @example
     * // Get one LinkedAccount
     * const linkedAccount = await prisma.linkedAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LinkedAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, LinkedAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LinkedAccountClient<$Result.GetResult<Prisma.$LinkedAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LinkedAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedAccountFindFirstArgs} args - Arguments to find a LinkedAccount
     * @example
     * // Get one LinkedAccount
     * const linkedAccount = await prisma.linkedAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LinkedAccountFindFirstArgs>(args?: SelectSubset<T, LinkedAccountFindFirstArgs<ExtArgs>>): Prisma__LinkedAccountClient<$Result.GetResult<Prisma.$LinkedAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LinkedAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedAccountFindFirstOrThrowArgs} args - Arguments to find a LinkedAccount
     * @example
     * // Get one LinkedAccount
     * const linkedAccount = await prisma.linkedAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LinkedAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, LinkedAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__LinkedAccountClient<$Result.GetResult<Prisma.$LinkedAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LinkedAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LinkedAccounts
     * const linkedAccounts = await prisma.linkedAccount.findMany()
     * 
     * // Get first 10 LinkedAccounts
     * const linkedAccounts = await prisma.linkedAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const linkedAccountWithIdOnly = await prisma.linkedAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LinkedAccountFindManyArgs>(args?: SelectSubset<T, LinkedAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkedAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LinkedAccount.
     * @param {LinkedAccountCreateArgs} args - Arguments to create a LinkedAccount.
     * @example
     * // Create one LinkedAccount
     * const LinkedAccount = await prisma.linkedAccount.create({
     *   data: {
     *     // ... data to create a LinkedAccount
     *   }
     * })
     * 
     */
    create<T extends LinkedAccountCreateArgs>(args: SelectSubset<T, LinkedAccountCreateArgs<ExtArgs>>): Prisma__LinkedAccountClient<$Result.GetResult<Prisma.$LinkedAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LinkedAccounts.
     * @param {LinkedAccountCreateManyArgs} args - Arguments to create many LinkedAccounts.
     * @example
     * // Create many LinkedAccounts
     * const linkedAccount = await prisma.linkedAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LinkedAccountCreateManyArgs>(args?: SelectSubset<T, LinkedAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LinkedAccounts and returns the data saved in the database.
     * @param {LinkedAccountCreateManyAndReturnArgs} args - Arguments to create many LinkedAccounts.
     * @example
     * // Create many LinkedAccounts
     * const linkedAccount = await prisma.linkedAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LinkedAccounts and only return the `id`
     * const linkedAccountWithIdOnly = await prisma.linkedAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LinkedAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, LinkedAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkedAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LinkedAccount.
     * @param {LinkedAccountDeleteArgs} args - Arguments to delete one LinkedAccount.
     * @example
     * // Delete one LinkedAccount
     * const LinkedAccount = await prisma.linkedAccount.delete({
     *   where: {
     *     // ... filter to delete one LinkedAccount
     *   }
     * })
     * 
     */
    delete<T extends LinkedAccountDeleteArgs>(args: SelectSubset<T, LinkedAccountDeleteArgs<ExtArgs>>): Prisma__LinkedAccountClient<$Result.GetResult<Prisma.$LinkedAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LinkedAccount.
     * @param {LinkedAccountUpdateArgs} args - Arguments to update one LinkedAccount.
     * @example
     * // Update one LinkedAccount
     * const linkedAccount = await prisma.linkedAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LinkedAccountUpdateArgs>(args: SelectSubset<T, LinkedAccountUpdateArgs<ExtArgs>>): Prisma__LinkedAccountClient<$Result.GetResult<Prisma.$LinkedAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LinkedAccounts.
     * @param {LinkedAccountDeleteManyArgs} args - Arguments to filter LinkedAccounts to delete.
     * @example
     * // Delete a few LinkedAccounts
     * const { count } = await prisma.linkedAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LinkedAccountDeleteManyArgs>(args?: SelectSubset<T, LinkedAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LinkedAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LinkedAccounts
     * const linkedAccount = await prisma.linkedAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LinkedAccountUpdateManyArgs>(args: SelectSubset<T, LinkedAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LinkedAccounts and returns the data updated in the database.
     * @param {LinkedAccountUpdateManyAndReturnArgs} args - Arguments to update many LinkedAccounts.
     * @example
     * // Update many LinkedAccounts
     * const linkedAccount = await prisma.linkedAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LinkedAccounts and only return the `id`
     * const linkedAccountWithIdOnly = await prisma.linkedAccount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LinkedAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, LinkedAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkedAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LinkedAccount.
     * @param {LinkedAccountUpsertArgs} args - Arguments to update or create a LinkedAccount.
     * @example
     * // Update or create a LinkedAccount
     * const linkedAccount = await prisma.linkedAccount.upsert({
     *   create: {
     *     // ... data to create a LinkedAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LinkedAccount we want to update
     *   }
     * })
     */
    upsert<T extends LinkedAccountUpsertArgs>(args: SelectSubset<T, LinkedAccountUpsertArgs<ExtArgs>>): Prisma__LinkedAccountClient<$Result.GetResult<Prisma.$LinkedAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LinkedAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedAccountCountArgs} args - Arguments to filter LinkedAccounts to count.
     * @example
     * // Count the number of LinkedAccounts
     * const count = await prisma.linkedAccount.count({
     *   where: {
     *     // ... the filter for the LinkedAccounts we want to count
     *   }
     * })
    **/
    count<T extends LinkedAccountCountArgs>(
      args?: Subset<T, LinkedAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinkedAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LinkedAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LinkedAccountAggregateArgs>(args: Subset<T, LinkedAccountAggregateArgs>): Prisma.PrismaPromise<GetLinkedAccountAggregateType<T>>

    /**
     * Group by LinkedAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LinkedAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LinkedAccountGroupByArgs['orderBy'] }
        : { orderBy?: LinkedAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LinkedAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinkedAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LinkedAccount model
   */
  readonly fields: LinkedAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LinkedAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LinkedAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LinkedAccount model
   */
  interface LinkedAccountFieldRefs {
    readonly id: FieldRef<"LinkedAccount", 'String'>
    readonly userId: FieldRef<"LinkedAccount", 'String'>
    readonly platform: FieldRef<"LinkedAccount", 'String'>
    readonly username: FieldRef<"LinkedAccount", 'String'>
    readonly accountId: FieldRef<"LinkedAccount", 'String'>
    readonly url: FieldRef<"LinkedAccount", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LinkedAccount findUnique
   */
  export type LinkedAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccount
     */
    select?: LinkedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccount
     */
    omit?: LinkedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountInclude<ExtArgs> | null
    /**
     * Filter, which LinkedAccount to fetch.
     */
    where: LinkedAccountWhereUniqueInput
  }

  /**
   * LinkedAccount findUniqueOrThrow
   */
  export type LinkedAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccount
     */
    select?: LinkedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccount
     */
    omit?: LinkedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountInclude<ExtArgs> | null
    /**
     * Filter, which LinkedAccount to fetch.
     */
    where: LinkedAccountWhereUniqueInput
  }

  /**
   * LinkedAccount findFirst
   */
  export type LinkedAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccount
     */
    select?: LinkedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccount
     */
    omit?: LinkedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountInclude<ExtArgs> | null
    /**
     * Filter, which LinkedAccount to fetch.
     */
    where?: LinkedAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedAccounts to fetch.
     */
    orderBy?: LinkedAccountOrderByWithRelationInput | LinkedAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinkedAccounts.
     */
    cursor?: LinkedAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinkedAccounts.
     */
    distinct?: LinkedAccountScalarFieldEnum | LinkedAccountScalarFieldEnum[]
  }

  /**
   * LinkedAccount findFirstOrThrow
   */
  export type LinkedAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccount
     */
    select?: LinkedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccount
     */
    omit?: LinkedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountInclude<ExtArgs> | null
    /**
     * Filter, which LinkedAccount to fetch.
     */
    where?: LinkedAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedAccounts to fetch.
     */
    orderBy?: LinkedAccountOrderByWithRelationInput | LinkedAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinkedAccounts.
     */
    cursor?: LinkedAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinkedAccounts.
     */
    distinct?: LinkedAccountScalarFieldEnum | LinkedAccountScalarFieldEnum[]
  }

  /**
   * LinkedAccount findMany
   */
  export type LinkedAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccount
     */
    select?: LinkedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccount
     */
    omit?: LinkedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountInclude<ExtArgs> | null
    /**
     * Filter, which LinkedAccounts to fetch.
     */
    where?: LinkedAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedAccounts to fetch.
     */
    orderBy?: LinkedAccountOrderByWithRelationInput | LinkedAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LinkedAccounts.
     */
    cursor?: LinkedAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedAccounts.
     */
    skip?: number
    distinct?: LinkedAccountScalarFieldEnum | LinkedAccountScalarFieldEnum[]
  }

  /**
   * LinkedAccount create
   */
  export type LinkedAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccount
     */
    select?: LinkedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccount
     */
    omit?: LinkedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a LinkedAccount.
     */
    data: XOR<LinkedAccountCreateInput, LinkedAccountUncheckedCreateInput>
  }

  /**
   * LinkedAccount createMany
   */
  export type LinkedAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LinkedAccounts.
     */
    data: LinkedAccountCreateManyInput | LinkedAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LinkedAccount createManyAndReturn
   */
  export type LinkedAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccount
     */
    select?: LinkedAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccount
     */
    omit?: LinkedAccountOmit<ExtArgs> | null
    /**
     * The data used to create many LinkedAccounts.
     */
    data: LinkedAccountCreateManyInput | LinkedAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LinkedAccount update
   */
  export type LinkedAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccount
     */
    select?: LinkedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccount
     */
    omit?: LinkedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a LinkedAccount.
     */
    data: XOR<LinkedAccountUpdateInput, LinkedAccountUncheckedUpdateInput>
    /**
     * Choose, which LinkedAccount to update.
     */
    where: LinkedAccountWhereUniqueInput
  }

  /**
   * LinkedAccount updateMany
   */
  export type LinkedAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LinkedAccounts.
     */
    data: XOR<LinkedAccountUpdateManyMutationInput, LinkedAccountUncheckedUpdateManyInput>
    /**
     * Filter which LinkedAccounts to update
     */
    where?: LinkedAccountWhereInput
    /**
     * Limit how many LinkedAccounts to update.
     */
    limit?: number
  }

  /**
   * LinkedAccount updateManyAndReturn
   */
  export type LinkedAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccount
     */
    select?: LinkedAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccount
     */
    omit?: LinkedAccountOmit<ExtArgs> | null
    /**
     * The data used to update LinkedAccounts.
     */
    data: XOR<LinkedAccountUpdateManyMutationInput, LinkedAccountUncheckedUpdateManyInput>
    /**
     * Filter which LinkedAccounts to update
     */
    where?: LinkedAccountWhereInput
    /**
     * Limit how many LinkedAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LinkedAccount upsert
   */
  export type LinkedAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccount
     */
    select?: LinkedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccount
     */
    omit?: LinkedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the LinkedAccount to update in case it exists.
     */
    where: LinkedAccountWhereUniqueInput
    /**
     * In case the LinkedAccount found by the `where` argument doesn't exist, create a new LinkedAccount with this data.
     */
    create: XOR<LinkedAccountCreateInput, LinkedAccountUncheckedCreateInput>
    /**
     * In case the LinkedAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LinkedAccountUpdateInput, LinkedAccountUncheckedUpdateInput>
  }

  /**
   * LinkedAccount delete
   */
  export type LinkedAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccount
     */
    select?: LinkedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccount
     */
    omit?: LinkedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountInclude<ExtArgs> | null
    /**
     * Filter which LinkedAccount to delete.
     */
    where: LinkedAccountWhereUniqueInput
  }

  /**
   * LinkedAccount deleteMany
   */
  export type LinkedAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinkedAccounts to delete
     */
    where?: LinkedAccountWhereInput
    /**
     * Limit how many LinkedAccounts to delete.
     */
    limit?: number
  }

  /**
   * LinkedAccount without action
   */
  export type LinkedAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccount
     */
    select?: LinkedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccount
     */
    omit?: LinkedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountInclude<ExtArgs> | null
  }


  /**
   * Model Token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenAvgAggregateOutputType = {
    decimals: number | null
    totalSupply: number | null
    feeTier: number | null
  }

  export type TokenSumAggregateOutputType = {
    decimals: number | null
    totalSupply: bigint | null
    feeTier: bigint | null
  }

  export type TokenMinAggregateOutputType = {
    address: string | null
    name: string | null
    symbol: string | null
    decimals: number | null
    totalSupply: bigint | null
    feeTier: bigint | null
    createdAt: Date | null
    userId: string | null
  }

  export type TokenMaxAggregateOutputType = {
    address: string | null
    name: string | null
    symbol: string | null
    decimals: number | null
    totalSupply: bigint | null
    feeTier: bigint | null
    createdAt: Date | null
    userId: string | null
  }

  export type TokenCountAggregateOutputType = {
    address: number
    name: number
    symbol: number
    decimals: number
    totalSupply: number
    feeTier: number
    createdAt: number
    userId: number
    _all: number
  }


  export type TokenAvgAggregateInputType = {
    decimals?: true
    totalSupply?: true
    feeTier?: true
  }

  export type TokenSumAggregateInputType = {
    decimals?: true
    totalSupply?: true
    feeTier?: true
  }

  export type TokenMinAggregateInputType = {
    address?: true
    name?: true
    symbol?: true
    decimals?: true
    totalSupply?: true
    feeTier?: true
    createdAt?: true
    userId?: true
  }

  export type TokenMaxAggregateInputType = {
    address?: true
    name?: true
    symbol?: true
    decimals?: true
    totalSupply?: true
    feeTier?: true
    createdAt?: true
    userId?: true
  }

  export type TokenCountAggregateInputType = {
    address?: true
    name?: true
    symbol?: true
    decimals?: true
    totalSupply?: true
    feeTier?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithAggregationInput | TokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _avg?: TokenAvgAggregateInputType
    _sum?: TokenSumAggregateInputType
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    address: string
    name: string
    symbol: string
    decimals: number
    totalSupply: bigint
    feeTier: bigint
    createdAt: Date
    userId: string
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    address?: boolean
    name?: boolean
    symbol?: boolean
    decimals?: boolean
    totalSupply?: boolean
    feeTier?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    transactions?: boolean | Token$transactionsArgs<ExtArgs>
    Engagement?: boolean | Token$EngagementArgs<ExtArgs>
    _count?: boolean | TokenCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    address?: boolean
    name?: boolean
    symbol?: boolean
    decimals?: boolean
    totalSupply?: boolean
    feeTier?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    address?: boolean
    name?: boolean
    symbol?: boolean
    decimals?: boolean
    totalSupply?: boolean
    feeTier?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectScalar = {
    address?: boolean
    name?: boolean
    symbol?: boolean
    decimals?: boolean
    totalSupply?: boolean
    feeTier?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type TokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"address" | "name" | "symbol" | "decimals" | "totalSupply" | "feeTier" | "createdAt" | "userId", ExtArgs["result"]["token"]>
  export type TokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    transactions?: boolean | Token$transactionsArgs<ExtArgs>
    Engagement?: boolean | Token$EngagementArgs<ExtArgs>
    _count?: boolean | TokenCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Token"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      transactions: Prisma.$TokenTransactionPayload<ExtArgs>[]
      Engagement: Prisma.$EngagementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      address: string
      name: string
      symbol: string
      decimals: number
      totalSupply: bigint
      feeTier: bigint
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["token"]>
    composites: {}
  }

  type TokenGetPayload<S extends boolean | null | undefined | TokenDefaultArgs> = $Result.GetResult<Prisma.$TokenPayload, S>

  type TokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface TokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Token'], meta: { name: 'Token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenFindUniqueArgs>(args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenFindFirstArgs>(args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `address`
     * const tokenWithAddressOnly = await prisma.token.findMany({ select: { address: true } })
     * 
     */
    findMany<T extends TokenFindManyArgs>(args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
     */
    create<T extends TokenCreateArgs>(args: SelectSubset<T, TokenCreateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenCreateManyArgs>(args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokenCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `address`
     * const tokenWithAddressOnly = await prisma.token.createManyAndReturn({
     *   select: { address: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
     */
    delete<T extends TokenDeleteArgs>(args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenUpdateArgs>(args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenDeleteManyArgs>(args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenUpdateManyArgs>(args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {TokenUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `address`
     * const tokenWithAddressOnly = await prisma.token.updateManyAndReturn({
     *   select: { address: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TokenUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends TokenUpsertArgs>(args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Token model
   */
  readonly fields: TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends Token$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Token$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Engagement<T extends Token$EngagementArgs<ExtArgs> = {}>(args?: Subset<T, Token$EngagementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EngagementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Token model
   */
  interface TokenFieldRefs {
    readonly address: FieldRef<"Token", 'String'>
    readonly name: FieldRef<"Token", 'String'>
    readonly symbol: FieldRef<"Token", 'String'>
    readonly decimals: FieldRef<"Token", 'Int'>
    readonly totalSupply: FieldRef<"Token", 'BigInt'>
    readonly feeTier: FieldRef<"Token", 'BigInt'>
    readonly createdAt: FieldRef<"Token", 'DateTime'>
    readonly userId: FieldRef<"Token", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findMany
   */
  export type TokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token create
   */
  export type TokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }

  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token createManyAndReturn
   */
  export type TokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token update
   */
  export type TokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Token updateManyAndReturn
   */
  export type TokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token upsert
   */
  export type TokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }

  /**
   * Token delete
   */
  export type TokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to delete.
     */
    limit?: number
  }

  /**
   * Token.transactions
   */
  export type Token$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenTransaction
     */
    select?: TokenTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenTransaction
     */
    omit?: TokenTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenTransactionInclude<ExtArgs> | null
    where?: TokenTransactionWhereInput
    orderBy?: TokenTransactionOrderByWithRelationInput | TokenTransactionOrderByWithRelationInput[]
    cursor?: TokenTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenTransactionScalarFieldEnum | TokenTransactionScalarFieldEnum[]
  }

  /**
   * Token.Engagement
   */
  export type Token$EngagementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engagement
     */
    select?: EngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engagement
     */
    omit?: EngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngagementInclude<ExtArgs> | null
    where?: EngagementWhereInput
    orderBy?: EngagementOrderByWithRelationInput | EngagementOrderByWithRelationInput[]
    cursor?: EngagementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EngagementScalarFieldEnum | EngagementScalarFieldEnum[]
  }

  /**
   * Token without action
   */
  export type TokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
  }


  /**
   * Model Engagement
   */

  export type AggregateEngagement = {
    _count: EngagementCountAggregateOutputType | null
    _min: EngagementMinAggregateOutputType | null
    _max: EngagementMaxAggregateOutputType | null
  }

  export type EngagementMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tokenAddress: string | null
    type: string | null
    postId: string | null
    triggeredAt: Date | null
    transactionid: string | null
  }

  export type EngagementMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tokenAddress: string | null
    type: string | null
    postId: string | null
    triggeredAt: Date | null
    transactionid: string | null
  }

  export type EngagementCountAggregateOutputType = {
    id: number
    userId: number
    tokenAddress: number
    type: number
    postId: number
    triggeredAt: number
    transactionid: number
    _all: number
  }


  export type EngagementMinAggregateInputType = {
    id?: true
    userId?: true
    tokenAddress?: true
    type?: true
    postId?: true
    triggeredAt?: true
    transactionid?: true
  }

  export type EngagementMaxAggregateInputType = {
    id?: true
    userId?: true
    tokenAddress?: true
    type?: true
    postId?: true
    triggeredAt?: true
    transactionid?: true
  }

  export type EngagementCountAggregateInputType = {
    id?: true
    userId?: true
    tokenAddress?: true
    type?: true
    postId?: true
    triggeredAt?: true
    transactionid?: true
    _all?: true
  }

  export type EngagementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Engagement to aggregate.
     */
    where?: EngagementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Engagements to fetch.
     */
    orderBy?: EngagementOrderByWithRelationInput | EngagementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EngagementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Engagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Engagements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Engagements
    **/
    _count?: true | EngagementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EngagementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EngagementMaxAggregateInputType
  }

  export type GetEngagementAggregateType<T extends EngagementAggregateArgs> = {
        [P in keyof T & keyof AggregateEngagement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEngagement[P]>
      : GetScalarType<T[P], AggregateEngagement[P]>
  }




  export type EngagementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EngagementWhereInput
    orderBy?: EngagementOrderByWithAggregationInput | EngagementOrderByWithAggregationInput[]
    by: EngagementScalarFieldEnum[] | EngagementScalarFieldEnum
    having?: EngagementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EngagementCountAggregateInputType | true
    _min?: EngagementMinAggregateInputType
    _max?: EngagementMaxAggregateInputType
  }

  export type EngagementGroupByOutputType = {
    id: string
    userId: string
    tokenAddress: string
    type: string
    postId: string
    triggeredAt: Date
    transactionid: string | null
    _count: EngagementCountAggregateOutputType | null
    _min: EngagementMinAggregateOutputType | null
    _max: EngagementMaxAggregateOutputType | null
  }

  type GetEngagementGroupByPayload<T extends EngagementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EngagementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EngagementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EngagementGroupByOutputType[P]>
            : GetScalarType<T[P], EngagementGroupByOutputType[P]>
        }
      >
    >


  export type EngagementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenAddress?: boolean
    type?: boolean
    postId?: boolean
    triggeredAt?: boolean
    transactionid?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    token?: boolean | TokenDefaultArgs<ExtArgs>
    transaction?: boolean | Engagement$transactionArgs<ExtArgs>
  }, ExtArgs["result"]["engagement"]>

  export type EngagementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenAddress?: boolean
    type?: boolean
    postId?: boolean
    triggeredAt?: boolean
    transactionid?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    token?: boolean | TokenDefaultArgs<ExtArgs>
    transaction?: boolean | Engagement$transactionArgs<ExtArgs>
  }, ExtArgs["result"]["engagement"]>

  export type EngagementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenAddress?: boolean
    type?: boolean
    postId?: boolean
    triggeredAt?: boolean
    transactionid?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    token?: boolean | TokenDefaultArgs<ExtArgs>
    transaction?: boolean | Engagement$transactionArgs<ExtArgs>
  }, ExtArgs["result"]["engagement"]>

  export type EngagementSelectScalar = {
    id?: boolean
    userId?: boolean
    tokenAddress?: boolean
    type?: boolean
    postId?: boolean
    triggeredAt?: boolean
    transactionid?: boolean
  }

  export type EngagementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tokenAddress" | "type" | "postId" | "triggeredAt" | "transactionid", ExtArgs["result"]["engagement"]>
  export type EngagementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    token?: boolean | TokenDefaultArgs<ExtArgs>
    transaction?: boolean | Engagement$transactionArgs<ExtArgs>
  }
  export type EngagementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    token?: boolean | TokenDefaultArgs<ExtArgs>
    transaction?: boolean | Engagement$transactionArgs<ExtArgs>
  }
  export type EngagementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    token?: boolean | TokenDefaultArgs<ExtArgs>
    transaction?: boolean | Engagement$transactionArgs<ExtArgs>
  }

  export type $EngagementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Engagement"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      token: Prisma.$TokenPayload<ExtArgs>
      transaction: Prisma.$TokenTransactionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tokenAddress: string
      type: string
      postId: string
      triggeredAt: Date
      transactionid: string | null
    }, ExtArgs["result"]["engagement"]>
    composites: {}
  }

  type EngagementGetPayload<S extends boolean | null | undefined | EngagementDefaultArgs> = $Result.GetResult<Prisma.$EngagementPayload, S>

  type EngagementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EngagementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EngagementCountAggregateInputType | true
    }

  export interface EngagementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Engagement'], meta: { name: 'Engagement' } }
    /**
     * Find zero or one Engagement that matches the filter.
     * @param {EngagementFindUniqueArgs} args - Arguments to find a Engagement
     * @example
     * // Get one Engagement
     * const engagement = await prisma.engagement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EngagementFindUniqueArgs>(args: SelectSubset<T, EngagementFindUniqueArgs<ExtArgs>>): Prisma__EngagementClient<$Result.GetResult<Prisma.$EngagementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Engagement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EngagementFindUniqueOrThrowArgs} args - Arguments to find a Engagement
     * @example
     * // Get one Engagement
     * const engagement = await prisma.engagement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EngagementFindUniqueOrThrowArgs>(args: SelectSubset<T, EngagementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EngagementClient<$Result.GetResult<Prisma.$EngagementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Engagement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngagementFindFirstArgs} args - Arguments to find a Engagement
     * @example
     * // Get one Engagement
     * const engagement = await prisma.engagement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EngagementFindFirstArgs>(args?: SelectSubset<T, EngagementFindFirstArgs<ExtArgs>>): Prisma__EngagementClient<$Result.GetResult<Prisma.$EngagementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Engagement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngagementFindFirstOrThrowArgs} args - Arguments to find a Engagement
     * @example
     * // Get one Engagement
     * const engagement = await prisma.engagement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EngagementFindFirstOrThrowArgs>(args?: SelectSubset<T, EngagementFindFirstOrThrowArgs<ExtArgs>>): Prisma__EngagementClient<$Result.GetResult<Prisma.$EngagementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Engagements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngagementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Engagements
     * const engagements = await prisma.engagement.findMany()
     * 
     * // Get first 10 Engagements
     * const engagements = await prisma.engagement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const engagementWithIdOnly = await prisma.engagement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EngagementFindManyArgs>(args?: SelectSubset<T, EngagementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EngagementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Engagement.
     * @param {EngagementCreateArgs} args - Arguments to create a Engagement.
     * @example
     * // Create one Engagement
     * const Engagement = await prisma.engagement.create({
     *   data: {
     *     // ... data to create a Engagement
     *   }
     * })
     * 
     */
    create<T extends EngagementCreateArgs>(args: SelectSubset<T, EngagementCreateArgs<ExtArgs>>): Prisma__EngagementClient<$Result.GetResult<Prisma.$EngagementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Engagements.
     * @param {EngagementCreateManyArgs} args - Arguments to create many Engagements.
     * @example
     * // Create many Engagements
     * const engagement = await prisma.engagement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EngagementCreateManyArgs>(args?: SelectSubset<T, EngagementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Engagements and returns the data saved in the database.
     * @param {EngagementCreateManyAndReturnArgs} args - Arguments to create many Engagements.
     * @example
     * // Create many Engagements
     * const engagement = await prisma.engagement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Engagements and only return the `id`
     * const engagementWithIdOnly = await prisma.engagement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EngagementCreateManyAndReturnArgs>(args?: SelectSubset<T, EngagementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EngagementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Engagement.
     * @param {EngagementDeleteArgs} args - Arguments to delete one Engagement.
     * @example
     * // Delete one Engagement
     * const Engagement = await prisma.engagement.delete({
     *   where: {
     *     // ... filter to delete one Engagement
     *   }
     * })
     * 
     */
    delete<T extends EngagementDeleteArgs>(args: SelectSubset<T, EngagementDeleteArgs<ExtArgs>>): Prisma__EngagementClient<$Result.GetResult<Prisma.$EngagementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Engagement.
     * @param {EngagementUpdateArgs} args - Arguments to update one Engagement.
     * @example
     * // Update one Engagement
     * const engagement = await prisma.engagement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EngagementUpdateArgs>(args: SelectSubset<T, EngagementUpdateArgs<ExtArgs>>): Prisma__EngagementClient<$Result.GetResult<Prisma.$EngagementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Engagements.
     * @param {EngagementDeleteManyArgs} args - Arguments to filter Engagements to delete.
     * @example
     * // Delete a few Engagements
     * const { count } = await prisma.engagement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EngagementDeleteManyArgs>(args?: SelectSubset<T, EngagementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Engagements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngagementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Engagements
     * const engagement = await prisma.engagement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EngagementUpdateManyArgs>(args: SelectSubset<T, EngagementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Engagements and returns the data updated in the database.
     * @param {EngagementUpdateManyAndReturnArgs} args - Arguments to update many Engagements.
     * @example
     * // Update many Engagements
     * const engagement = await prisma.engagement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Engagements and only return the `id`
     * const engagementWithIdOnly = await prisma.engagement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EngagementUpdateManyAndReturnArgs>(args: SelectSubset<T, EngagementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EngagementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Engagement.
     * @param {EngagementUpsertArgs} args - Arguments to update or create a Engagement.
     * @example
     * // Update or create a Engagement
     * const engagement = await prisma.engagement.upsert({
     *   create: {
     *     // ... data to create a Engagement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Engagement we want to update
     *   }
     * })
     */
    upsert<T extends EngagementUpsertArgs>(args: SelectSubset<T, EngagementUpsertArgs<ExtArgs>>): Prisma__EngagementClient<$Result.GetResult<Prisma.$EngagementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Engagements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngagementCountArgs} args - Arguments to filter Engagements to count.
     * @example
     * // Count the number of Engagements
     * const count = await prisma.engagement.count({
     *   where: {
     *     // ... the filter for the Engagements we want to count
     *   }
     * })
    **/
    count<T extends EngagementCountArgs>(
      args?: Subset<T, EngagementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EngagementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Engagement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngagementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EngagementAggregateArgs>(args: Subset<T, EngagementAggregateArgs>): Prisma.PrismaPromise<GetEngagementAggregateType<T>>

    /**
     * Group by Engagement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngagementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EngagementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EngagementGroupByArgs['orderBy'] }
        : { orderBy?: EngagementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EngagementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEngagementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Engagement model
   */
  readonly fields: EngagementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Engagement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EngagementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    token<T extends TokenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TokenDefaultArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transaction<T extends Engagement$transactionArgs<ExtArgs> = {}>(args?: Subset<T, Engagement$transactionArgs<ExtArgs>>): Prisma__TokenTransactionClient<$Result.GetResult<Prisma.$TokenTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Engagement model
   */
  interface EngagementFieldRefs {
    readonly id: FieldRef<"Engagement", 'String'>
    readonly userId: FieldRef<"Engagement", 'String'>
    readonly tokenAddress: FieldRef<"Engagement", 'String'>
    readonly type: FieldRef<"Engagement", 'String'>
    readonly postId: FieldRef<"Engagement", 'String'>
    readonly triggeredAt: FieldRef<"Engagement", 'DateTime'>
    readonly transactionid: FieldRef<"Engagement", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Engagement findUnique
   */
  export type EngagementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engagement
     */
    select?: EngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engagement
     */
    omit?: EngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngagementInclude<ExtArgs> | null
    /**
     * Filter, which Engagement to fetch.
     */
    where: EngagementWhereUniqueInput
  }

  /**
   * Engagement findUniqueOrThrow
   */
  export type EngagementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engagement
     */
    select?: EngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engagement
     */
    omit?: EngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngagementInclude<ExtArgs> | null
    /**
     * Filter, which Engagement to fetch.
     */
    where: EngagementWhereUniqueInput
  }

  /**
   * Engagement findFirst
   */
  export type EngagementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engagement
     */
    select?: EngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engagement
     */
    omit?: EngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngagementInclude<ExtArgs> | null
    /**
     * Filter, which Engagement to fetch.
     */
    where?: EngagementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Engagements to fetch.
     */
    orderBy?: EngagementOrderByWithRelationInput | EngagementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Engagements.
     */
    cursor?: EngagementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Engagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Engagements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Engagements.
     */
    distinct?: EngagementScalarFieldEnum | EngagementScalarFieldEnum[]
  }

  /**
   * Engagement findFirstOrThrow
   */
  export type EngagementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engagement
     */
    select?: EngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engagement
     */
    omit?: EngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngagementInclude<ExtArgs> | null
    /**
     * Filter, which Engagement to fetch.
     */
    where?: EngagementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Engagements to fetch.
     */
    orderBy?: EngagementOrderByWithRelationInput | EngagementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Engagements.
     */
    cursor?: EngagementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Engagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Engagements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Engagements.
     */
    distinct?: EngagementScalarFieldEnum | EngagementScalarFieldEnum[]
  }

  /**
   * Engagement findMany
   */
  export type EngagementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engagement
     */
    select?: EngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engagement
     */
    omit?: EngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngagementInclude<ExtArgs> | null
    /**
     * Filter, which Engagements to fetch.
     */
    where?: EngagementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Engagements to fetch.
     */
    orderBy?: EngagementOrderByWithRelationInput | EngagementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Engagements.
     */
    cursor?: EngagementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Engagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Engagements.
     */
    skip?: number
    distinct?: EngagementScalarFieldEnum | EngagementScalarFieldEnum[]
  }

  /**
   * Engagement create
   */
  export type EngagementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engagement
     */
    select?: EngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engagement
     */
    omit?: EngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngagementInclude<ExtArgs> | null
    /**
     * The data needed to create a Engagement.
     */
    data: XOR<EngagementCreateInput, EngagementUncheckedCreateInput>
  }

  /**
   * Engagement createMany
   */
  export type EngagementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Engagements.
     */
    data: EngagementCreateManyInput | EngagementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Engagement createManyAndReturn
   */
  export type EngagementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engagement
     */
    select?: EngagementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Engagement
     */
    omit?: EngagementOmit<ExtArgs> | null
    /**
     * The data used to create many Engagements.
     */
    data: EngagementCreateManyInput | EngagementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngagementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Engagement update
   */
  export type EngagementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engagement
     */
    select?: EngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engagement
     */
    omit?: EngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngagementInclude<ExtArgs> | null
    /**
     * The data needed to update a Engagement.
     */
    data: XOR<EngagementUpdateInput, EngagementUncheckedUpdateInput>
    /**
     * Choose, which Engagement to update.
     */
    where: EngagementWhereUniqueInput
  }

  /**
   * Engagement updateMany
   */
  export type EngagementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Engagements.
     */
    data: XOR<EngagementUpdateManyMutationInput, EngagementUncheckedUpdateManyInput>
    /**
     * Filter which Engagements to update
     */
    where?: EngagementWhereInput
    /**
     * Limit how many Engagements to update.
     */
    limit?: number
  }

  /**
   * Engagement updateManyAndReturn
   */
  export type EngagementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engagement
     */
    select?: EngagementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Engagement
     */
    omit?: EngagementOmit<ExtArgs> | null
    /**
     * The data used to update Engagements.
     */
    data: XOR<EngagementUpdateManyMutationInput, EngagementUncheckedUpdateManyInput>
    /**
     * Filter which Engagements to update
     */
    where?: EngagementWhereInput
    /**
     * Limit how many Engagements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngagementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Engagement upsert
   */
  export type EngagementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engagement
     */
    select?: EngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engagement
     */
    omit?: EngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngagementInclude<ExtArgs> | null
    /**
     * The filter to search for the Engagement to update in case it exists.
     */
    where: EngagementWhereUniqueInput
    /**
     * In case the Engagement found by the `where` argument doesn't exist, create a new Engagement with this data.
     */
    create: XOR<EngagementCreateInput, EngagementUncheckedCreateInput>
    /**
     * In case the Engagement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EngagementUpdateInput, EngagementUncheckedUpdateInput>
  }

  /**
   * Engagement delete
   */
  export type EngagementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engagement
     */
    select?: EngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engagement
     */
    omit?: EngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngagementInclude<ExtArgs> | null
    /**
     * Filter which Engagement to delete.
     */
    where: EngagementWhereUniqueInput
  }

  /**
   * Engagement deleteMany
   */
  export type EngagementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Engagements to delete
     */
    where?: EngagementWhereInput
    /**
     * Limit how many Engagements to delete.
     */
    limit?: number
  }

  /**
   * Engagement.transaction
   */
  export type Engagement$transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenTransaction
     */
    select?: TokenTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenTransaction
     */
    omit?: TokenTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenTransactionInclude<ExtArgs> | null
    where?: TokenTransactionWhereInput
  }

  /**
   * Engagement without action
   */
  export type EngagementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engagement
     */
    select?: EngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engagement
     */
    omit?: EngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngagementInclude<ExtArgs> | null
  }


  /**
   * Model TokenTransaction
   */

  export type AggregateTokenTransaction = {
    _count: TokenTransactionCountAggregateOutputType | null
    _avg: TokenTransactionAvgAggregateOutputType | null
    _sum: TokenTransactionSumAggregateOutputType | null
    _min: TokenTransactionMinAggregateOutputType | null
    _max: TokenTransactionMaxAggregateOutputType | null
  }

  export type TokenTransactionAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type TokenTransactionSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type TokenTransactionMinAggregateOutputType = {
    id: string | null
    tokenAddress: string | null
    fromAddress: string | null
    toAddress: string | null
    amount: Decimal | null
    txHash: string | null
    createdAt: Date | null
  }

  export type TokenTransactionMaxAggregateOutputType = {
    id: string | null
    tokenAddress: string | null
    fromAddress: string | null
    toAddress: string | null
    amount: Decimal | null
    txHash: string | null
    createdAt: Date | null
  }

  export type TokenTransactionCountAggregateOutputType = {
    id: number
    tokenAddress: number
    fromAddress: number
    toAddress: number
    amount: number
    txHash: number
    createdAt: number
    _all: number
  }


  export type TokenTransactionAvgAggregateInputType = {
    amount?: true
  }

  export type TokenTransactionSumAggregateInputType = {
    amount?: true
  }

  export type TokenTransactionMinAggregateInputType = {
    id?: true
    tokenAddress?: true
    fromAddress?: true
    toAddress?: true
    amount?: true
    txHash?: true
    createdAt?: true
  }

  export type TokenTransactionMaxAggregateInputType = {
    id?: true
    tokenAddress?: true
    fromAddress?: true
    toAddress?: true
    amount?: true
    txHash?: true
    createdAt?: true
  }

  export type TokenTransactionCountAggregateInputType = {
    id?: true
    tokenAddress?: true
    fromAddress?: true
    toAddress?: true
    amount?: true
    txHash?: true
    createdAt?: true
    _all?: true
  }

  export type TokenTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenTransaction to aggregate.
     */
    where?: TokenTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenTransactions to fetch.
     */
    orderBy?: TokenTransactionOrderByWithRelationInput | TokenTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TokenTransactions
    **/
    _count?: true | TokenTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenTransactionMaxAggregateInputType
  }

  export type GetTokenTransactionAggregateType<T extends TokenTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTokenTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokenTransaction[P]>
      : GetScalarType<T[P], AggregateTokenTransaction[P]>
  }




  export type TokenTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenTransactionWhereInput
    orderBy?: TokenTransactionOrderByWithAggregationInput | TokenTransactionOrderByWithAggregationInput[]
    by: TokenTransactionScalarFieldEnum[] | TokenTransactionScalarFieldEnum
    having?: TokenTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenTransactionCountAggregateInputType | true
    _avg?: TokenTransactionAvgAggregateInputType
    _sum?: TokenTransactionSumAggregateInputType
    _min?: TokenTransactionMinAggregateInputType
    _max?: TokenTransactionMaxAggregateInputType
  }

  export type TokenTransactionGroupByOutputType = {
    id: string
    tokenAddress: string
    fromAddress: string
    toAddress: string
    amount: Decimal
    txHash: string
    createdAt: Date
    _count: TokenTransactionCountAggregateOutputType | null
    _avg: TokenTransactionAvgAggregateOutputType | null
    _sum: TokenTransactionSumAggregateOutputType | null
    _min: TokenTransactionMinAggregateOutputType | null
    _max: TokenTransactionMaxAggregateOutputType | null
  }

  type GetTokenTransactionGroupByPayload<T extends TokenTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TokenTransactionGroupByOutputType[P]>
        }
      >
    >


  export type TokenTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenAddress?: boolean
    fromAddress?: boolean
    toAddress?: boolean
    amount?: boolean
    txHash?: boolean
    createdAt?: boolean
    token?: boolean | TokenDefaultArgs<ExtArgs>
    Engagement?: boolean | TokenTransaction$EngagementArgs<ExtArgs>
    _count?: boolean | TokenTransactionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokenTransaction"]>

  export type TokenTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenAddress?: boolean
    fromAddress?: boolean
    toAddress?: boolean
    amount?: boolean
    txHash?: boolean
    createdAt?: boolean
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokenTransaction"]>

  export type TokenTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenAddress?: boolean
    fromAddress?: boolean
    toAddress?: boolean
    amount?: boolean
    txHash?: boolean
    createdAt?: boolean
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokenTransaction"]>

  export type TokenTransactionSelectScalar = {
    id?: boolean
    tokenAddress?: boolean
    fromAddress?: boolean
    toAddress?: boolean
    amount?: boolean
    txHash?: boolean
    createdAt?: boolean
  }

  export type TokenTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tokenAddress" | "fromAddress" | "toAddress" | "amount" | "txHash" | "createdAt", ExtArgs["result"]["tokenTransaction"]>
  export type TokenTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token?: boolean | TokenDefaultArgs<ExtArgs>
    Engagement?: boolean | TokenTransaction$EngagementArgs<ExtArgs>
    _count?: boolean | TokenTransactionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TokenTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }
  export type TokenTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }

  export type $TokenTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TokenTransaction"
    objects: {
      token: Prisma.$TokenPayload<ExtArgs>
      Engagement: Prisma.$EngagementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tokenAddress: string
      fromAddress: string
      toAddress: string
      amount: Prisma.Decimal
      txHash: string
      createdAt: Date
    }, ExtArgs["result"]["tokenTransaction"]>
    composites: {}
  }

  type TokenTransactionGetPayload<S extends boolean | null | undefined | TokenTransactionDefaultArgs> = $Result.GetResult<Prisma.$TokenTransactionPayload, S>

  type TokenTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenTransactionCountAggregateInputType | true
    }

  export interface TokenTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TokenTransaction'], meta: { name: 'TokenTransaction' } }
    /**
     * Find zero or one TokenTransaction that matches the filter.
     * @param {TokenTransactionFindUniqueArgs} args - Arguments to find a TokenTransaction
     * @example
     * // Get one TokenTransaction
     * const tokenTransaction = await prisma.tokenTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenTransactionFindUniqueArgs>(args: SelectSubset<T, TokenTransactionFindUniqueArgs<ExtArgs>>): Prisma__TokenTransactionClient<$Result.GetResult<Prisma.$TokenTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TokenTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenTransactionFindUniqueOrThrowArgs} args - Arguments to find a TokenTransaction
     * @example
     * // Get one TokenTransaction
     * const tokenTransaction = await prisma.tokenTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenTransactionClient<$Result.GetResult<Prisma.$TokenTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TokenTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenTransactionFindFirstArgs} args - Arguments to find a TokenTransaction
     * @example
     * // Get one TokenTransaction
     * const tokenTransaction = await prisma.tokenTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenTransactionFindFirstArgs>(args?: SelectSubset<T, TokenTransactionFindFirstArgs<ExtArgs>>): Prisma__TokenTransactionClient<$Result.GetResult<Prisma.$TokenTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TokenTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenTransactionFindFirstOrThrowArgs} args - Arguments to find a TokenTransaction
     * @example
     * // Get one TokenTransaction
     * const tokenTransaction = await prisma.tokenTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenTransactionClient<$Result.GetResult<Prisma.$TokenTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TokenTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TokenTransactions
     * const tokenTransactions = await prisma.tokenTransaction.findMany()
     * 
     * // Get first 10 TokenTransactions
     * const tokenTransactions = await prisma.tokenTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenTransactionWithIdOnly = await prisma.tokenTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenTransactionFindManyArgs>(args?: SelectSubset<T, TokenTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TokenTransaction.
     * @param {TokenTransactionCreateArgs} args - Arguments to create a TokenTransaction.
     * @example
     * // Create one TokenTransaction
     * const TokenTransaction = await prisma.tokenTransaction.create({
     *   data: {
     *     // ... data to create a TokenTransaction
     *   }
     * })
     * 
     */
    create<T extends TokenTransactionCreateArgs>(args: SelectSubset<T, TokenTransactionCreateArgs<ExtArgs>>): Prisma__TokenTransactionClient<$Result.GetResult<Prisma.$TokenTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TokenTransactions.
     * @param {TokenTransactionCreateManyArgs} args - Arguments to create many TokenTransactions.
     * @example
     * // Create many TokenTransactions
     * const tokenTransaction = await prisma.tokenTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenTransactionCreateManyArgs>(args?: SelectSubset<T, TokenTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TokenTransactions and returns the data saved in the database.
     * @param {TokenTransactionCreateManyAndReturnArgs} args - Arguments to create many TokenTransactions.
     * @example
     * // Create many TokenTransactions
     * const tokenTransaction = await prisma.tokenTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TokenTransactions and only return the `id`
     * const tokenTransactionWithIdOnly = await prisma.tokenTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TokenTransaction.
     * @param {TokenTransactionDeleteArgs} args - Arguments to delete one TokenTransaction.
     * @example
     * // Delete one TokenTransaction
     * const TokenTransaction = await prisma.tokenTransaction.delete({
     *   where: {
     *     // ... filter to delete one TokenTransaction
     *   }
     * })
     * 
     */
    delete<T extends TokenTransactionDeleteArgs>(args: SelectSubset<T, TokenTransactionDeleteArgs<ExtArgs>>): Prisma__TokenTransactionClient<$Result.GetResult<Prisma.$TokenTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TokenTransaction.
     * @param {TokenTransactionUpdateArgs} args - Arguments to update one TokenTransaction.
     * @example
     * // Update one TokenTransaction
     * const tokenTransaction = await prisma.tokenTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenTransactionUpdateArgs>(args: SelectSubset<T, TokenTransactionUpdateArgs<ExtArgs>>): Prisma__TokenTransactionClient<$Result.GetResult<Prisma.$TokenTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TokenTransactions.
     * @param {TokenTransactionDeleteManyArgs} args - Arguments to filter TokenTransactions to delete.
     * @example
     * // Delete a few TokenTransactions
     * const { count } = await prisma.tokenTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenTransactionDeleteManyArgs>(args?: SelectSubset<T, TokenTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TokenTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TokenTransactions
     * const tokenTransaction = await prisma.tokenTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenTransactionUpdateManyArgs>(args: SelectSubset<T, TokenTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TokenTransactions and returns the data updated in the database.
     * @param {TokenTransactionUpdateManyAndReturnArgs} args - Arguments to update many TokenTransactions.
     * @example
     * // Update many TokenTransactions
     * const tokenTransaction = await prisma.tokenTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TokenTransactions and only return the `id`
     * const tokenTransactionWithIdOnly = await prisma.tokenTransaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TokenTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TokenTransaction.
     * @param {TokenTransactionUpsertArgs} args - Arguments to update or create a TokenTransaction.
     * @example
     * // Update or create a TokenTransaction
     * const tokenTransaction = await prisma.tokenTransaction.upsert({
     *   create: {
     *     // ... data to create a TokenTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TokenTransaction we want to update
     *   }
     * })
     */
    upsert<T extends TokenTransactionUpsertArgs>(args: SelectSubset<T, TokenTransactionUpsertArgs<ExtArgs>>): Prisma__TokenTransactionClient<$Result.GetResult<Prisma.$TokenTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TokenTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenTransactionCountArgs} args - Arguments to filter TokenTransactions to count.
     * @example
     * // Count the number of TokenTransactions
     * const count = await prisma.tokenTransaction.count({
     *   where: {
     *     // ... the filter for the TokenTransactions we want to count
     *   }
     * })
    **/
    count<T extends TokenTransactionCountArgs>(
      args?: Subset<T, TokenTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TokenTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenTransactionAggregateArgs>(args: Subset<T, TokenTransactionAggregateArgs>): Prisma.PrismaPromise<GetTokenTransactionAggregateType<T>>

    /**
     * Group by TokenTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenTransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenTransactionGroupByArgs['orderBy'] }
        : { orderBy?: TokenTransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TokenTransaction model
   */
  readonly fields: TokenTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TokenTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    token<T extends TokenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TokenDefaultArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Engagement<T extends TokenTransaction$EngagementArgs<ExtArgs> = {}>(args?: Subset<T, TokenTransaction$EngagementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EngagementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TokenTransaction model
   */
  interface TokenTransactionFieldRefs {
    readonly id: FieldRef<"TokenTransaction", 'String'>
    readonly tokenAddress: FieldRef<"TokenTransaction", 'String'>
    readonly fromAddress: FieldRef<"TokenTransaction", 'String'>
    readonly toAddress: FieldRef<"TokenTransaction", 'String'>
    readonly amount: FieldRef<"TokenTransaction", 'Decimal'>
    readonly txHash: FieldRef<"TokenTransaction", 'String'>
    readonly createdAt: FieldRef<"TokenTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TokenTransaction findUnique
   */
  export type TokenTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenTransaction
     */
    select?: TokenTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenTransaction
     */
    omit?: TokenTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenTransactionInclude<ExtArgs> | null
    /**
     * Filter, which TokenTransaction to fetch.
     */
    where: TokenTransactionWhereUniqueInput
  }

  /**
   * TokenTransaction findUniqueOrThrow
   */
  export type TokenTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenTransaction
     */
    select?: TokenTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenTransaction
     */
    omit?: TokenTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenTransactionInclude<ExtArgs> | null
    /**
     * Filter, which TokenTransaction to fetch.
     */
    where: TokenTransactionWhereUniqueInput
  }

  /**
   * TokenTransaction findFirst
   */
  export type TokenTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenTransaction
     */
    select?: TokenTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenTransaction
     */
    omit?: TokenTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenTransactionInclude<ExtArgs> | null
    /**
     * Filter, which TokenTransaction to fetch.
     */
    where?: TokenTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenTransactions to fetch.
     */
    orderBy?: TokenTransactionOrderByWithRelationInput | TokenTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenTransactions.
     */
    cursor?: TokenTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenTransactions.
     */
    distinct?: TokenTransactionScalarFieldEnum | TokenTransactionScalarFieldEnum[]
  }

  /**
   * TokenTransaction findFirstOrThrow
   */
  export type TokenTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenTransaction
     */
    select?: TokenTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenTransaction
     */
    omit?: TokenTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenTransactionInclude<ExtArgs> | null
    /**
     * Filter, which TokenTransaction to fetch.
     */
    where?: TokenTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenTransactions to fetch.
     */
    orderBy?: TokenTransactionOrderByWithRelationInput | TokenTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenTransactions.
     */
    cursor?: TokenTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenTransactions.
     */
    distinct?: TokenTransactionScalarFieldEnum | TokenTransactionScalarFieldEnum[]
  }

  /**
   * TokenTransaction findMany
   */
  export type TokenTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenTransaction
     */
    select?: TokenTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenTransaction
     */
    omit?: TokenTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenTransactionInclude<ExtArgs> | null
    /**
     * Filter, which TokenTransactions to fetch.
     */
    where?: TokenTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenTransactions to fetch.
     */
    orderBy?: TokenTransactionOrderByWithRelationInput | TokenTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TokenTransactions.
     */
    cursor?: TokenTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenTransactions.
     */
    skip?: number
    distinct?: TokenTransactionScalarFieldEnum | TokenTransactionScalarFieldEnum[]
  }

  /**
   * TokenTransaction create
   */
  export type TokenTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenTransaction
     */
    select?: TokenTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenTransaction
     */
    omit?: TokenTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a TokenTransaction.
     */
    data: XOR<TokenTransactionCreateInput, TokenTransactionUncheckedCreateInput>
  }

  /**
   * TokenTransaction createMany
   */
  export type TokenTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TokenTransactions.
     */
    data: TokenTransactionCreateManyInput | TokenTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TokenTransaction createManyAndReturn
   */
  export type TokenTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenTransaction
     */
    select?: TokenTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TokenTransaction
     */
    omit?: TokenTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many TokenTransactions.
     */
    data: TokenTransactionCreateManyInput | TokenTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TokenTransaction update
   */
  export type TokenTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenTransaction
     */
    select?: TokenTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenTransaction
     */
    omit?: TokenTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a TokenTransaction.
     */
    data: XOR<TokenTransactionUpdateInput, TokenTransactionUncheckedUpdateInput>
    /**
     * Choose, which TokenTransaction to update.
     */
    where: TokenTransactionWhereUniqueInput
  }

  /**
   * TokenTransaction updateMany
   */
  export type TokenTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TokenTransactions.
     */
    data: XOR<TokenTransactionUpdateManyMutationInput, TokenTransactionUncheckedUpdateManyInput>
    /**
     * Filter which TokenTransactions to update
     */
    where?: TokenTransactionWhereInput
    /**
     * Limit how many TokenTransactions to update.
     */
    limit?: number
  }

  /**
   * TokenTransaction updateManyAndReturn
   */
  export type TokenTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenTransaction
     */
    select?: TokenTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TokenTransaction
     */
    omit?: TokenTransactionOmit<ExtArgs> | null
    /**
     * The data used to update TokenTransactions.
     */
    data: XOR<TokenTransactionUpdateManyMutationInput, TokenTransactionUncheckedUpdateManyInput>
    /**
     * Filter which TokenTransactions to update
     */
    where?: TokenTransactionWhereInput
    /**
     * Limit how many TokenTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TokenTransaction upsert
   */
  export type TokenTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenTransaction
     */
    select?: TokenTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenTransaction
     */
    omit?: TokenTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the TokenTransaction to update in case it exists.
     */
    where: TokenTransactionWhereUniqueInput
    /**
     * In case the TokenTransaction found by the `where` argument doesn't exist, create a new TokenTransaction with this data.
     */
    create: XOR<TokenTransactionCreateInput, TokenTransactionUncheckedCreateInput>
    /**
     * In case the TokenTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenTransactionUpdateInput, TokenTransactionUncheckedUpdateInput>
  }

  /**
   * TokenTransaction delete
   */
  export type TokenTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenTransaction
     */
    select?: TokenTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenTransaction
     */
    omit?: TokenTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenTransactionInclude<ExtArgs> | null
    /**
     * Filter which TokenTransaction to delete.
     */
    where: TokenTransactionWhereUniqueInput
  }

  /**
   * TokenTransaction deleteMany
   */
  export type TokenTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenTransactions to delete
     */
    where?: TokenTransactionWhereInput
    /**
     * Limit how many TokenTransactions to delete.
     */
    limit?: number
  }

  /**
   * TokenTransaction.Engagement
   */
  export type TokenTransaction$EngagementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engagement
     */
    select?: EngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engagement
     */
    omit?: EngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngagementInclude<ExtArgs> | null
    where?: EngagementWhereInput
    orderBy?: EngagementOrderByWithRelationInput | EngagementOrderByWithRelationInput[]
    cursor?: EngagementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EngagementScalarFieldEnum | EngagementScalarFieldEnum[]
  }

  /**
   * TokenTransaction without action
   */
  export type TokenTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenTransaction
     */
    select?: TokenTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenTransaction
     */
    omit?: TokenTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenTransactionInclude<ExtArgs> | null
  }


  /**
   * Model BuyAmount
   */

  export type AggregateBuyAmount = {
    _count: BuyAmountCountAggregateOutputType | null
    _avg: BuyAmountAvgAggregateOutputType | null
    _sum: BuyAmountSumAggregateOutputType | null
    _min: BuyAmountMinAggregateOutputType | null
    _max: BuyAmountMaxAggregateOutputType | null
  }

  export type BuyAmountAvgAggregateOutputType = {
    likeAmount: number | null
    retweetAmount: number | null
  }

  export type BuyAmountSumAggregateOutputType = {
    likeAmount: number | null
    retweetAmount: number | null
  }

  export type BuyAmountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    likeAmount: number | null
    retweetAmount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BuyAmountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    likeAmount: number | null
    retweetAmount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BuyAmountCountAggregateOutputType = {
    id: number
    userId: number
    likeAmount: number
    retweetAmount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BuyAmountAvgAggregateInputType = {
    likeAmount?: true
    retweetAmount?: true
  }

  export type BuyAmountSumAggregateInputType = {
    likeAmount?: true
    retweetAmount?: true
  }

  export type BuyAmountMinAggregateInputType = {
    id?: true
    userId?: true
    likeAmount?: true
    retweetAmount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BuyAmountMaxAggregateInputType = {
    id?: true
    userId?: true
    likeAmount?: true
    retweetAmount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BuyAmountCountAggregateInputType = {
    id?: true
    userId?: true
    likeAmount?: true
    retweetAmount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BuyAmountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BuyAmount to aggregate.
     */
    where?: BuyAmountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BuyAmounts to fetch.
     */
    orderBy?: BuyAmountOrderByWithRelationInput | BuyAmountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BuyAmountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BuyAmounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BuyAmounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BuyAmounts
    **/
    _count?: true | BuyAmountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BuyAmountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BuyAmountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BuyAmountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BuyAmountMaxAggregateInputType
  }

  export type GetBuyAmountAggregateType<T extends BuyAmountAggregateArgs> = {
        [P in keyof T & keyof AggregateBuyAmount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBuyAmount[P]>
      : GetScalarType<T[P], AggregateBuyAmount[P]>
  }




  export type BuyAmountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuyAmountWhereInput
    orderBy?: BuyAmountOrderByWithAggregationInput | BuyAmountOrderByWithAggregationInput[]
    by: BuyAmountScalarFieldEnum[] | BuyAmountScalarFieldEnum
    having?: BuyAmountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BuyAmountCountAggregateInputType | true
    _avg?: BuyAmountAvgAggregateInputType
    _sum?: BuyAmountSumAggregateInputType
    _min?: BuyAmountMinAggregateInputType
    _max?: BuyAmountMaxAggregateInputType
  }

  export type BuyAmountGroupByOutputType = {
    id: string
    userId: string
    likeAmount: number
    retweetAmount: number
    createdAt: Date
    updatedAt: Date
    _count: BuyAmountCountAggregateOutputType | null
    _avg: BuyAmountAvgAggregateOutputType | null
    _sum: BuyAmountSumAggregateOutputType | null
    _min: BuyAmountMinAggregateOutputType | null
    _max: BuyAmountMaxAggregateOutputType | null
  }

  type GetBuyAmountGroupByPayload<T extends BuyAmountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BuyAmountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BuyAmountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BuyAmountGroupByOutputType[P]>
            : GetScalarType<T[P], BuyAmountGroupByOutputType[P]>
        }
      >
    >


  export type BuyAmountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    likeAmount?: boolean
    retweetAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["buyAmount"]>

  export type BuyAmountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    likeAmount?: boolean
    retweetAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["buyAmount"]>

  export type BuyAmountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    likeAmount?: boolean
    retweetAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["buyAmount"]>

  export type BuyAmountSelectScalar = {
    id?: boolean
    userId?: boolean
    likeAmount?: boolean
    retweetAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BuyAmountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "likeAmount" | "retweetAmount" | "createdAt" | "updatedAt", ExtArgs["result"]["buyAmount"]>
  export type BuyAmountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BuyAmountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BuyAmountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BuyAmountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BuyAmount"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      likeAmount: number
      retweetAmount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["buyAmount"]>
    composites: {}
  }

  type BuyAmountGetPayload<S extends boolean | null | undefined | BuyAmountDefaultArgs> = $Result.GetResult<Prisma.$BuyAmountPayload, S>

  type BuyAmountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BuyAmountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BuyAmountCountAggregateInputType | true
    }

  export interface BuyAmountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BuyAmount'], meta: { name: 'BuyAmount' } }
    /**
     * Find zero or one BuyAmount that matches the filter.
     * @param {BuyAmountFindUniqueArgs} args - Arguments to find a BuyAmount
     * @example
     * // Get one BuyAmount
     * const buyAmount = await prisma.buyAmount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BuyAmountFindUniqueArgs>(args: SelectSubset<T, BuyAmountFindUniqueArgs<ExtArgs>>): Prisma__BuyAmountClient<$Result.GetResult<Prisma.$BuyAmountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BuyAmount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BuyAmountFindUniqueOrThrowArgs} args - Arguments to find a BuyAmount
     * @example
     * // Get one BuyAmount
     * const buyAmount = await prisma.buyAmount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BuyAmountFindUniqueOrThrowArgs>(args: SelectSubset<T, BuyAmountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BuyAmountClient<$Result.GetResult<Prisma.$BuyAmountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BuyAmount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyAmountFindFirstArgs} args - Arguments to find a BuyAmount
     * @example
     * // Get one BuyAmount
     * const buyAmount = await prisma.buyAmount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BuyAmountFindFirstArgs>(args?: SelectSubset<T, BuyAmountFindFirstArgs<ExtArgs>>): Prisma__BuyAmountClient<$Result.GetResult<Prisma.$BuyAmountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BuyAmount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyAmountFindFirstOrThrowArgs} args - Arguments to find a BuyAmount
     * @example
     * // Get one BuyAmount
     * const buyAmount = await prisma.buyAmount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BuyAmountFindFirstOrThrowArgs>(args?: SelectSubset<T, BuyAmountFindFirstOrThrowArgs<ExtArgs>>): Prisma__BuyAmountClient<$Result.GetResult<Prisma.$BuyAmountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BuyAmounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyAmountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BuyAmounts
     * const buyAmounts = await prisma.buyAmount.findMany()
     * 
     * // Get first 10 BuyAmounts
     * const buyAmounts = await prisma.buyAmount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const buyAmountWithIdOnly = await prisma.buyAmount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BuyAmountFindManyArgs>(args?: SelectSubset<T, BuyAmountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuyAmountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BuyAmount.
     * @param {BuyAmountCreateArgs} args - Arguments to create a BuyAmount.
     * @example
     * // Create one BuyAmount
     * const BuyAmount = await prisma.buyAmount.create({
     *   data: {
     *     // ... data to create a BuyAmount
     *   }
     * })
     * 
     */
    create<T extends BuyAmountCreateArgs>(args: SelectSubset<T, BuyAmountCreateArgs<ExtArgs>>): Prisma__BuyAmountClient<$Result.GetResult<Prisma.$BuyAmountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BuyAmounts.
     * @param {BuyAmountCreateManyArgs} args - Arguments to create many BuyAmounts.
     * @example
     * // Create many BuyAmounts
     * const buyAmount = await prisma.buyAmount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BuyAmountCreateManyArgs>(args?: SelectSubset<T, BuyAmountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BuyAmounts and returns the data saved in the database.
     * @param {BuyAmountCreateManyAndReturnArgs} args - Arguments to create many BuyAmounts.
     * @example
     * // Create many BuyAmounts
     * const buyAmount = await prisma.buyAmount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BuyAmounts and only return the `id`
     * const buyAmountWithIdOnly = await prisma.buyAmount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BuyAmountCreateManyAndReturnArgs>(args?: SelectSubset<T, BuyAmountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuyAmountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BuyAmount.
     * @param {BuyAmountDeleteArgs} args - Arguments to delete one BuyAmount.
     * @example
     * // Delete one BuyAmount
     * const BuyAmount = await prisma.buyAmount.delete({
     *   where: {
     *     // ... filter to delete one BuyAmount
     *   }
     * })
     * 
     */
    delete<T extends BuyAmountDeleteArgs>(args: SelectSubset<T, BuyAmountDeleteArgs<ExtArgs>>): Prisma__BuyAmountClient<$Result.GetResult<Prisma.$BuyAmountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BuyAmount.
     * @param {BuyAmountUpdateArgs} args - Arguments to update one BuyAmount.
     * @example
     * // Update one BuyAmount
     * const buyAmount = await prisma.buyAmount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BuyAmountUpdateArgs>(args: SelectSubset<T, BuyAmountUpdateArgs<ExtArgs>>): Prisma__BuyAmountClient<$Result.GetResult<Prisma.$BuyAmountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BuyAmounts.
     * @param {BuyAmountDeleteManyArgs} args - Arguments to filter BuyAmounts to delete.
     * @example
     * // Delete a few BuyAmounts
     * const { count } = await prisma.buyAmount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BuyAmountDeleteManyArgs>(args?: SelectSubset<T, BuyAmountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BuyAmounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyAmountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BuyAmounts
     * const buyAmount = await prisma.buyAmount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BuyAmountUpdateManyArgs>(args: SelectSubset<T, BuyAmountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BuyAmounts and returns the data updated in the database.
     * @param {BuyAmountUpdateManyAndReturnArgs} args - Arguments to update many BuyAmounts.
     * @example
     * // Update many BuyAmounts
     * const buyAmount = await prisma.buyAmount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BuyAmounts and only return the `id`
     * const buyAmountWithIdOnly = await prisma.buyAmount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BuyAmountUpdateManyAndReturnArgs>(args: SelectSubset<T, BuyAmountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuyAmountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BuyAmount.
     * @param {BuyAmountUpsertArgs} args - Arguments to update or create a BuyAmount.
     * @example
     * // Update or create a BuyAmount
     * const buyAmount = await prisma.buyAmount.upsert({
     *   create: {
     *     // ... data to create a BuyAmount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BuyAmount we want to update
     *   }
     * })
     */
    upsert<T extends BuyAmountUpsertArgs>(args: SelectSubset<T, BuyAmountUpsertArgs<ExtArgs>>): Prisma__BuyAmountClient<$Result.GetResult<Prisma.$BuyAmountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BuyAmounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyAmountCountArgs} args - Arguments to filter BuyAmounts to count.
     * @example
     * // Count the number of BuyAmounts
     * const count = await prisma.buyAmount.count({
     *   where: {
     *     // ... the filter for the BuyAmounts we want to count
     *   }
     * })
    **/
    count<T extends BuyAmountCountArgs>(
      args?: Subset<T, BuyAmountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BuyAmountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BuyAmount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyAmountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BuyAmountAggregateArgs>(args: Subset<T, BuyAmountAggregateArgs>): Prisma.PrismaPromise<GetBuyAmountAggregateType<T>>

    /**
     * Group by BuyAmount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyAmountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BuyAmountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BuyAmountGroupByArgs['orderBy'] }
        : { orderBy?: BuyAmountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BuyAmountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBuyAmountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BuyAmount model
   */
  readonly fields: BuyAmountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BuyAmount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BuyAmountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BuyAmount model
   */
  interface BuyAmountFieldRefs {
    readonly id: FieldRef<"BuyAmount", 'String'>
    readonly userId: FieldRef<"BuyAmount", 'String'>
    readonly likeAmount: FieldRef<"BuyAmount", 'Float'>
    readonly retweetAmount: FieldRef<"BuyAmount", 'Float'>
    readonly createdAt: FieldRef<"BuyAmount", 'DateTime'>
    readonly updatedAt: FieldRef<"BuyAmount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BuyAmount findUnique
   */
  export type BuyAmountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyAmount
     */
    select?: BuyAmountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuyAmount
     */
    omit?: BuyAmountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyAmountInclude<ExtArgs> | null
    /**
     * Filter, which BuyAmount to fetch.
     */
    where: BuyAmountWhereUniqueInput
  }

  /**
   * BuyAmount findUniqueOrThrow
   */
  export type BuyAmountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyAmount
     */
    select?: BuyAmountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuyAmount
     */
    omit?: BuyAmountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyAmountInclude<ExtArgs> | null
    /**
     * Filter, which BuyAmount to fetch.
     */
    where: BuyAmountWhereUniqueInput
  }

  /**
   * BuyAmount findFirst
   */
  export type BuyAmountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyAmount
     */
    select?: BuyAmountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuyAmount
     */
    omit?: BuyAmountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyAmountInclude<ExtArgs> | null
    /**
     * Filter, which BuyAmount to fetch.
     */
    where?: BuyAmountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BuyAmounts to fetch.
     */
    orderBy?: BuyAmountOrderByWithRelationInput | BuyAmountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BuyAmounts.
     */
    cursor?: BuyAmountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BuyAmounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BuyAmounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BuyAmounts.
     */
    distinct?: BuyAmountScalarFieldEnum | BuyAmountScalarFieldEnum[]
  }

  /**
   * BuyAmount findFirstOrThrow
   */
  export type BuyAmountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyAmount
     */
    select?: BuyAmountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuyAmount
     */
    omit?: BuyAmountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyAmountInclude<ExtArgs> | null
    /**
     * Filter, which BuyAmount to fetch.
     */
    where?: BuyAmountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BuyAmounts to fetch.
     */
    orderBy?: BuyAmountOrderByWithRelationInput | BuyAmountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BuyAmounts.
     */
    cursor?: BuyAmountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BuyAmounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BuyAmounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BuyAmounts.
     */
    distinct?: BuyAmountScalarFieldEnum | BuyAmountScalarFieldEnum[]
  }

  /**
   * BuyAmount findMany
   */
  export type BuyAmountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyAmount
     */
    select?: BuyAmountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuyAmount
     */
    omit?: BuyAmountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyAmountInclude<ExtArgs> | null
    /**
     * Filter, which BuyAmounts to fetch.
     */
    where?: BuyAmountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BuyAmounts to fetch.
     */
    orderBy?: BuyAmountOrderByWithRelationInput | BuyAmountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BuyAmounts.
     */
    cursor?: BuyAmountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BuyAmounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BuyAmounts.
     */
    skip?: number
    distinct?: BuyAmountScalarFieldEnum | BuyAmountScalarFieldEnum[]
  }

  /**
   * BuyAmount create
   */
  export type BuyAmountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyAmount
     */
    select?: BuyAmountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuyAmount
     */
    omit?: BuyAmountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyAmountInclude<ExtArgs> | null
    /**
     * The data needed to create a BuyAmount.
     */
    data: XOR<BuyAmountCreateInput, BuyAmountUncheckedCreateInput>
  }

  /**
   * BuyAmount createMany
   */
  export type BuyAmountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BuyAmounts.
     */
    data: BuyAmountCreateManyInput | BuyAmountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BuyAmount createManyAndReturn
   */
  export type BuyAmountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyAmount
     */
    select?: BuyAmountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BuyAmount
     */
    omit?: BuyAmountOmit<ExtArgs> | null
    /**
     * The data used to create many BuyAmounts.
     */
    data: BuyAmountCreateManyInput | BuyAmountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyAmountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BuyAmount update
   */
  export type BuyAmountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyAmount
     */
    select?: BuyAmountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuyAmount
     */
    omit?: BuyAmountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyAmountInclude<ExtArgs> | null
    /**
     * The data needed to update a BuyAmount.
     */
    data: XOR<BuyAmountUpdateInput, BuyAmountUncheckedUpdateInput>
    /**
     * Choose, which BuyAmount to update.
     */
    where: BuyAmountWhereUniqueInput
  }

  /**
   * BuyAmount updateMany
   */
  export type BuyAmountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BuyAmounts.
     */
    data: XOR<BuyAmountUpdateManyMutationInput, BuyAmountUncheckedUpdateManyInput>
    /**
     * Filter which BuyAmounts to update
     */
    where?: BuyAmountWhereInput
    /**
     * Limit how many BuyAmounts to update.
     */
    limit?: number
  }

  /**
   * BuyAmount updateManyAndReturn
   */
  export type BuyAmountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyAmount
     */
    select?: BuyAmountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BuyAmount
     */
    omit?: BuyAmountOmit<ExtArgs> | null
    /**
     * The data used to update BuyAmounts.
     */
    data: XOR<BuyAmountUpdateManyMutationInput, BuyAmountUncheckedUpdateManyInput>
    /**
     * Filter which BuyAmounts to update
     */
    where?: BuyAmountWhereInput
    /**
     * Limit how many BuyAmounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyAmountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BuyAmount upsert
   */
  export type BuyAmountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyAmount
     */
    select?: BuyAmountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuyAmount
     */
    omit?: BuyAmountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyAmountInclude<ExtArgs> | null
    /**
     * The filter to search for the BuyAmount to update in case it exists.
     */
    where: BuyAmountWhereUniqueInput
    /**
     * In case the BuyAmount found by the `where` argument doesn't exist, create a new BuyAmount with this data.
     */
    create: XOR<BuyAmountCreateInput, BuyAmountUncheckedCreateInput>
    /**
     * In case the BuyAmount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BuyAmountUpdateInput, BuyAmountUncheckedUpdateInput>
  }

  /**
   * BuyAmount delete
   */
  export type BuyAmountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyAmount
     */
    select?: BuyAmountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuyAmount
     */
    omit?: BuyAmountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyAmountInclude<ExtArgs> | null
    /**
     * Filter which BuyAmount to delete.
     */
    where: BuyAmountWhereUniqueInput
  }

  /**
   * BuyAmount deleteMany
   */
  export type BuyAmountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BuyAmounts to delete
     */
    where?: BuyAmountWhereInput
    /**
     * Limit how many BuyAmounts to delete.
     */
    limit?: number
  }

  /**
   * BuyAmount without action
   */
  export type BuyAmountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyAmount
     */
    select?: BuyAmountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuyAmount
     */
    omit?: BuyAmountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyAmountInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    fid: 'fid',
    username: 'username',
    displayName: 'displayName',
    pfp: 'pfp',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserWalletScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    address: 'address',
    encryptedKey: 'encryptedKey',
    iv: 'iv',
    authTag: 'authTag',
    createdAt: 'createdAt'
  };

  export type UserWalletScalarFieldEnum = (typeof UserWalletScalarFieldEnum)[keyof typeof UserWalletScalarFieldEnum]


  export const LinkedAccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    platform: 'platform',
    username: 'username',
    accountId: 'accountId',
    url: 'url'
  };

  export type LinkedAccountScalarFieldEnum = (typeof LinkedAccountScalarFieldEnum)[keyof typeof LinkedAccountScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    address: 'address',
    name: 'name',
    symbol: 'symbol',
    decimals: 'decimals',
    totalSupply: 'totalSupply',
    feeTier: 'feeTier',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const EngagementScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tokenAddress: 'tokenAddress',
    type: 'type',
    postId: 'postId',
    triggeredAt: 'triggeredAt',
    transactionid: 'transactionid'
  };

  export type EngagementScalarFieldEnum = (typeof EngagementScalarFieldEnum)[keyof typeof EngagementScalarFieldEnum]


  export const TokenTransactionScalarFieldEnum: {
    id: 'id',
    tokenAddress: 'tokenAddress',
    fromAddress: 'fromAddress',
    toAddress: 'toAddress',
    amount: 'amount',
    txHash: 'txHash',
    createdAt: 'createdAt'
  };

  export type TokenTransactionScalarFieldEnum = (typeof TokenTransactionScalarFieldEnum)[keyof typeof TokenTransactionScalarFieldEnum]


  export const BuyAmountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    likeAmount: 'likeAmount',
    retweetAmount: 'retweetAmount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BuyAmountScalarFieldEnum = (typeof BuyAmountScalarFieldEnum)[keyof typeof BuyAmountScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    fid?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    displayName?: StringNullableFilter<"User"> | string | null
    pfp?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    wallet?: XOR<UserWalletNullableScalarRelationFilter, UserWalletWhereInput> | null
    linkedAccounts?: LinkedAccountListRelationFilter
    engagements?: EngagementListRelationFilter
    buyAmount?: XOR<BuyAmountNullableScalarRelationFilter, BuyAmountWhereInput> | null
    token?: XOR<TokenNullableScalarRelationFilter, TokenWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fid?: SortOrder
    username?: SortOrder
    displayName?: SortOrderInput | SortOrder
    pfp?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    wallet?: UserWalletOrderByWithRelationInput
    linkedAccounts?: LinkedAccountOrderByRelationAggregateInput
    engagements?: EngagementOrderByRelationAggregateInput
    buyAmount?: BuyAmountOrderByWithRelationInput
    token?: TokenOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    fid?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    displayName?: StringNullableFilter<"User"> | string | null
    pfp?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    wallet?: XOR<UserWalletNullableScalarRelationFilter, UserWalletWhereInput> | null
    linkedAccounts?: LinkedAccountListRelationFilter
    engagements?: EngagementListRelationFilter
    buyAmount?: XOR<BuyAmountNullableScalarRelationFilter, BuyAmountWhereInput> | null
    token?: XOR<TokenNullableScalarRelationFilter, TokenWhereInput> | null
  }, "id" | "fid">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fid?: SortOrder
    username?: SortOrder
    displayName?: SortOrderInput | SortOrder
    pfp?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    fid?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    displayName?: StringNullableWithAggregatesFilter<"User"> | string | null
    pfp?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserWalletWhereInput = {
    AND?: UserWalletWhereInput | UserWalletWhereInput[]
    OR?: UserWalletWhereInput[]
    NOT?: UserWalletWhereInput | UserWalletWhereInput[]
    id?: StringFilter<"UserWallet"> | string
    userId?: StringFilter<"UserWallet"> | string
    address?: StringFilter<"UserWallet"> | string
    encryptedKey?: StringFilter<"UserWallet"> | string
    iv?: StringFilter<"UserWallet"> | string
    authTag?: StringFilter<"UserWallet"> | string
    createdAt?: DateTimeFilter<"UserWallet"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserWalletOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    address?: SortOrder
    encryptedKey?: SortOrder
    iv?: SortOrder
    authTag?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserWalletWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    address?: string
    AND?: UserWalletWhereInput | UserWalletWhereInput[]
    OR?: UserWalletWhereInput[]
    NOT?: UserWalletWhereInput | UserWalletWhereInput[]
    encryptedKey?: StringFilter<"UserWallet"> | string
    iv?: StringFilter<"UserWallet"> | string
    authTag?: StringFilter<"UserWallet"> | string
    createdAt?: DateTimeFilter<"UserWallet"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId" | "address">

  export type UserWalletOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    address?: SortOrder
    encryptedKey?: SortOrder
    iv?: SortOrder
    authTag?: SortOrder
    createdAt?: SortOrder
    _count?: UserWalletCountOrderByAggregateInput
    _max?: UserWalletMaxOrderByAggregateInput
    _min?: UserWalletMinOrderByAggregateInput
  }

  export type UserWalletScalarWhereWithAggregatesInput = {
    AND?: UserWalletScalarWhereWithAggregatesInput | UserWalletScalarWhereWithAggregatesInput[]
    OR?: UserWalletScalarWhereWithAggregatesInput[]
    NOT?: UserWalletScalarWhereWithAggregatesInput | UserWalletScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserWallet"> | string
    userId?: StringWithAggregatesFilter<"UserWallet"> | string
    address?: StringWithAggregatesFilter<"UserWallet"> | string
    encryptedKey?: StringWithAggregatesFilter<"UserWallet"> | string
    iv?: StringWithAggregatesFilter<"UserWallet"> | string
    authTag?: StringWithAggregatesFilter<"UserWallet"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserWallet"> | Date | string
  }

  export type LinkedAccountWhereInput = {
    AND?: LinkedAccountWhereInput | LinkedAccountWhereInput[]
    OR?: LinkedAccountWhereInput[]
    NOT?: LinkedAccountWhereInput | LinkedAccountWhereInput[]
    id?: StringFilter<"LinkedAccount"> | string
    userId?: StringFilter<"LinkedAccount"> | string
    platform?: StringFilter<"LinkedAccount"> | string
    username?: StringFilter<"LinkedAccount"> | string
    accountId?: StringFilter<"LinkedAccount"> | string
    url?: StringFilter<"LinkedAccount"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LinkedAccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    platform?: SortOrder
    username?: SortOrder
    accountId?: SortOrder
    url?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type LinkedAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LinkedAccountWhereInput | LinkedAccountWhereInput[]
    OR?: LinkedAccountWhereInput[]
    NOT?: LinkedAccountWhereInput | LinkedAccountWhereInput[]
    userId?: StringFilter<"LinkedAccount"> | string
    platform?: StringFilter<"LinkedAccount"> | string
    username?: StringFilter<"LinkedAccount"> | string
    accountId?: StringFilter<"LinkedAccount"> | string
    url?: StringFilter<"LinkedAccount"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type LinkedAccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    platform?: SortOrder
    username?: SortOrder
    accountId?: SortOrder
    url?: SortOrder
    _count?: LinkedAccountCountOrderByAggregateInput
    _max?: LinkedAccountMaxOrderByAggregateInput
    _min?: LinkedAccountMinOrderByAggregateInput
  }

  export type LinkedAccountScalarWhereWithAggregatesInput = {
    AND?: LinkedAccountScalarWhereWithAggregatesInput | LinkedAccountScalarWhereWithAggregatesInput[]
    OR?: LinkedAccountScalarWhereWithAggregatesInput[]
    NOT?: LinkedAccountScalarWhereWithAggregatesInput | LinkedAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LinkedAccount"> | string
    userId?: StringWithAggregatesFilter<"LinkedAccount"> | string
    platform?: StringWithAggregatesFilter<"LinkedAccount"> | string
    username?: StringWithAggregatesFilter<"LinkedAccount"> | string
    accountId?: StringWithAggregatesFilter<"LinkedAccount"> | string
    url?: StringWithAggregatesFilter<"LinkedAccount"> | string
  }

  export type TokenWhereInput = {
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    address?: StringFilter<"Token"> | string
    name?: StringFilter<"Token"> | string
    symbol?: StringFilter<"Token"> | string
    decimals?: IntFilter<"Token"> | number
    totalSupply?: BigIntFilter<"Token"> | bigint | number
    feeTier?: BigIntFilter<"Token"> | bigint | number
    createdAt?: DateTimeFilter<"Token"> | Date | string
    userId?: StringFilter<"Token"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transactions?: TokenTransactionListRelationFilter
    Engagement?: EngagementListRelationFilter
  }

  export type TokenOrderByWithRelationInput = {
    address?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    decimals?: SortOrder
    totalSupply?: SortOrder
    feeTier?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    transactions?: TokenTransactionOrderByRelationAggregateInput
    Engagement?: EngagementOrderByRelationAggregateInput
  }

  export type TokenWhereUniqueInput = Prisma.AtLeast<{
    address?: string
    userId?: string
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    name?: StringFilter<"Token"> | string
    symbol?: StringFilter<"Token"> | string
    decimals?: IntFilter<"Token"> | number
    totalSupply?: BigIntFilter<"Token"> | bigint | number
    feeTier?: BigIntFilter<"Token"> | bigint | number
    createdAt?: DateTimeFilter<"Token"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transactions?: TokenTransactionListRelationFilter
    Engagement?: EngagementListRelationFilter
  }, "address" | "userId">

  export type TokenOrderByWithAggregationInput = {
    address?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    decimals?: SortOrder
    totalSupply?: SortOrder
    feeTier?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: TokenCountOrderByAggregateInput
    _avg?: TokenAvgOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
    _sum?: TokenSumOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    OR?: TokenScalarWhereWithAggregatesInput[]
    NOT?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    address?: StringWithAggregatesFilter<"Token"> | string
    name?: StringWithAggregatesFilter<"Token"> | string
    symbol?: StringWithAggregatesFilter<"Token"> | string
    decimals?: IntWithAggregatesFilter<"Token"> | number
    totalSupply?: BigIntWithAggregatesFilter<"Token"> | bigint | number
    feeTier?: BigIntWithAggregatesFilter<"Token"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    userId?: StringWithAggregatesFilter<"Token"> | string
  }

  export type EngagementWhereInput = {
    AND?: EngagementWhereInput | EngagementWhereInput[]
    OR?: EngagementWhereInput[]
    NOT?: EngagementWhereInput | EngagementWhereInput[]
    id?: StringFilter<"Engagement"> | string
    userId?: StringFilter<"Engagement"> | string
    tokenAddress?: StringFilter<"Engagement"> | string
    type?: StringFilter<"Engagement"> | string
    postId?: StringFilter<"Engagement"> | string
    triggeredAt?: DateTimeFilter<"Engagement"> | Date | string
    transactionid?: StringNullableFilter<"Engagement"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    token?: XOR<TokenScalarRelationFilter, TokenWhereInput>
    transaction?: XOR<TokenTransactionNullableScalarRelationFilter, TokenTransactionWhereInput> | null
  }

  export type EngagementOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenAddress?: SortOrder
    type?: SortOrder
    postId?: SortOrder
    triggeredAt?: SortOrder
    transactionid?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    token?: TokenOrderByWithRelationInput
    transaction?: TokenTransactionOrderByWithRelationInput
  }

  export type EngagementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EngagementWhereInput | EngagementWhereInput[]
    OR?: EngagementWhereInput[]
    NOT?: EngagementWhereInput | EngagementWhereInput[]
    userId?: StringFilter<"Engagement"> | string
    tokenAddress?: StringFilter<"Engagement"> | string
    type?: StringFilter<"Engagement"> | string
    postId?: StringFilter<"Engagement"> | string
    triggeredAt?: DateTimeFilter<"Engagement"> | Date | string
    transactionid?: StringNullableFilter<"Engagement"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    token?: XOR<TokenScalarRelationFilter, TokenWhereInput>
    transaction?: XOR<TokenTransactionNullableScalarRelationFilter, TokenTransactionWhereInput> | null
  }, "id">

  export type EngagementOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenAddress?: SortOrder
    type?: SortOrder
    postId?: SortOrder
    triggeredAt?: SortOrder
    transactionid?: SortOrderInput | SortOrder
    _count?: EngagementCountOrderByAggregateInput
    _max?: EngagementMaxOrderByAggregateInput
    _min?: EngagementMinOrderByAggregateInput
  }

  export type EngagementScalarWhereWithAggregatesInput = {
    AND?: EngagementScalarWhereWithAggregatesInput | EngagementScalarWhereWithAggregatesInput[]
    OR?: EngagementScalarWhereWithAggregatesInput[]
    NOT?: EngagementScalarWhereWithAggregatesInput | EngagementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Engagement"> | string
    userId?: StringWithAggregatesFilter<"Engagement"> | string
    tokenAddress?: StringWithAggregatesFilter<"Engagement"> | string
    type?: StringWithAggregatesFilter<"Engagement"> | string
    postId?: StringWithAggregatesFilter<"Engagement"> | string
    triggeredAt?: DateTimeWithAggregatesFilter<"Engagement"> | Date | string
    transactionid?: StringNullableWithAggregatesFilter<"Engagement"> | string | null
  }

  export type TokenTransactionWhereInput = {
    AND?: TokenTransactionWhereInput | TokenTransactionWhereInput[]
    OR?: TokenTransactionWhereInput[]
    NOT?: TokenTransactionWhereInput | TokenTransactionWhereInput[]
    id?: StringFilter<"TokenTransaction"> | string
    tokenAddress?: StringFilter<"TokenTransaction"> | string
    fromAddress?: StringFilter<"TokenTransaction"> | string
    toAddress?: StringFilter<"TokenTransaction"> | string
    amount?: DecimalFilter<"TokenTransaction"> | Decimal | DecimalJsLike | number | string
    txHash?: StringFilter<"TokenTransaction"> | string
    createdAt?: DateTimeFilter<"TokenTransaction"> | Date | string
    token?: XOR<TokenScalarRelationFilter, TokenWhereInput>
    Engagement?: EngagementListRelationFilter
  }

  export type TokenTransactionOrderByWithRelationInput = {
    id?: SortOrder
    tokenAddress?: SortOrder
    fromAddress?: SortOrder
    toAddress?: SortOrder
    amount?: SortOrder
    txHash?: SortOrder
    createdAt?: SortOrder
    token?: TokenOrderByWithRelationInput
    Engagement?: EngagementOrderByRelationAggregateInput
  }

  export type TokenTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TokenTransactionWhereInput | TokenTransactionWhereInput[]
    OR?: TokenTransactionWhereInput[]
    NOT?: TokenTransactionWhereInput | TokenTransactionWhereInput[]
    tokenAddress?: StringFilter<"TokenTransaction"> | string
    fromAddress?: StringFilter<"TokenTransaction"> | string
    toAddress?: StringFilter<"TokenTransaction"> | string
    amount?: DecimalFilter<"TokenTransaction"> | Decimal | DecimalJsLike | number | string
    txHash?: StringFilter<"TokenTransaction"> | string
    createdAt?: DateTimeFilter<"TokenTransaction"> | Date | string
    token?: XOR<TokenScalarRelationFilter, TokenWhereInput>
    Engagement?: EngagementListRelationFilter
  }, "id">

  export type TokenTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    tokenAddress?: SortOrder
    fromAddress?: SortOrder
    toAddress?: SortOrder
    amount?: SortOrder
    txHash?: SortOrder
    createdAt?: SortOrder
    _count?: TokenTransactionCountOrderByAggregateInput
    _avg?: TokenTransactionAvgOrderByAggregateInput
    _max?: TokenTransactionMaxOrderByAggregateInput
    _min?: TokenTransactionMinOrderByAggregateInput
    _sum?: TokenTransactionSumOrderByAggregateInput
  }

  export type TokenTransactionScalarWhereWithAggregatesInput = {
    AND?: TokenTransactionScalarWhereWithAggregatesInput | TokenTransactionScalarWhereWithAggregatesInput[]
    OR?: TokenTransactionScalarWhereWithAggregatesInput[]
    NOT?: TokenTransactionScalarWhereWithAggregatesInput | TokenTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TokenTransaction"> | string
    tokenAddress?: StringWithAggregatesFilter<"TokenTransaction"> | string
    fromAddress?: StringWithAggregatesFilter<"TokenTransaction"> | string
    toAddress?: StringWithAggregatesFilter<"TokenTransaction"> | string
    amount?: DecimalWithAggregatesFilter<"TokenTransaction"> | Decimal | DecimalJsLike | number | string
    txHash?: StringWithAggregatesFilter<"TokenTransaction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TokenTransaction"> | Date | string
  }

  export type BuyAmountWhereInput = {
    AND?: BuyAmountWhereInput | BuyAmountWhereInput[]
    OR?: BuyAmountWhereInput[]
    NOT?: BuyAmountWhereInput | BuyAmountWhereInput[]
    id?: StringFilter<"BuyAmount"> | string
    userId?: StringFilter<"BuyAmount"> | string
    likeAmount?: FloatFilter<"BuyAmount"> | number
    retweetAmount?: FloatFilter<"BuyAmount"> | number
    createdAt?: DateTimeFilter<"BuyAmount"> | Date | string
    updatedAt?: DateTimeFilter<"BuyAmount"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BuyAmountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    likeAmount?: SortOrder
    retweetAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BuyAmountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: BuyAmountWhereInput | BuyAmountWhereInput[]
    OR?: BuyAmountWhereInput[]
    NOT?: BuyAmountWhereInput | BuyAmountWhereInput[]
    likeAmount?: FloatFilter<"BuyAmount"> | number
    retweetAmount?: FloatFilter<"BuyAmount"> | number
    createdAt?: DateTimeFilter<"BuyAmount"> | Date | string
    updatedAt?: DateTimeFilter<"BuyAmount"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type BuyAmountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    likeAmount?: SortOrder
    retweetAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BuyAmountCountOrderByAggregateInput
    _avg?: BuyAmountAvgOrderByAggregateInput
    _max?: BuyAmountMaxOrderByAggregateInput
    _min?: BuyAmountMinOrderByAggregateInput
    _sum?: BuyAmountSumOrderByAggregateInput
  }

  export type BuyAmountScalarWhereWithAggregatesInput = {
    AND?: BuyAmountScalarWhereWithAggregatesInput | BuyAmountScalarWhereWithAggregatesInput[]
    OR?: BuyAmountScalarWhereWithAggregatesInput[]
    NOT?: BuyAmountScalarWhereWithAggregatesInput | BuyAmountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BuyAmount"> | string
    userId?: StringWithAggregatesFilter<"BuyAmount"> | string
    likeAmount?: FloatWithAggregatesFilter<"BuyAmount"> | number
    retweetAmount?: FloatWithAggregatesFilter<"BuyAmount"> | number
    createdAt?: DateTimeWithAggregatesFilter<"BuyAmount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BuyAmount"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    fid: number
    username: string
    displayName?: string | null
    pfp?: string | null
    createdAt?: Date | string
    wallet?: UserWalletCreateNestedOneWithoutUserInput
    linkedAccounts?: LinkedAccountCreateNestedManyWithoutUserInput
    engagements?: EngagementCreateNestedManyWithoutUserInput
    buyAmount?: BuyAmountCreateNestedOneWithoutUserInput
    token?: TokenCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fid: number
    username: string
    displayName?: string | null
    pfp?: string | null
    createdAt?: Date | string
    wallet?: UserWalletUncheckedCreateNestedOneWithoutUserInput
    linkedAccounts?: LinkedAccountUncheckedCreateNestedManyWithoutUserInput
    engagements?: EngagementUncheckedCreateNestedManyWithoutUserInput
    buyAmount?: BuyAmountUncheckedCreateNestedOneWithoutUserInput
    token?: TokenUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pfp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: UserWalletUpdateOneWithoutUserNestedInput
    linkedAccounts?: LinkedAccountUpdateManyWithoutUserNestedInput
    engagements?: EngagementUpdateManyWithoutUserNestedInput
    buyAmount?: BuyAmountUpdateOneWithoutUserNestedInput
    token?: TokenUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pfp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: UserWalletUncheckedUpdateOneWithoutUserNestedInput
    linkedAccounts?: LinkedAccountUncheckedUpdateManyWithoutUserNestedInput
    engagements?: EngagementUncheckedUpdateManyWithoutUserNestedInput
    buyAmount?: BuyAmountUncheckedUpdateOneWithoutUserNestedInput
    token?: TokenUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    fid: number
    username: string
    displayName?: string | null
    pfp?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pfp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pfp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWalletCreateInput = {
    id?: string
    address: string
    encryptedKey: string
    iv: string
    authTag: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWalletInput
  }

  export type UserWalletUncheckedCreateInput = {
    id?: string
    userId: string
    address: string
    encryptedKey: string
    iv: string
    authTag: string
    createdAt?: Date | string
  }

  export type UserWalletUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    encryptedKey?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
    authTag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWalletNestedInput
  }

  export type UserWalletUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    encryptedKey?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
    authTag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWalletCreateManyInput = {
    id?: string
    userId: string
    address: string
    encryptedKey: string
    iv: string
    authTag: string
    createdAt?: Date | string
  }

  export type UserWalletUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    encryptedKey?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
    authTag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWalletUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    encryptedKey?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
    authTag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkedAccountCreateInput = {
    id?: string
    platform: string
    username: string
    accountId: string
    url?: string
    user: UserCreateNestedOneWithoutLinkedAccountsInput
  }

  export type LinkedAccountUncheckedCreateInput = {
    id?: string
    userId: string
    platform: string
    username: string
    accountId: string
    url?: string
  }

  export type LinkedAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutLinkedAccountsNestedInput
  }

  export type LinkedAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type LinkedAccountCreateManyInput = {
    id?: string
    userId: string
    platform: string
    username: string
    accountId: string
    url?: string
  }

  export type LinkedAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type LinkedAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type TokenCreateInput = {
    address: string
    name: string
    symbol: string
    decimals: number
    totalSupply: bigint | number
    feeTier?: bigint | number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTokenInput
    transactions?: TokenTransactionCreateNestedManyWithoutTokenInput
    Engagement?: EngagementCreateNestedManyWithoutTokenInput
  }

  export type TokenUncheckedCreateInput = {
    address: string
    name: string
    symbol: string
    decimals: number
    totalSupply: bigint | number
    feeTier?: bigint | number
    createdAt?: Date | string
    userId: string
    transactions?: TokenTransactionUncheckedCreateNestedManyWithoutTokenInput
    Engagement?: EngagementUncheckedCreateNestedManyWithoutTokenInput
  }

  export type TokenUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    decimals?: IntFieldUpdateOperationsInput | number
    totalSupply?: BigIntFieldUpdateOperationsInput | bigint | number
    feeTier?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTokenNestedInput
    transactions?: TokenTransactionUpdateManyWithoutTokenNestedInput
    Engagement?: EngagementUpdateManyWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    decimals?: IntFieldUpdateOperationsInput | number
    totalSupply?: BigIntFieldUpdateOperationsInput | bigint | number
    feeTier?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    transactions?: TokenTransactionUncheckedUpdateManyWithoutTokenNestedInput
    Engagement?: EngagementUncheckedUpdateManyWithoutTokenNestedInput
  }

  export type TokenCreateManyInput = {
    address: string
    name: string
    symbol: string
    decimals: number
    totalSupply: bigint | number
    feeTier?: bigint | number
    createdAt?: Date | string
    userId: string
  }

  export type TokenUpdateManyMutationInput = {
    address?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    decimals?: IntFieldUpdateOperationsInput | number
    totalSupply?: BigIntFieldUpdateOperationsInput | bigint | number
    feeTier?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyInput = {
    address?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    decimals?: IntFieldUpdateOperationsInput | number
    totalSupply?: BigIntFieldUpdateOperationsInput | bigint | number
    feeTier?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EngagementCreateInput = {
    id?: string
    type: string
    postId: string
    triggeredAt?: Date | string
    user: UserCreateNestedOneWithoutEngagementsInput
    token: TokenCreateNestedOneWithoutEngagementInput
    transaction?: TokenTransactionCreateNestedOneWithoutEngagementInput
  }

  export type EngagementUncheckedCreateInput = {
    id?: string
    userId: string
    tokenAddress: string
    type: string
    postId: string
    triggeredAt?: Date | string
    transactionid?: string | null
  }

  export type EngagementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEngagementsNestedInput
    token?: TokenUpdateOneRequiredWithoutEngagementNestedInput
    transaction?: TokenTransactionUpdateOneWithoutEngagementNestedInput
  }

  export type EngagementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenAddress?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EngagementCreateManyInput = {
    id?: string
    userId: string
    tokenAddress: string
    type: string
    postId: string
    triggeredAt?: Date | string
    transactionid?: string | null
  }

  export type EngagementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EngagementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenAddress?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TokenTransactionCreateInput = {
    id?: string
    fromAddress: string
    toAddress: string
    amount: Decimal | DecimalJsLike | number | string
    txHash: string
    createdAt?: Date | string
    token: TokenCreateNestedOneWithoutTransactionsInput
    Engagement?: EngagementCreateNestedManyWithoutTransactionInput
  }

  export type TokenTransactionUncheckedCreateInput = {
    id?: string
    tokenAddress: string
    fromAddress: string
    toAddress: string
    amount: Decimal | DecimalJsLike | number | string
    txHash: string
    createdAt?: Date | string
    Engagement?: EngagementUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TokenTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromAddress?: StringFieldUpdateOperationsInput | string
    toAddress?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    txHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: TokenUpdateOneRequiredWithoutTransactionsNestedInput
    Engagement?: EngagementUpdateManyWithoutTransactionNestedInput
  }

  export type TokenTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenAddress?: StringFieldUpdateOperationsInput | string
    fromAddress?: StringFieldUpdateOperationsInput | string
    toAddress?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    txHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Engagement?: EngagementUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TokenTransactionCreateManyInput = {
    id?: string
    tokenAddress: string
    fromAddress: string
    toAddress: string
    amount: Decimal | DecimalJsLike | number | string
    txHash: string
    createdAt?: Date | string
  }

  export type TokenTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromAddress?: StringFieldUpdateOperationsInput | string
    toAddress?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    txHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenAddress?: StringFieldUpdateOperationsInput | string
    fromAddress?: StringFieldUpdateOperationsInput | string
    toAddress?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    txHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuyAmountCreateInput = {
    id?: string
    likeAmount?: number
    retweetAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBuyAmountInput
  }

  export type BuyAmountUncheckedCreateInput = {
    id?: string
    userId: string
    likeAmount?: number
    retweetAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BuyAmountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    likeAmount?: FloatFieldUpdateOperationsInput | number
    retweetAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBuyAmountNestedInput
  }

  export type BuyAmountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    likeAmount?: FloatFieldUpdateOperationsInput | number
    retweetAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuyAmountCreateManyInput = {
    id?: string
    userId: string
    likeAmount?: number
    retweetAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BuyAmountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    likeAmount?: FloatFieldUpdateOperationsInput | number
    retweetAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuyAmountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    likeAmount?: FloatFieldUpdateOperationsInput | number
    retweetAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserWalletNullableScalarRelationFilter = {
    is?: UserWalletWhereInput | null
    isNot?: UserWalletWhereInput | null
  }

  export type LinkedAccountListRelationFilter = {
    every?: LinkedAccountWhereInput
    some?: LinkedAccountWhereInput
    none?: LinkedAccountWhereInput
  }

  export type EngagementListRelationFilter = {
    every?: EngagementWhereInput
    some?: EngagementWhereInput
    none?: EngagementWhereInput
  }

  export type BuyAmountNullableScalarRelationFilter = {
    is?: BuyAmountWhereInput | null
    isNot?: BuyAmountWhereInput | null
  }

  export type TokenNullableScalarRelationFilter = {
    is?: TokenWhereInput | null
    isNot?: TokenWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LinkedAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EngagementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fid?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    pfp?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    fid?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fid?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    pfp?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fid?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    pfp?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    fid?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserWalletCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    address?: SortOrder
    encryptedKey?: SortOrder
    iv?: SortOrder
    authTag?: SortOrder
    createdAt?: SortOrder
  }

  export type UserWalletMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    address?: SortOrder
    encryptedKey?: SortOrder
    iv?: SortOrder
    authTag?: SortOrder
    createdAt?: SortOrder
  }

  export type UserWalletMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    address?: SortOrder
    encryptedKey?: SortOrder
    iv?: SortOrder
    authTag?: SortOrder
    createdAt?: SortOrder
  }

  export type LinkedAccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    platform?: SortOrder
    username?: SortOrder
    accountId?: SortOrder
    url?: SortOrder
  }

  export type LinkedAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    platform?: SortOrder
    username?: SortOrder
    accountId?: SortOrder
    url?: SortOrder
  }

  export type LinkedAccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    platform?: SortOrder
    username?: SortOrder
    accountId?: SortOrder
    url?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type TokenTransactionListRelationFilter = {
    every?: TokenTransactionWhereInput
    some?: TokenTransactionWhereInput
    none?: TokenTransactionWhereInput
  }

  export type TokenTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TokenCountOrderByAggregateInput = {
    address?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    decimals?: SortOrder
    totalSupply?: SortOrder
    feeTier?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type TokenAvgOrderByAggregateInput = {
    decimals?: SortOrder
    totalSupply?: SortOrder
    feeTier?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    address?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    decimals?: SortOrder
    totalSupply?: SortOrder
    feeTier?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    address?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    decimals?: SortOrder
    totalSupply?: SortOrder
    feeTier?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type TokenSumOrderByAggregateInput = {
    decimals?: SortOrder
    totalSupply?: SortOrder
    feeTier?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type TokenScalarRelationFilter = {
    is?: TokenWhereInput
    isNot?: TokenWhereInput
  }

  export type TokenTransactionNullableScalarRelationFilter = {
    is?: TokenTransactionWhereInput | null
    isNot?: TokenTransactionWhereInput | null
  }

  export type EngagementCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenAddress?: SortOrder
    type?: SortOrder
    postId?: SortOrder
    triggeredAt?: SortOrder
    transactionid?: SortOrder
  }

  export type EngagementMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenAddress?: SortOrder
    type?: SortOrder
    postId?: SortOrder
    triggeredAt?: SortOrder
    transactionid?: SortOrder
  }

  export type EngagementMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenAddress?: SortOrder
    type?: SortOrder
    postId?: SortOrder
    triggeredAt?: SortOrder
    transactionid?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type TokenTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    tokenAddress?: SortOrder
    fromAddress?: SortOrder
    toAddress?: SortOrder
    amount?: SortOrder
    txHash?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenTransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TokenTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    tokenAddress?: SortOrder
    fromAddress?: SortOrder
    toAddress?: SortOrder
    amount?: SortOrder
    txHash?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    tokenAddress?: SortOrder
    fromAddress?: SortOrder
    toAddress?: SortOrder
    amount?: SortOrder
    txHash?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenTransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BuyAmountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    likeAmount?: SortOrder
    retweetAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BuyAmountAvgOrderByAggregateInput = {
    likeAmount?: SortOrder
    retweetAmount?: SortOrder
  }

  export type BuyAmountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    likeAmount?: SortOrder
    retweetAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BuyAmountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    likeAmount?: SortOrder
    retweetAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BuyAmountSumOrderByAggregateInput = {
    likeAmount?: SortOrder
    retweetAmount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserWalletCreateNestedOneWithoutUserInput = {
    create?: XOR<UserWalletCreateWithoutUserInput, UserWalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserWalletCreateOrConnectWithoutUserInput
    connect?: UserWalletWhereUniqueInput
  }

  export type LinkedAccountCreateNestedManyWithoutUserInput = {
    create?: XOR<LinkedAccountCreateWithoutUserInput, LinkedAccountUncheckedCreateWithoutUserInput> | LinkedAccountCreateWithoutUserInput[] | LinkedAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LinkedAccountCreateOrConnectWithoutUserInput | LinkedAccountCreateOrConnectWithoutUserInput[]
    createMany?: LinkedAccountCreateManyUserInputEnvelope
    connect?: LinkedAccountWhereUniqueInput | LinkedAccountWhereUniqueInput[]
  }

  export type EngagementCreateNestedManyWithoutUserInput = {
    create?: XOR<EngagementCreateWithoutUserInput, EngagementUncheckedCreateWithoutUserInput> | EngagementCreateWithoutUserInput[] | EngagementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EngagementCreateOrConnectWithoutUserInput | EngagementCreateOrConnectWithoutUserInput[]
    createMany?: EngagementCreateManyUserInputEnvelope
    connect?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
  }

  export type BuyAmountCreateNestedOneWithoutUserInput = {
    create?: XOR<BuyAmountCreateWithoutUserInput, BuyAmountUncheckedCreateWithoutUserInput>
    connectOrCreate?: BuyAmountCreateOrConnectWithoutUserInput
    connect?: BuyAmountWhereUniqueInput
  }

  export type TokenCreateNestedOneWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput
    connect?: TokenWhereUniqueInput
  }

  export type UserWalletUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserWalletCreateWithoutUserInput, UserWalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserWalletCreateOrConnectWithoutUserInput
    connect?: UserWalletWhereUniqueInput
  }

  export type LinkedAccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LinkedAccountCreateWithoutUserInput, LinkedAccountUncheckedCreateWithoutUserInput> | LinkedAccountCreateWithoutUserInput[] | LinkedAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LinkedAccountCreateOrConnectWithoutUserInput | LinkedAccountCreateOrConnectWithoutUserInput[]
    createMany?: LinkedAccountCreateManyUserInputEnvelope
    connect?: LinkedAccountWhereUniqueInput | LinkedAccountWhereUniqueInput[]
  }

  export type EngagementUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EngagementCreateWithoutUserInput, EngagementUncheckedCreateWithoutUserInput> | EngagementCreateWithoutUserInput[] | EngagementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EngagementCreateOrConnectWithoutUserInput | EngagementCreateOrConnectWithoutUserInput[]
    createMany?: EngagementCreateManyUserInputEnvelope
    connect?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
  }

  export type BuyAmountUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<BuyAmountCreateWithoutUserInput, BuyAmountUncheckedCreateWithoutUserInput>
    connectOrCreate?: BuyAmountCreateOrConnectWithoutUserInput
    connect?: BuyAmountWhereUniqueInput
  }

  export type TokenUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput
    connect?: TokenWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserWalletUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserWalletCreateWithoutUserInput, UserWalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserWalletCreateOrConnectWithoutUserInput
    upsert?: UserWalletUpsertWithoutUserInput
    disconnect?: UserWalletWhereInput | boolean
    delete?: UserWalletWhereInput | boolean
    connect?: UserWalletWhereUniqueInput
    update?: XOR<XOR<UserWalletUpdateToOneWithWhereWithoutUserInput, UserWalletUpdateWithoutUserInput>, UserWalletUncheckedUpdateWithoutUserInput>
  }

  export type LinkedAccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<LinkedAccountCreateWithoutUserInput, LinkedAccountUncheckedCreateWithoutUserInput> | LinkedAccountCreateWithoutUserInput[] | LinkedAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LinkedAccountCreateOrConnectWithoutUserInput | LinkedAccountCreateOrConnectWithoutUserInput[]
    upsert?: LinkedAccountUpsertWithWhereUniqueWithoutUserInput | LinkedAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LinkedAccountCreateManyUserInputEnvelope
    set?: LinkedAccountWhereUniqueInput | LinkedAccountWhereUniqueInput[]
    disconnect?: LinkedAccountWhereUniqueInput | LinkedAccountWhereUniqueInput[]
    delete?: LinkedAccountWhereUniqueInput | LinkedAccountWhereUniqueInput[]
    connect?: LinkedAccountWhereUniqueInput | LinkedAccountWhereUniqueInput[]
    update?: LinkedAccountUpdateWithWhereUniqueWithoutUserInput | LinkedAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LinkedAccountUpdateManyWithWhereWithoutUserInput | LinkedAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LinkedAccountScalarWhereInput | LinkedAccountScalarWhereInput[]
  }

  export type EngagementUpdateManyWithoutUserNestedInput = {
    create?: XOR<EngagementCreateWithoutUserInput, EngagementUncheckedCreateWithoutUserInput> | EngagementCreateWithoutUserInput[] | EngagementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EngagementCreateOrConnectWithoutUserInput | EngagementCreateOrConnectWithoutUserInput[]
    upsert?: EngagementUpsertWithWhereUniqueWithoutUserInput | EngagementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EngagementCreateManyUserInputEnvelope
    set?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
    disconnect?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
    delete?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
    connect?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
    update?: EngagementUpdateWithWhereUniqueWithoutUserInput | EngagementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EngagementUpdateManyWithWhereWithoutUserInput | EngagementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EngagementScalarWhereInput | EngagementScalarWhereInput[]
  }

  export type BuyAmountUpdateOneWithoutUserNestedInput = {
    create?: XOR<BuyAmountCreateWithoutUserInput, BuyAmountUncheckedCreateWithoutUserInput>
    connectOrCreate?: BuyAmountCreateOrConnectWithoutUserInput
    upsert?: BuyAmountUpsertWithoutUserInput
    disconnect?: BuyAmountWhereInput | boolean
    delete?: BuyAmountWhereInput | boolean
    connect?: BuyAmountWhereUniqueInput
    update?: XOR<XOR<BuyAmountUpdateToOneWithWhereWithoutUserInput, BuyAmountUpdateWithoutUserInput>, BuyAmountUncheckedUpdateWithoutUserInput>
  }

  export type TokenUpdateOneWithoutUserNestedInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput
    upsert?: TokenUpsertWithoutUserInput
    disconnect?: TokenWhereInput | boolean
    delete?: TokenWhereInput | boolean
    connect?: TokenWhereUniqueInput
    update?: XOR<XOR<TokenUpdateToOneWithWhereWithoutUserInput, TokenUpdateWithoutUserInput>, TokenUncheckedUpdateWithoutUserInput>
  }

  export type UserWalletUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserWalletCreateWithoutUserInput, UserWalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserWalletCreateOrConnectWithoutUserInput
    upsert?: UserWalletUpsertWithoutUserInput
    disconnect?: UserWalletWhereInput | boolean
    delete?: UserWalletWhereInput | boolean
    connect?: UserWalletWhereUniqueInput
    update?: XOR<XOR<UserWalletUpdateToOneWithWhereWithoutUserInput, UserWalletUpdateWithoutUserInput>, UserWalletUncheckedUpdateWithoutUserInput>
  }

  export type LinkedAccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LinkedAccountCreateWithoutUserInput, LinkedAccountUncheckedCreateWithoutUserInput> | LinkedAccountCreateWithoutUserInput[] | LinkedAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LinkedAccountCreateOrConnectWithoutUserInput | LinkedAccountCreateOrConnectWithoutUserInput[]
    upsert?: LinkedAccountUpsertWithWhereUniqueWithoutUserInput | LinkedAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LinkedAccountCreateManyUserInputEnvelope
    set?: LinkedAccountWhereUniqueInput | LinkedAccountWhereUniqueInput[]
    disconnect?: LinkedAccountWhereUniqueInput | LinkedAccountWhereUniqueInput[]
    delete?: LinkedAccountWhereUniqueInput | LinkedAccountWhereUniqueInput[]
    connect?: LinkedAccountWhereUniqueInput | LinkedAccountWhereUniqueInput[]
    update?: LinkedAccountUpdateWithWhereUniqueWithoutUserInput | LinkedAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LinkedAccountUpdateManyWithWhereWithoutUserInput | LinkedAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LinkedAccountScalarWhereInput | LinkedAccountScalarWhereInput[]
  }

  export type EngagementUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EngagementCreateWithoutUserInput, EngagementUncheckedCreateWithoutUserInput> | EngagementCreateWithoutUserInput[] | EngagementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EngagementCreateOrConnectWithoutUserInput | EngagementCreateOrConnectWithoutUserInput[]
    upsert?: EngagementUpsertWithWhereUniqueWithoutUserInput | EngagementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EngagementCreateManyUserInputEnvelope
    set?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
    disconnect?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
    delete?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
    connect?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
    update?: EngagementUpdateWithWhereUniqueWithoutUserInput | EngagementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EngagementUpdateManyWithWhereWithoutUserInput | EngagementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EngagementScalarWhereInput | EngagementScalarWhereInput[]
  }

  export type BuyAmountUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<BuyAmountCreateWithoutUserInput, BuyAmountUncheckedCreateWithoutUserInput>
    connectOrCreate?: BuyAmountCreateOrConnectWithoutUserInput
    upsert?: BuyAmountUpsertWithoutUserInput
    disconnect?: BuyAmountWhereInput | boolean
    delete?: BuyAmountWhereInput | boolean
    connect?: BuyAmountWhereUniqueInput
    update?: XOR<XOR<BuyAmountUpdateToOneWithWhereWithoutUserInput, BuyAmountUpdateWithoutUserInput>, BuyAmountUncheckedUpdateWithoutUserInput>
  }

  export type TokenUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput
    upsert?: TokenUpsertWithoutUserInput
    disconnect?: TokenWhereInput | boolean
    delete?: TokenWhereInput | boolean
    connect?: TokenWhereUniqueInput
    update?: XOR<XOR<TokenUpdateToOneWithWhereWithoutUserInput, TokenUpdateWithoutUserInput>, TokenUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutWalletInput = {
    create?: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
    connectOrCreate?: UserCreateOrConnectWithoutWalletInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWalletNestedInput = {
    create?: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
    connectOrCreate?: UserCreateOrConnectWithoutWalletInput
    upsert?: UserUpsertWithoutWalletInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWalletInput, UserUpdateWithoutWalletInput>, UserUncheckedUpdateWithoutWalletInput>
  }

  export type UserCreateNestedOneWithoutLinkedAccountsInput = {
    create?: XOR<UserCreateWithoutLinkedAccountsInput, UserUncheckedCreateWithoutLinkedAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLinkedAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLinkedAccountsNestedInput = {
    create?: XOR<UserCreateWithoutLinkedAccountsInput, UserUncheckedCreateWithoutLinkedAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLinkedAccountsInput
    upsert?: UserUpsertWithoutLinkedAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLinkedAccountsInput, UserUpdateWithoutLinkedAccountsInput>, UserUncheckedUpdateWithoutLinkedAccountsInput>
  }

  export type UserCreateNestedOneWithoutTokenInput = {
    create?: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokenInput
    connect?: UserWhereUniqueInput
  }

  export type TokenTransactionCreateNestedManyWithoutTokenInput = {
    create?: XOR<TokenTransactionCreateWithoutTokenInput, TokenTransactionUncheckedCreateWithoutTokenInput> | TokenTransactionCreateWithoutTokenInput[] | TokenTransactionUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: TokenTransactionCreateOrConnectWithoutTokenInput | TokenTransactionCreateOrConnectWithoutTokenInput[]
    createMany?: TokenTransactionCreateManyTokenInputEnvelope
    connect?: TokenTransactionWhereUniqueInput | TokenTransactionWhereUniqueInput[]
  }

  export type EngagementCreateNestedManyWithoutTokenInput = {
    create?: XOR<EngagementCreateWithoutTokenInput, EngagementUncheckedCreateWithoutTokenInput> | EngagementCreateWithoutTokenInput[] | EngagementUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: EngagementCreateOrConnectWithoutTokenInput | EngagementCreateOrConnectWithoutTokenInput[]
    createMany?: EngagementCreateManyTokenInputEnvelope
    connect?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
  }

  export type TokenTransactionUncheckedCreateNestedManyWithoutTokenInput = {
    create?: XOR<TokenTransactionCreateWithoutTokenInput, TokenTransactionUncheckedCreateWithoutTokenInput> | TokenTransactionCreateWithoutTokenInput[] | TokenTransactionUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: TokenTransactionCreateOrConnectWithoutTokenInput | TokenTransactionCreateOrConnectWithoutTokenInput[]
    createMany?: TokenTransactionCreateManyTokenInputEnvelope
    connect?: TokenTransactionWhereUniqueInput | TokenTransactionWhereUniqueInput[]
  }

  export type EngagementUncheckedCreateNestedManyWithoutTokenInput = {
    create?: XOR<EngagementCreateWithoutTokenInput, EngagementUncheckedCreateWithoutTokenInput> | EngagementCreateWithoutTokenInput[] | EngagementUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: EngagementCreateOrConnectWithoutTokenInput | EngagementCreateOrConnectWithoutTokenInput[]
    createMany?: EngagementCreateManyTokenInputEnvelope
    connect?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type UserUpdateOneRequiredWithoutTokenNestedInput = {
    create?: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokenInput
    upsert?: UserUpsertWithoutTokenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTokenInput, UserUpdateWithoutTokenInput>, UserUncheckedUpdateWithoutTokenInput>
  }

  export type TokenTransactionUpdateManyWithoutTokenNestedInput = {
    create?: XOR<TokenTransactionCreateWithoutTokenInput, TokenTransactionUncheckedCreateWithoutTokenInput> | TokenTransactionCreateWithoutTokenInput[] | TokenTransactionUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: TokenTransactionCreateOrConnectWithoutTokenInput | TokenTransactionCreateOrConnectWithoutTokenInput[]
    upsert?: TokenTransactionUpsertWithWhereUniqueWithoutTokenInput | TokenTransactionUpsertWithWhereUniqueWithoutTokenInput[]
    createMany?: TokenTransactionCreateManyTokenInputEnvelope
    set?: TokenTransactionWhereUniqueInput | TokenTransactionWhereUniqueInput[]
    disconnect?: TokenTransactionWhereUniqueInput | TokenTransactionWhereUniqueInput[]
    delete?: TokenTransactionWhereUniqueInput | TokenTransactionWhereUniqueInput[]
    connect?: TokenTransactionWhereUniqueInput | TokenTransactionWhereUniqueInput[]
    update?: TokenTransactionUpdateWithWhereUniqueWithoutTokenInput | TokenTransactionUpdateWithWhereUniqueWithoutTokenInput[]
    updateMany?: TokenTransactionUpdateManyWithWhereWithoutTokenInput | TokenTransactionUpdateManyWithWhereWithoutTokenInput[]
    deleteMany?: TokenTransactionScalarWhereInput | TokenTransactionScalarWhereInput[]
  }

  export type EngagementUpdateManyWithoutTokenNestedInput = {
    create?: XOR<EngagementCreateWithoutTokenInput, EngagementUncheckedCreateWithoutTokenInput> | EngagementCreateWithoutTokenInput[] | EngagementUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: EngagementCreateOrConnectWithoutTokenInput | EngagementCreateOrConnectWithoutTokenInput[]
    upsert?: EngagementUpsertWithWhereUniqueWithoutTokenInput | EngagementUpsertWithWhereUniqueWithoutTokenInput[]
    createMany?: EngagementCreateManyTokenInputEnvelope
    set?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
    disconnect?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
    delete?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
    connect?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
    update?: EngagementUpdateWithWhereUniqueWithoutTokenInput | EngagementUpdateWithWhereUniqueWithoutTokenInput[]
    updateMany?: EngagementUpdateManyWithWhereWithoutTokenInput | EngagementUpdateManyWithWhereWithoutTokenInput[]
    deleteMany?: EngagementScalarWhereInput | EngagementScalarWhereInput[]
  }

  export type TokenTransactionUncheckedUpdateManyWithoutTokenNestedInput = {
    create?: XOR<TokenTransactionCreateWithoutTokenInput, TokenTransactionUncheckedCreateWithoutTokenInput> | TokenTransactionCreateWithoutTokenInput[] | TokenTransactionUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: TokenTransactionCreateOrConnectWithoutTokenInput | TokenTransactionCreateOrConnectWithoutTokenInput[]
    upsert?: TokenTransactionUpsertWithWhereUniqueWithoutTokenInput | TokenTransactionUpsertWithWhereUniqueWithoutTokenInput[]
    createMany?: TokenTransactionCreateManyTokenInputEnvelope
    set?: TokenTransactionWhereUniqueInput | TokenTransactionWhereUniqueInput[]
    disconnect?: TokenTransactionWhereUniqueInput | TokenTransactionWhereUniqueInput[]
    delete?: TokenTransactionWhereUniqueInput | TokenTransactionWhereUniqueInput[]
    connect?: TokenTransactionWhereUniqueInput | TokenTransactionWhereUniqueInput[]
    update?: TokenTransactionUpdateWithWhereUniqueWithoutTokenInput | TokenTransactionUpdateWithWhereUniqueWithoutTokenInput[]
    updateMany?: TokenTransactionUpdateManyWithWhereWithoutTokenInput | TokenTransactionUpdateManyWithWhereWithoutTokenInput[]
    deleteMany?: TokenTransactionScalarWhereInput | TokenTransactionScalarWhereInput[]
  }

  export type EngagementUncheckedUpdateManyWithoutTokenNestedInput = {
    create?: XOR<EngagementCreateWithoutTokenInput, EngagementUncheckedCreateWithoutTokenInput> | EngagementCreateWithoutTokenInput[] | EngagementUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: EngagementCreateOrConnectWithoutTokenInput | EngagementCreateOrConnectWithoutTokenInput[]
    upsert?: EngagementUpsertWithWhereUniqueWithoutTokenInput | EngagementUpsertWithWhereUniqueWithoutTokenInput[]
    createMany?: EngagementCreateManyTokenInputEnvelope
    set?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
    disconnect?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
    delete?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
    connect?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
    update?: EngagementUpdateWithWhereUniqueWithoutTokenInput | EngagementUpdateWithWhereUniqueWithoutTokenInput[]
    updateMany?: EngagementUpdateManyWithWhereWithoutTokenInput | EngagementUpdateManyWithWhereWithoutTokenInput[]
    deleteMany?: EngagementScalarWhereInput | EngagementScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEngagementsInput = {
    create?: XOR<UserCreateWithoutEngagementsInput, UserUncheckedCreateWithoutEngagementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEngagementsInput
    connect?: UserWhereUniqueInput
  }

  export type TokenCreateNestedOneWithoutEngagementInput = {
    create?: XOR<TokenCreateWithoutEngagementInput, TokenUncheckedCreateWithoutEngagementInput>
    connectOrCreate?: TokenCreateOrConnectWithoutEngagementInput
    connect?: TokenWhereUniqueInput
  }

  export type TokenTransactionCreateNestedOneWithoutEngagementInput = {
    create?: XOR<TokenTransactionCreateWithoutEngagementInput, TokenTransactionUncheckedCreateWithoutEngagementInput>
    connectOrCreate?: TokenTransactionCreateOrConnectWithoutEngagementInput
    connect?: TokenTransactionWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEngagementsNestedInput = {
    create?: XOR<UserCreateWithoutEngagementsInput, UserUncheckedCreateWithoutEngagementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEngagementsInput
    upsert?: UserUpsertWithoutEngagementsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEngagementsInput, UserUpdateWithoutEngagementsInput>, UserUncheckedUpdateWithoutEngagementsInput>
  }

  export type TokenUpdateOneRequiredWithoutEngagementNestedInput = {
    create?: XOR<TokenCreateWithoutEngagementInput, TokenUncheckedCreateWithoutEngagementInput>
    connectOrCreate?: TokenCreateOrConnectWithoutEngagementInput
    upsert?: TokenUpsertWithoutEngagementInput
    connect?: TokenWhereUniqueInput
    update?: XOR<XOR<TokenUpdateToOneWithWhereWithoutEngagementInput, TokenUpdateWithoutEngagementInput>, TokenUncheckedUpdateWithoutEngagementInput>
  }

  export type TokenTransactionUpdateOneWithoutEngagementNestedInput = {
    create?: XOR<TokenTransactionCreateWithoutEngagementInput, TokenTransactionUncheckedCreateWithoutEngagementInput>
    connectOrCreate?: TokenTransactionCreateOrConnectWithoutEngagementInput
    upsert?: TokenTransactionUpsertWithoutEngagementInput
    disconnect?: TokenTransactionWhereInput | boolean
    delete?: TokenTransactionWhereInput | boolean
    connect?: TokenTransactionWhereUniqueInput
    update?: XOR<XOR<TokenTransactionUpdateToOneWithWhereWithoutEngagementInput, TokenTransactionUpdateWithoutEngagementInput>, TokenTransactionUncheckedUpdateWithoutEngagementInput>
  }

  export type TokenCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<TokenCreateWithoutTransactionsInput, TokenUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: TokenCreateOrConnectWithoutTransactionsInput
    connect?: TokenWhereUniqueInput
  }

  export type EngagementCreateNestedManyWithoutTransactionInput = {
    create?: XOR<EngagementCreateWithoutTransactionInput, EngagementUncheckedCreateWithoutTransactionInput> | EngagementCreateWithoutTransactionInput[] | EngagementUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: EngagementCreateOrConnectWithoutTransactionInput | EngagementCreateOrConnectWithoutTransactionInput[]
    createMany?: EngagementCreateManyTransactionInputEnvelope
    connect?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
  }

  export type EngagementUncheckedCreateNestedManyWithoutTransactionInput = {
    create?: XOR<EngagementCreateWithoutTransactionInput, EngagementUncheckedCreateWithoutTransactionInput> | EngagementCreateWithoutTransactionInput[] | EngagementUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: EngagementCreateOrConnectWithoutTransactionInput | EngagementCreateOrConnectWithoutTransactionInput[]
    createMany?: EngagementCreateManyTransactionInputEnvelope
    connect?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type TokenUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<TokenCreateWithoutTransactionsInput, TokenUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: TokenCreateOrConnectWithoutTransactionsInput
    upsert?: TokenUpsertWithoutTransactionsInput
    connect?: TokenWhereUniqueInput
    update?: XOR<XOR<TokenUpdateToOneWithWhereWithoutTransactionsInput, TokenUpdateWithoutTransactionsInput>, TokenUncheckedUpdateWithoutTransactionsInput>
  }

  export type EngagementUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<EngagementCreateWithoutTransactionInput, EngagementUncheckedCreateWithoutTransactionInput> | EngagementCreateWithoutTransactionInput[] | EngagementUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: EngagementCreateOrConnectWithoutTransactionInput | EngagementCreateOrConnectWithoutTransactionInput[]
    upsert?: EngagementUpsertWithWhereUniqueWithoutTransactionInput | EngagementUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: EngagementCreateManyTransactionInputEnvelope
    set?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
    disconnect?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
    delete?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
    connect?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
    update?: EngagementUpdateWithWhereUniqueWithoutTransactionInput | EngagementUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: EngagementUpdateManyWithWhereWithoutTransactionInput | EngagementUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: EngagementScalarWhereInput | EngagementScalarWhereInput[]
  }

  export type EngagementUncheckedUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<EngagementCreateWithoutTransactionInput, EngagementUncheckedCreateWithoutTransactionInput> | EngagementCreateWithoutTransactionInput[] | EngagementUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: EngagementCreateOrConnectWithoutTransactionInput | EngagementCreateOrConnectWithoutTransactionInput[]
    upsert?: EngagementUpsertWithWhereUniqueWithoutTransactionInput | EngagementUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: EngagementCreateManyTransactionInputEnvelope
    set?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
    disconnect?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
    delete?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
    connect?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
    update?: EngagementUpdateWithWhereUniqueWithoutTransactionInput | EngagementUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: EngagementUpdateManyWithWhereWithoutTransactionInput | EngagementUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: EngagementScalarWhereInput | EngagementScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBuyAmountInput = {
    create?: XOR<UserCreateWithoutBuyAmountInput, UserUncheckedCreateWithoutBuyAmountInput>
    connectOrCreate?: UserCreateOrConnectWithoutBuyAmountInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutBuyAmountNestedInput = {
    create?: XOR<UserCreateWithoutBuyAmountInput, UserUncheckedCreateWithoutBuyAmountInput>
    connectOrCreate?: UserCreateOrConnectWithoutBuyAmountInput
    upsert?: UserUpsertWithoutBuyAmountInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBuyAmountInput, UserUpdateWithoutBuyAmountInput>, UserUncheckedUpdateWithoutBuyAmountInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserWalletCreateWithoutUserInput = {
    id?: string
    address: string
    encryptedKey: string
    iv: string
    authTag: string
    createdAt?: Date | string
  }

  export type UserWalletUncheckedCreateWithoutUserInput = {
    id?: string
    address: string
    encryptedKey: string
    iv: string
    authTag: string
    createdAt?: Date | string
  }

  export type UserWalletCreateOrConnectWithoutUserInput = {
    where: UserWalletWhereUniqueInput
    create: XOR<UserWalletCreateWithoutUserInput, UserWalletUncheckedCreateWithoutUserInput>
  }

  export type LinkedAccountCreateWithoutUserInput = {
    id?: string
    platform: string
    username: string
    accountId: string
    url?: string
  }

  export type LinkedAccountUncheckedCreateWithoutUserInput = {
    id?: string
    platform: string
    username: string
    accountId: string
    url?: string
  }

  export type LinkedAccountCreateOrConnectWithoutUserInput = {
    where: LinkedAccountWhereUniqueInput
    create: XOR<LinkedAccountCreateWithoutUserInput, LinkedAccountUncheckedCreateWithoutUserInput>
  }

  export type LinkedAccountCreateManyUserInputEnvelope = {
    data: LinkedAccountCreateManyUserInput | LinkedAccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EngagementCreateWithoutUserInput = {
    id?: string
    type: string
    postId: string
    triggeredAt?: Date | string
    token: TokenCreateNestedOneWithoutEngagementInput
    transaction?: TokenTransactionCreateNestedOneWithoutEngagementInput
  }

  export type EngagementUncheckedCreateWithoutUserInput = {
    id?: string
    tokenAddress: string
    type: string
    postId: string
    triggeredAt?: Date | string
    transactionid?: string | null
  }

  export type EngagementCreateOrConnectWithoutUserInput = {
    where: EngagementWhereUniqueInput
    create: XOR<EngagementCreateWithoutUserInput, EngagementUncheckedCreateWithoutUserInput>
  }

  export type EngagementCreateManyUserInputEnvelope = {
    data: EngagementCreateManyUserInput | EngagementCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BuyAmountCreateWithoutUserInput = {
    id?: string
    likeAmount?: number
    retweetAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BuyAmountUncheckedCreateWithoutUserInput = {
    id?: string
    likeAmount?: number
    retweetAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BuyAmountCreateOrConnectWithoutUserInput = {
    where: BuyAmountWhereUniqueInput
    create: XOR<BuyAmountCreateWithoutUserInput, BuyAmountUncheckedCreateWithoutUserInput>
  }

  export type TokenCreateWithoutUserInput = {
    address: string
    name: string
    symbol: string
    decimals: number
    totalSupply: bigint | number
    feeTier?: bigint | number
    createdAt?: Date | string
    transactions?: TokenTransactionCreateNestedManyWithoutTokenInput
    Engagement?: EngagementCreateNestedManyWithoutTokenInput
  }

  export type TokenUncheckedCreateWithoutUserInput = {
    address: string
    name: string
    symbol: string
    decimals: number
    totalSupply: bigint | number
    feeTier?: bigint | number
    createdAt?: Date | string
    transactions?: TokenTransactionUncheckedCreateNestedManyWithoutTokenInput
    Engagement?: EngagementUncheckedCreateNestedManyWithoutTokenInput
  }

  export type TokenCreateOrConnectWithoutUserInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type UserWalletUpsertWithoutUserInput = {
    update: XOR<UserWalletUpdateWithoutUserInput, UserWalletUncheckedUpdateWithoutUserInput>
    create: XOR<UserWalletCreateWithoutUserInput, UserWalletUncheckedCreateWithoutUserInput>
    where?: UserWalletWhereInput
  }

  export type UserWalletUpdateToOneWithWhereWithoutUserInput = {
    where?: UserWalletWhereInput
    data: XOR<UserWalletUpdateWithoutUserInput, UserWalletUncheckedUpdateWithoutUserInput>
  }

  export type UserWalletUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    encryptedKey?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
    authTag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWalletUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    encryptedKey?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
    authTag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkedAccountUpsertWithWhereUniqueWithoutUserInput = {
    where: LinkedAccountWhereUniqueInput
    update: XOR<LinkedAccountUpdateWithoutUserInput, LinkedAccountUncheckedUpdateWithoutUserInput>
    create: XOR<LinkedAccountCreateWithoutUserInput, LinkedAccountUncheckedCreateWithoutUserInput>
  }

  export type LinkedAccountUpdateWithWhereUniqueWithoutUserInput = {
    where: LinkedAccountWhereUniqueInput
    data: XOR<LinkedAccountUpdateWithoutUserInput, LinkedAccountUncheckedUpdateWithoutUserInput>
  }

  export type LinkedAccountUpdateManyWithWhereWithoutUserInput = {
    where: LinkedAccountScalarWhereInput
    data: XOR<LinkedAccountUpdateManyMutationInput, LinkedAccountUncheckedUpdateManyWithoutUserInput>
  }

  export type LinkedAccountScalarWhereInput = {
    AND?: LinkedAccountScalarWhereInput | LinkedAccountScalarWhereInput[]
    OR?: LinkedAccountScalarWhereInput[]
    NOT?: LinkedAccountScalarWhereInput | LinkedAccountScalarWhereInput[]
    id?: StringFilter<"LinkedAccount"> | string
    userId?: StringFilter<"LinkedAccount"> | string
    platform?: StringFilter<"LinkedAccount"> | string
    username?: StringFilter<"LinkedAccount"> | string
    accountId?: StringFilter<"LinkedAccount"> | string
    url?: StringFilter<"LinkedAccount"> | string
  }

  export type EngagementUpsertWithWhereUniqueWithoutUserInput = {
    where: EngagementWhereUniqueInput
    update: XOR<EngagementUpdateWithoutUserInput, EngagementUncheckedUpdateWithoutUserInput>
    create: XOR<EngagementCreateWithoutUserInput, EngagementUncheckedCreateWithoutUserInput>
  }

  export type EngagementUpdateWithWhereUniqueWithoutUserInput = {
    where: EngagementWhereUniqueInput
    data: XOR<EngagementUpdateWithoutUserInput, EngagementUncheckedUpdateWithoutUserInput>
  }

  export type EngagementUpdateManyWithWhereWithoutUserInput = {
    where: EngagementScalarWhereInput
    data: XOR<EngagementUpdateManyMutationInput, EngagementUncheckedUpdateManyWithoutUserInput>
  }

  export type EngagementScalarWhereInput = {
    AND?: EngagementScalarWhereInput | EngagementScalarWhereInput[]
    OR?: EngagementScalarWhereInput[]
    NOT?: EngagementScalarWhereInput | EngagementScalarWhereInput[]
    id?: StringFilter<"Engagement"> | string
    userId?: StringFilter<"Engagement"> | string
    tokenAddress?: StringFilter<"Engagement"> | string
    type?: StringFilter<"Engagement"> | string
    postId?: StringFilter<"Engagement"> | string
    triggeredAt?: DateTimeFilter<"Engagement"> | Date | string
    transactionid?: StringNullableFilter<"Engagement"> | string | null
  }

  export type BuyAmountUpsertWithoutUserInput = {
    update: XOR<BuyAmountUpdateWithoutUserInput, BuyAmountUncheckedUpdateWithoutUserInput>
    create: XOR<BuyAmountCreateWithoutUserInput, BuyAmountUncheckedCreateWithoutUserInput>
    where?: BuyAmountWhereInput
  }

  export type BuyAmountUpdateToOneWithWhereWithoutUserInput = {
    where?: BuyAmountWhereInput
    data: XOR<BuyAmountUpdateWithoutUserInput, BuyAmountUncheckedUpdateWithoutUserInput>
  }

  export type BuyAmountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    likeAmount?: FloatFieldUpdateOperationsInput | number
    retweetAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuyAmountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    likeAmount?: FloatFieldUpdateOperationsInput | number
    retweetAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUpsertWithoutUserInput = {
    update: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
    where?: TokenWhereInput
  }

  export type TokenUpdateToOneWithWhereWithoutUserInput = {
    where?: TokenWhereInput
    data: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
  }

  export type TokenUpdateWithoutUserInput = {
    address?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    decimals?: IntFieldUpdateOperationsInput | number
    totalSupply?: BigIntFieldUpdateOperationsInput | bigint | number
    feeTier?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TokenTransactionUpdateManyWithoutTokenNestedInput
    Engagement?: EngagementUpdateManyWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateWithoutUserInput = {
    address?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    decimals?: IntFieldUpdateOperationsInput | number
    totalSupply?: BigIntFieldUpdateOperationsInput | bigint | number
    feeTier?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TokenTransactionUncheckedUpdateManyWithoutTokenNestedInput
    Engagement?: EngagementUncheckedUpdateManyWithoutTokenNestedInput
  }

  export type UserCreateWithoutWalletInput = {
    id?: string
    fid: number
    username: string
    displayName?: string | null
    pfp?: string | null
    createdAt?: Date | string
    linkedAccounts?: LinkedAccountCreateNestedManyWithoutUserInput
    engagements?: EngagementCreateNestedManyWithoutUserInput
    buyAmount?: BuyAmountCreateNestedOneWithoutUserInput
    token?: TokenCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWalletInput = {
    id?: string
    fid: number
    username: string
    displayName?: string | null
    pfp?: string | null
    createdAt?: Date | string
    linkedAccounts?: LinkedAccountUncheckedCreateNestedManyWithoutUserInput
    engagements?: EngagementUncheckedCreateNestedManyWithoutUserInput
    buyAmount?: BuyAmountUncheckedCreateNestedOneWithoutUserInput
    token?: TokenUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWalletInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
  }

  export type UserUpsertWithoutWalletInput = {
    update: XOR<UserUpdateWithoutWalletInput, UserUncheckedUpdateWithoutWalletInput>
    create: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWalletInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWalletInput, UserUncheckedUpdateWithoutWalletInput>
  }

  export type UserUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pfp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linkedAccounts?: LinkedAccountUpdateManyWithoutUserNestedInput
    engagements?: EngagementUpdateManyWithoutUserNestedInput
    buyAmount?: BuyAmountUpdateOneWithoutUserNestedInput
    token?: TokenUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pfp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linkedAccounts?: LinkedAccountUncheckedUpdateManyWithoutUserNestedInput
    engagements?: EngagementUncheckedUpdateManyWithoutUserNestedInput
    buyAmount?: BuyAmountUncheckedUpdateOneWithoutUserNestedInput
    token?: TokenUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutLinkedAccountsInput = {
    id?: string
    fid: number
    username: string
    displayName?: string | null
    pfp?: string | null
    createdAt?: Date | string
    wallet?: UserWalletCreateNestedOneWithoutUserInput
    engagements?: EngagementCreateNestedManyWithoutUserInput
    buyAmount?: BuyAmountCreateNestedOneWithoutUserInput
    token?: TokenCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLinkedAccountsInput = {
    id?: string
    fid: number
    username: string
    displayName?: string | null
    pfp?: string | null
    createdAt?: Date | string
    wallet?: UserWalletUncheckedCreateNestedOneWithoutUserInput
    engagements?: EngagementUncheckedCreateNestedManyWithoutUserInput
    buyAmount?: BuyAmountUncheckedCreateNestedOneWithoutUserInput
    token?: TokenUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLinkedAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLinkedAccountsInput, UserUncheckedCreateWithoutLinkedAccountsInput>
  }

  export type UserUpsertWithoutLinkedAccountsInput = {
    update: XOR<UserUpdateWithoutLinkedAccountsInput, UserUncheckedUpdateWithoutLinkedAccountsInput>
    create: XOR<UserCreateWithoutLinkedAccountsInput, UserUncheckedCreateWithoutLinkedAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLinkedAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLinkedAccountsInput, UserUncheckedUpdateWithoutLinkedAccountsInput>
  }

  export type UserUpdateWithoutLinkedAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pfp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: UserWalletUpdateOneWithoutUserNestedInput
    engagements?: EngagementUpdateManyWithoutUserNestedInput
    buyAmount?: BuyAmountUpdateOneWithoutUserNestedInput
    token?: TokenUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLinkedAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pfp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: UserWalletUncheckedUpdateOneWithoutUserNestedInput
    engagements?: EngagementUncheckedUpdateManyWithoutUserNestedInput
    buyAmount?: BuyAmountUncheckedUpdateOneWithoutUserNestedInput
    token?: TokenUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutTokenInput = {
    id?: string
    fid: number
    username: string
    displayName?: string | null
    pfp?: string | null
    createdAt?: Date | string
    wallet?: UserWalletCreateNestedOneWithoutUserInput
    linkedAccounts?: LinkedAccountCreateNestedManyWithoutUserInput
    engagements?: EngagementCreateNestedManyWithoutUserInput
    buyAmount?: BuyAmountCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTokenInput = {
    id?: string
    fid: number
    username: string
    displayName?: string | null
    pfp?: string | null
    createdAt?: Date | string
    wallet?: UserWalletUncheckedCreateNestedOneWithoutUserInput
    linkedAccounts?: LinkedAccountUncheckedCreateNestedManyWithoutUserInput
    engagements?: EngagementUncheckedCreateNestedManyWithoutUserInput
    buyAmount?: BuyAmountUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
  }

  export type TokenTransactionCreateWithoutTokenInput = {
    id?: string
    fromAddress: string
    toAddress: string
    amount: Decimal | DecimalJsLike | number | string
    txHash: string
    createdAt?: Date | string
    Engagement?: EngagementCreateNestedManyWithoutTransactionInput
  }

  export type TokenTransactionUncheckedCreateWithoutTokenInput = {
    id?: string
    fromAddress: string
    toAddress: string
    amount: Decimal | DecimalJsLike | number | string
    txHash: string
    createdAt?: Date | string
    Engagement?: EngagementUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TokenTransactionCreateOrConnectWithoutTokenInput = {
    where: TokenTransactionWhereUniqueInput
    create: XOR<TokenTransactionCreateWithoutTokenInput, TokenTransactionUncheckedCreateWithoutTokenInput>
  }

  export type TokenTransactionCreateManyTokenInputEnvelope = {
    data: TokenTransactionCreateManyTokenInput | TokenTransactionCreateManyTokenInput[]
    skipDuplicates?: boolean
  }

  export type EngagementCreateWithoutTokenInput = {
    id?: string
    type: string
    postId: string
    triggeredAt?: Date | string
    user: UserCreateNestedOneWithoutEngagementsInput
    transaction?: TokenTransactionCreateNestedOneWithoutEngagementInput
  }

  export type EngagementUncheckedCreateWithoutTokenInput = {
    id?: string
    userId: string
    type: string
    postId: string
    triggeredAt?: Date | string
    transactionid?: string | null
  }

  export type EngagementCreateOrConnectWithoutTokenInput = {
    where: EngagementWhereUniqueInput
    create: XOR<EngagementCreateWithoutTokenInput, EngagementUncheckedCreateWithoutTokenInput>
  }

  export type EngagementCreateManyTokenInputEnvelope = {
    data: EngagementCreateManyTokenInput | EngagementCreateManyTokenInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTokenInput = {
    update: XOR<UserUpdateWithoutTokenInput, UserUncheckedUpdateWithoutTokenInput>
    create: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTokenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTokenInput, UserUncheckedUpdateWithoutTokenInput>
  }

  export type UserUpdateWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pfp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: UserWalletUpdateOneWithoutUserNestedInput
    linkedAccounts?: LinkedAccountUpdateManyWithoutUserNestedInput
    engagements?: EngagementUpdateManyWithoutUserNestedInput
    buyAmount?: BuyAmountUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pfp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: UserWalletUncheckedUpdateOneWithoutUserNestedInput
    linkedAccounts?: LinkedAccountUncheckedUpdateManyWithoutUserNestedInput
    engagements?: EngagementUncheckedUpdateManyWithoutUserNestedInput
    buyAmount?: BuyAmountUncheckedUpdateOneWithoutUserNestedInput
  }

  export type TokenTransactionUpsertWithWhereUniqueWithoutTokenInput = {
    where: TokenTransactionWhereUniqueInput
    update: XOR<TokenTransactionUpdateWithoutTokenInput, TokenTransactionUncheckedUpdateWithoutTokenInput>
    create: XOR<TokenTransactionCreateWithoutTokenInput, TokenTransactionUncheckedCreateWithoutTokenInput>
  }

  export type TokenTransactionUpdateWithWhereUniqueWithoutTokenInput = {
    where: TokenTransactionWhereUniqueInput
    data: XOR<TokenTransactionUpdateWithoutTokenInput, TokenTransactionUncheckedUpdateWithoutTokenInput>
  }

  export type TokenTransactionUpdateManyWithWhereWithoutTokenInput = {
    where: TokenTransactionScalarWhereInput
    data: XOR<TokenTransactionUpdateManyMutationInput, TokenTransactionUncheckedUpdateManyWithoutTokenInput>
  }

  export type TokenTransactionScalarWhereInput = {
    AND?: TokenTransactionScalarWhereInput | TokenTransactionScalarWhereInput[]
    OR?: TokenTransactionScalarWhereInput[]
    NOT?: TokenTransactionScalarWhereInput | TokenTransactionScalarWhereInput[]
    id?: StringFilter<"TokenTransaction"> | string
    tokenAddress?: StringFilter<"TokenTransaction"> | string
    fromAddress?: StringFilter<"TokenTransaction"> | string
    toAddress?: StringFilter<"TokenTransaction"> | string
    amount?: DecimalFilter<"TokenTransaction"> | Decimal | DecimalJsLike | number | string
    txHash?: StringFilter<"TokenTransaction"> | string
    createdAt?: DateTimeFilter<"TokenTransaction"> | Date | string
  }

  export type EngagementUpsertWithWhereUniqueWithoutTokenInput = {
    where: EngagementWhereUniqueInput
    update: XOR<EngagementUpdateWithoutTokenInput, EngagementUncheckedUpdateWithoutTokenInput>
    create: XOR<EngagementCreateWithoutTokenInput, EngagementUncheckedCreateWithoutTokenInput>
  }

  export type EngagementUpdateWithWhereUniqueWithoutTokenInput = {
    where: EngagementWhereUniqueInput
    data: XOR<EngagementUpdateWithoutTokenInput, EngagementUncheckedUpdateWithoutTokenInput>
  }

  export type EngagementUpdateManyWithWhereWithoutTokenInput = {
    where: EngagementScalarWhereInput
    data: XOR<EngagementUpdateManyMutationInput, EngagementUncheckedUpdateManyWithoutTokenInput>
  }

  export type UserCreateWithoutEngagementsInput = {
    id?: string
    fid: number
    username: string
    displayName?: string | null
    pfp?: string | null
    createdAt?: Date | string
    wallet?: UserWalletCreateNestedOneWithoutUserInput
    linkedAccounts?: LinkedAccountCreateNestedManyWithoutUserInput
    buyAmount?: BuyAmountCreateNestedOneWithoutUserInput
    token?: TokenCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEngagementsInput = {
    id?: string
    fid: number
    username: string
    displayName?: string | null
    pfp?: string | null
    createdAt?: Date | string
    wallet?: UserWalletUncheckedCreateNestedOneWithoutUserInput
    linkedAccounts?: LinkedAccountUncheckedCreateNestedManyWithoutUserInput
    buyAmount?: BuyAmountUncheckedCreateNestedOneWithoutUserInput
    token?: TokenUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEngagementsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEngagementsInput, UserUncheckedCreateWithoutEngagementsInput>
  }

  export type TokenCreateWithoutEngagementInput = {
    address: string
    name: string
    symbol: string
    decimals: number
    totalSupply: bigint | number
    feeTier?: bigint | number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTokenInput
    transactions?: TokenTransactionCreateNestedManyWithoutTokenInput
  }

  export type TokenUncheckedCreateWithoutEngagementInput = {
    address: string
    name: string
    symbol: string
    decimals: number
    totalSupply: bigint | number
    feeTier?: bigint | number
    createdAt?: Date | string
    userId: string
    transactions?: TokenTransactionUncheckedCreateNestedManyWithoutTokenInput
  }

  export type TokenCreateOrConnectWithoutEngagementInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutEngagementInput, TokenUncheckedCreateWithoutEngagementInput>
  }

  export type TokenTransactionCreateWithoutEngagementInput = {
    id?: string
    fromAddress: string
    toAddress: string
    amount: Decimal | DecimalJsLike | number | string
    txHash: string
    createdAt?: Date | string
    token: TokenCreateNestedOneWithoutTransactionsInput
  }

  export type TokenTransactionUncheckedCreateWithoutEngagementInput = {
    id?: string
    tokenAddress: string
    fromAddress: string
    toAddress: string
    amount: Decimal | DecimalJsLike | number | string
    txHash: string
    createdAt?: Date | string
  }

  export type TokenTransactionCreateOrConnectWithoutEngagementInput = {
    where: TokenTransactionWhereUniqueInput
    create: XOR<TokenTransactionCreateWithoutEngagementInput, TokenTransactionUncheckedCreateWithoutEngagementInput>
  }

  export type UserUpsertWithoutEngagementsInput = {
    update: XOR<UserUpdateWithoutEngagementsInput, UserUncheckedUpdateWithoutEngagementsInput>
    create: XOR<UserCreateWithoutEngagementsInput, UserUncheckedCreateWithoutEngagementsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEngagementsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEngagementsInput, UserUncheckedUpdateWithoutEngagementsInput>
  }

  export type UserUpdateWithoutEngagementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pfp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: UserWalletUpdateOneWithoutUserNestedInput
    linkedAccounts?: LinkedAccountUpdateManyWithoutUserNestedInput
    buyAmount?: BuyAmountUpdateOneWithoutUserNestedInput
    token?: TokenUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEngagementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pfp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: UserWalletUncheckedUpdateOneWithoutUserNestedInput
    linkedAccounts?: LinkedAccountUncheckedUpdateManyWithoutUserNestedInput
    buyAmount?: BuyAmountUncheckedUpdateOneWithoutUserNestedInput
    token?: TokenUncheckedUpdateOneWithoutUserNestedInput
  }

  export type TokenUpsertWithoutEngagementInput = {
    update: XOR<TokenUpdateWithoutEngagementInput, TokenUncheckedUpdateWithoutEngagementInput>
    create: XOR<TokenCreateWithoutEngagementInput, TokenUncheckedCreateWithoutEngagementInput>
    where?: TokenWhereInput
  }

  export type TokenUpdateToOneWithWhereWithoutEngagementInput = {
    where?: TokenWhereInput
    data: XOR<TokenUpdateWithoutEngagementInput, TokenUncheckedUpdateWithoutEngagementInput>
  }

  export type TokenUpdateWithoutEngagementInput = {
    address?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    decimals?: IntFieldUpdateOperationsInput | number
    totalSupply?: BigIntFieldUpdateOperationsInput | bigint | number
    feeTier?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTokenNestedInput
    transactions?: TokenTransactionUpdateManyWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateWithoutEngagementInput = {
    address?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    decimals?: IntFieldUpdateOperationsInput | number
    totalSupply?: BigIntFieldUpdateOperationsInput | bigint | number
    feeTier?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    transactions?: TokenTransactionUncheckedUpdateManyWithoutTokenNestedInput
  }

  export type TokenTransactionUpsertWithoutEngagementInput = {
    update: XOR<TokenTransactionUpdateWithoutEngagementInput, TokenTransactionUncheckedUpdateWithoutEngagementInput>
    create: XOR<TokenTransactionCreateWithoutEngagementInput, TokenTransactionUncheckedCreateWithoutEngagementInput>
    where?: TokenTransactionWhereInput
  }

  export type TokenTransactionUpdateToOneWithWhereWithoutEngagementInput = {
    where?: TokenTransactionWhereInput
    data: XOR<TokenTransactionUpdateWithoutEngagementInput, TokenTransactionUncheckedUpdateWithoutEngagementInput>
  }

  export type TokenTransactionUpdateWithoutEngagementInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromAddress?: StringFieldUpdateOperationsInput | string
    toAddress?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    txHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: TokenUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TokenTransactionUncheckedUpdateWithoutEngagementInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenAddress?: StringFieldUpdateOperationsInput | string
    fromAddress?: StringFieldUpdateOperationsInput | string
    toAddress?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    txHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateWithoutTransactionsInput = {
    address: string
    name: string
    symbol: string
    decimals: number
    totalSupply: bigint | number
    feeTier?: bigint | number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTokenInput
    Engagement?: EngagementCreateNestedManyWithoutTokenInput
  }

  export type TokenUncheckedCreateWithoutTransactionsInput = {
    address: string
    name: string
    symbol: string
    decimals: number
    totalSupply: bigint | number
    feeTier?: bigint | number
    createdAt?: Date | string
    userId: string
    Engagement?: EngagementUncheckedCreateNestedManyWithoutTokenInput
  }

  export type TokenCreateOrConnectWithoutTransactionsInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutTransactionsInput, TokenUncheckedCreateWithoutTransactionsInput>
  }

  export type EngagementCreateWithoutTransactionInput = {
    id?: string
    type: string
    postId: string
    triggeredAt?: Date | string
    user: UserCreateNestedOneWithoutEngagementsInput
    token: TokenCreateNestedOneWithoutEngagementInput
  }

  export type EngagementUncheckedCreateWithoutTransactionInput = {
    id?: string
    userId: string
    tokenAddress: string
    type: string
    postId: string
    triggeredAt?: Date | string
  }

  export type EngagementCreateOrConnectWithoutTransactionInput = {
    where: EngagementWhereUniqueInput
    create: XOR<EngagementCreateWithoutTransactionInput, EngagementUncheckedCreateWithoutTransactionInput>
  }

  export type EngagementCreateManyTransactionInputEnvelope = {
    data: EngagementCreateManyTransactionInput | EngagementCreateManyTransactionInput[]
    skipDuplicates?: boolean
  }

  export type TokenUpsertWithoutTransactionsInput = {
    update: XOR<TokenUpdateWithoutTransactionsInput, TokenUncheckedUpdateWithoutTransactionsInput>
    create: XOR<TokenCreateWithoutTransactionsInput, TokenUncheckedCreateWithoutTransactionsInput>
    where?: TokenWhereInput
  }

  export type TokenUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: TokenWhereInput
    data: XOR<TokenUpdateWithoutTransactionsInput, TokenUncheckedUpdateWithoutTransactionsInput>
  }

  export type TokenUpdateWithoutTransactionsInput = {
    address?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    decimals?: IntFieldUpdateOperationsInput | number
    totalSupply?: BigIntFieldUpdateOperationsInput | bigint | number
    feeTier?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTokenNestedInput
    Engagement?: EngagementUpdateManyWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateWithoutTransactionsInput = {
    address?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    decimals?: IntFieldUpdateOperationsInput | number
    totalSupply?: BigIntFieldUpdateOperationsInput | bigint | number
    feeTier?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    Engagement?: EngagementUncheckedUpdateManyWithoutTokenNestedInput
  }

  export type EngagementUpsertWithWhereUniqueWithoutTransactionInput = {
    where: EngagementWhereUniqueInput
    update: XOR<EngagementUpdateWithoutTransactionInput, EngagementUncheckedUpdateWithoutTransactionInput>
    create: XOR<EngagementCreateWithoutTransactionInput, EngagementUncheckedCreateWithoutTransactionInput>
  }

  export type EngagementUpdateWithWhereUniqueWithoutTransactionInput = {
    where: EngagementWhereUniqueInput
    data: XOR<EngagementUpdateWithoutTransactionInput, EngagementUncheckedUpdateWithoutTransactionInput>
  }

  export type EngagementUpdateManyWithWhereWithoutTransactionInput = {
    where: EngagementScalarWhereInput
    data: XOR<EngagementUpdateManyMutationInput, EngagementUncheckedUpdateManyWithoutTransactionInput>
  }

  export type UserCreateWithoutBuyAmountInput = {
    id?: string
    fid: number
    username: string
    displayName?: string | null
    pfp?: string | null
    createdAt?: Date | string
    wallet?: UserWalletCreateNestedOneWithoutUserInput
    linkedAccounts?: LinkedAccountCreateNestedManyWithoutUserInput
    engagements?: EngagementCreateNestedManyWithoutUserInput
    token?: TokenCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBuyAmountInput = {
    id?: string
    fid: number
    username: string
    displayName?: string | null
    pfp?: string | null
    createdAt?: Date | string
    wallet?: UserWalletUncheckedCreateNestedOneWithoutUserInput
    linkedAccounts?: LinkedAccountUncheckedCreateNestedManyWithoutUserInput
    engagements?: EngagementUncheckedCreateNestedManyWithoutUserInput
    token?: TokenUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBuyAmountInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBuyAmountInput, UserUncheckedCreateWithoutBuyAmountInput>
  }

  export type UserUpsertWithoutBuyAmountInput = {
    update: XOR<UserUpdateWithoutBuyAmountInput, UserUncheckedUpdateWithoutBuyAmountInput>
    create: XOR<UserCreateWithoutBuyAmountInput, UserUncheckedCreateWithoutBuyAmountInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBuyAmountInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBuyAmountInput, UserUncheckedUpdateWithoutBuyAmountInput>
  }

  export type UserUpdateWithoutBuyAmountInput = {
    id?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pfp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: UserWalletUpdateOneWithoutUserNestedInput
    linkedAccounts?: LinkedAccountUpdateManyWithoutUserNestedInput
    engagements?: EngagementUpdateManyWithoutUserNestedInput
    token?: TokenUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBuyAmountInput = {
    id?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pfp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: UserWalletUncheckedUpdateOneWithoutUserNestedInput
    linkedAccounts?: LinkedAccountUncheckedUpdateManyWithoutUserNestedInput
    engagements?: EngagementUncheckedUpdateManyWithoutUserNestedInput
    token?: TokenUncheckedUpdateOneWithoutUserNestedInput
  }

  export type LinkedAccountCreateManyUserInput = {
    id?: string
    platform: string
    username: string
    accountId: string
    url?: string
  }

  export type EngagementCreateManyUserInput = {
    id?: string
    tokenAddress: string
    type: string
    postId: string
    triggeredAt?: Date | string
    transactionid?: string | null
  }

  export type LinkedAccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type LinkedAccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type LinkedAccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type EngagementUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: TokenUpdateOneRequiredWithoutEngagementNestedInput
    transaction?: TokenTransactionUpdateOneWithoutEngagementNestedInput
  }

  export type EngagementUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenAddress?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EngagementUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenAddress?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TokenTransactionCreateManyTokenInput = {
    id?: string
    fromAddress: string
    toAddress: string
    amount: Decimal | DecimalJsLike | number | string
    txHash: string
    createdAt?: Date | string
  }

  export type EngagementCreateManyTokenInput = {
    id?: string
    userId: string
    type: string
    postId: string
    triggeredAt?: Date | string
    transactionid?: string | null
  }

  export type TokenTransactionUpdateWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromAddress?: StringFieldUpdateOperationsInput | string
    toAddress?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    txHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Engagement?: EngagementUpdateManyWithoutTransactionNestedInput
  }

  export type TokenTransactionUncheckedUpdateWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromAddress?: StringFieldUpdateOperationsInput | string
    toAddress?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    txHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Engagement?: EngagementUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TokenTransactionUncheckedUpdateManyWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromAddress?: StringFieldUpdateOperationsInput | string
    toAddress?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    txHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EngagementUpdateWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEngagementsNestedInput
    transaction?: TokenTransactionUpdateOneWithoutEngagementNestedInput
  }

  export type EngagementUncheckedUpdateWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EngagementUncheckedUpdateManyWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EngagementCreateManyTransactionInput = {
    id?: string
    userId: string
    tokenAddress: string
    type: string
    postId: string
    triggeredAt?: Date | string
  }

  export type EngagementUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEngagementsNestedInput
    token?: TokenUpdateOneRequiredWithoutEngagementNestedInput
  }

  export type EngagementUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenAddress?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EngagementUncheckedUpdateManyWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenAddress?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}