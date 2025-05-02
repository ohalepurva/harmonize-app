
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
 * Model Courses
 * 
 */
export type Courses = $Result.DefaultSelection<Prisma.$CoursesPayload>
/**
 * Model Enquiry
 * 
 */
export type Enquiry = $Result.DefaultSelection<Prisma.$EnquiryPayload>
/**
 * Model Lead_activity_logs
 * 
 */
export type Lead_activity_logs = $Result.DefaultSelection<Prisma.$Lead_activity_logsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  Male: 'Male',
  Female: 'Female',
  Other: 'Other'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const LeadStatus: {
  fresh: 'fresh',
  secondCall: 'secondCall',
  thirdCall: 'thirdCall',
  visiting: 'visiting',
  visited: 'visited',
  demoTaken: 'demoTaken',
  demoScheduled: 'demoScheduled',
  demoMissed: 'demoMissed',
  interested: 'interested',
  notInterested: 'notInterested',
  unqualified: 'unqualified',
  converted: 'converted'
};

export type LeadStatus = (typeof LeadStatus)[keyof typeof LeadStatus]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type LeadStatus = $Enums.LeadStatus

export const LeadStatus: typeof $Enums.LeadStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Courses
 * const courses = await prisma.courses.findMany()
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
   * // Fetch zero or more Courses
   * const courses = await prisma.courses.findMany()
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
   * `prisma.courses`: Exposes CRUD operations for the **Courses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.courses.findMany()
    * ```
    */
  get courses(): Prisma.CoursesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enquiry`: Exposes CRUD operations for the **Enquiry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enquiries
    * const enquiries = await prisma.enquiry.findMany()
    * ```
    */
  get enquiry(): Prisma.EnquiryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lead_activity_logs`: Exposes CRUD operations for the **Lead_activity_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lead_activity_logs
    * const lead_activity_logs = await prisma.lead_activity_logs.findMany()
    * ```
    */
  get lead_activity_logs(): Prisma.Lead_activity_logsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Courses: 'Courses',
    Enquiry: 'Enquiry',
    Lead_activity_logs: 'Lead_activity_logs'
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
      modelProps: "courses" | "enquiry" | "lead_activity_logs"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Courses: {
        payload: Prisma.$CoursesPayload<ExtArgs>
        fields: Prisma.CoursesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoursesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoursesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          findFirst: {
            args: Prisma.CoursesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoursesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          findMany: {
            args: Prisma.CoursesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>[]
          }
          create: {
            args: Prisma.CoursesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          createMany: {
            args: Prisma.CoursesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoursesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>[]
          }
          delete: {
            args: Prisma.CoursesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          update: {
            args: Prisma.CoursesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          deleteMany: {
            args: Prisma.CoursesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoursesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoursesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>[]
          }
          upsert: {
            args: Prisma.CoursesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          aggregate: {
            args: Prisma.CoursesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourses>
          }
          groupBy: {
            args: Prisma.CoursesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoursesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoursesCountArgs<ExtArgs>
            result: $Utils.Optional<CoursesCountAggregateOutputType> | number
          }
        }
      }
      Enquiry: {
        payload: Prisma.$EnquiryPayload<ExtArgs>
        fields: Prisma.EnquiryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnquiryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnquiryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          findFirst: {
            args: Prisma.EnquiryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnquiryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          findMany: {
            args: Prisma.EnquiryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>[]
          }
          create: {
            args: Prisma.EnquiryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          createMany: {
            args: Prisma.EnquiryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnquiryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>[]
          }
          delete: {
            args: Prisma.EnquiryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          update: {
            args: Prisma.EnquiryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          deleteMany: {
            args: Prisma.EnquiryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnquiryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnquiryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>[]
          }
          upsert: {
            args: Prisma.EnquiryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          aggregate: {
            args: Prisma.EnquiryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnquiry>
          }
          groupBy: {
            args: Prisma.EnquiryGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnquiryGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnquiryCountArgs<ExtArgs>
            result: $Utils.Optional<EnquiryCountAggregateOutputType> | number
          }
        }
      }
      Lead_activity_logs: {
        payload: Prisma.$Lead_activity_logsPayload<ExtArgs>
        fields: Prisma.Lead_activity_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Lead_activity_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Lead_activity_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Lead_activity_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Lead_activity_logsPayload>
          }
          findFirst: {
            args: Prisma.Lead_activity_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Lead_activity_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Lead_activity_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Lead_activity_logsPayload>
          }
          findMany: {
            args: Prisma.Lead_activity_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Lead_activity_logsPayload>[]
          }
          create: {
            args: Prisma.Lead_activity_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Lead_activity_logsPayload>
          }
          createMany: {
            args: Prisma.Lead_activity_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Lead_activity_logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Lead_activity_logsPayload>[]
          }
          delete: {
            args: Prisma.Lead_activity_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Lead_activity_logsPayload>
          }
          update: {
            args: Prisma.Lead_activity_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Lead_activity_logsPayload>
          }
          deleteMany: {
            args: Prisma.Lead_activity_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Lead_activity_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Lead_activity_logsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Lead_activity_logsPayload>[]
          }
          upsert: {
            args: Prisma.Lead_activity_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Lead_activity_logsPayload>
          }
          aggregate: {
            args: Prisma.Lead_activity_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLead_activity_logs>
          }
          groupBy: {
            args: Prisma.Lead_activity_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Lead_activity_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Lead_activity_logsCountArgs<ExtArgs>
            result: $Utils.Optional<Lead_activity_logsCountAggregateOutputType> | number
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
    courses?: CoursesOmit
    enquiry?: EnquiryOmit
    lead_activity_logs?: Lead_activity_logsOmit
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
   * Count Type EnquiryCountOutputType
   */

  export type EnquiryCountOutputType = {
    leadActivityLogs: number
  }

  export type EnquiryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leadActivityLogs?: boolean | EnquiryCountOutputTypeCountLeadActivityLogsArgs
  }

  // Custom InputTypes
  /**
   * EnquiryCountOutputType without action
   */
  export type EnquiryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnquiryCountOutputType
     */
    select?: EnquiryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EnquiryCountOutputType without action
   */
  export type EnquiryCountOutputTypeCountLeadActivityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Lead_activity_logsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Courses
   */

  export type AggregateCourses = {
    _count: CoursesCountAggregateOutputType | null
    _avg: CoursesAvgAggregateOutputType | null
    _sum: CoursesSumAggregateOutputType | null
    _min: CoursesMinAggregateOutputType | null
    _max: CoursesMaxAggregateOutputType | null
  }

  export type CoursesAvgAggregateOutputType = {
    courseId: number | null
  }

  export type CoursesSumAggregateOutputType = {
    courseId: number | null
  }

  export type CoursesMinAggregateOutputType = {
    courseId: number | null
    courseName: string | null
    description: string | null
    feesType: string | null
    planName: string | null
    duration: string | null
    price: string | null
    batchesPerWeek: string | null
    billingCycle: string | null
    batchType: string | null
    courseStatus: string | null
    createdBy: string | null
    preferredMode: string | null
    permissions: string | null
  }

  export type CoursesMaxAggregateOutputType = {
    courseId: number | null
    courseName: string | null
    description: string | null
    feesType: string | null
    planName: string | null
    duration: string | null
    price: string | null
    batchesPerWeek: string | null
    billingCycle: string | null
    batchType: string | null
    courseStatus: string | null
    createdBy: string | null
    preferredMode: string | null
    permissions: string | null
  }

  export type CoursesCountAggregateOutputType = {
    courseId: number
    courseName: number
    description: number
    feesType: number
    planName: number
    duration: number
    price: number
    batchesPerWeek: number
    billingCycle: number
    batchType: number
    courseStatus: number
    createdBy: number
    preferredMode: number
    permissions: number
    _all: number
  }


  export type CoursesAvgAggregateInputType = {
    courseId?: true
  }

  export type CoursesSumAggregateInputType = {
    courseId?: true
  }

  export type CoursesMinAggregateInputType = {
    courseId?: true
    courseName?: true
    description?: true
    feesType?: true
    planName?: true
    duration?: true
    price?: true
    batchesPerWeek?: true
    billingCycle?: true
    batchType?: true
    courseStatus?: true
    createdBy?: true
    preferredMode?: true
    permissions?: true
  }

  export type CoursesMaxAggregateInputType = {
    courseId?: true
    courseName?: true
    description?: true
    feesType?: true
    planName?: true
    duration?: true
    price?: true
    batchesPerWeek?: true
    billingCycle?: true
    batchType?: true
    courseStatus?: true
    createdBy?: true
    preferredMode?: true
    permissions?: true
  }

  export type CoursesCountAggregateInputType = {
    courseId?: true
    courseName?: true
    description?: true
    feesType?: true
    planName?: true
    duration?: true
    price?: true
    batchesPerWeek?: true
    billingCycle?: true
    batchType?: true
    courseStatus?: true
    createdBy?: true
    preferredMode?: true
    permissions?: true
    _all?: true
  }

  export type CoursesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to aggregate.
     */
    where?: CoursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CoursesOrderByWithRelationInput | CoursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CoursesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoursesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoursesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoursesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoursesMaxAggregateInputType
  }

  export type GetCoursesAggregateType<T extends CoursesAggregateArgs> = {
        [P in keyof T & keyof AggregateCourses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourses[P]>
      : GetScalarType<T[P], AggregateCourses[P]>
  }




  export type CoursesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoursesWhereInput
    orderBy?: CoursesOrderByWithAggregationInput | CoursesOrderByWithAggregationInput[]
    by: CoursesScalarFieldEnum[] | CoursesScalarFieldEnum
    having?: CoursesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoursesCountAggregateInputType | true
    _avg?: CoursesAvgAggregateInputType
    _sum?: CoursesSumAggregateInputType
    _min?: CoursesMinAggregateInputType
    _max?: CoursesMaxAggregateInputType
  }

  export type CoursesGroupByOutputType = {
    courseId: number
    courseName: string | null
    description: string | null
    feesType: string | null
    planName: string | null
    duration: string | null
    price: string | null
    batchesPerWeek: string | null
    billingCycle: string | null
    batchType: string | null
    courseStatus: string | null
    createdBy: string | null
    preferredMode: string | null
    permissions: string | null
    _count: CoursesCountAggregateOutputType | null
    _avg: CoursesAvgAggregateOutputType | null
    _sum: CoursesSumAggregateOutputType | null
    _min: CoursesMinAggregateOutputType | null
    _max: CoursesMaxAggregateOutputType | null
  }

  type GetCoursesGroupByPayload<T extends CoursesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoursesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoursesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoursesGroupByOutputType[P]>
            : GetScalarType<T[P], CoursesGroupByOutputType[P]>
        }
      >
    >


  export type CoursesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    courseId?: boolean
    courseName?: boolean
    description?: boolean
    feesType?: boolean
    planName?: boolean
    duration?: boolean
    price?: boolean
    batchesPerWeek?: boolean
    billingCycle?: boolean
    batchType?: boolean
    courseStatus?: boolean
    createdBy?: boolean
    preferredMode?: boolean
    permissions?: boolean
  }, ExtArgs["result"]["courses"]>

  export type CoursesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    courseId?: boolean
    courseName?: boolean
    description?: boolean
    feesType?: boolean
    planName?: boolean
    duration?: boolean
    price?: boolean
    batchesPerWeek?: boolean
    billingCycle?: boolean
    batchType?: boolean
    courseStatus?: boolean
    createdBy?: boolean
    preferredMode?: boolean
    permissions?: boolean
  }, ExtArgs["result"]["courses"]>

  export type CoursesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    courseId?: boolean
    courseName?: boolean
    description?: boolean
    feesType?: boolean
    planName?: boolean
    duration?: boolean
    price?: boolean
    batchesPerWeek?: boolean
    billingCycle?: boolean
    batchType?: boolean
    courseStatus?: boolean
    createdBy?: boolean
    preferredMode?: boolean
    permissions?: boolean
  }, ExtArgs["result"]["courses"]>

  export type CoursesSelectScalar = {
    courseId?: boolean
    courseName?: boolean
    description?: boolean
    feesType?: boolean
    planName?: boolean
    duration?: boolean
    price?: boolean
    batchesPerWeek?: boolean
    billingCycle?: boolean
    batchType?: boolean
    courseStatus?: boolean
    createdBy?: boolean
    preferredMode?: boolean
    permissions?: boolean
  }

  export type CoursesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"courseId" | "courseName" | "description" | "feesType" | "planName" | "duration" | "price" | "batchesPerWeek" | "billingCycle" | "batchType" | "courseStatus" | "createdBy" | "preferredMode" | "permissions", ExtArgs["result"]["courses"]>

  export type $CoursesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Courses"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      courseId: number
      courseName: string | null
      description: string | null
      feesType: string | null
      planName: string | null
      duration: string | null
      price: string | null
      batchesPerWeek: string | null
      billingCycle: string | null
      batchType: string | null
      courseStatus: string | null
      createdBy: string | null
      preferredMode: string | null
      permissions: string | null
    }, ExtArgs["result"]["courses"]>
    composites: {}
  }

  type CoursesGetPayload<S extends boolean | null | undefined | CoursesDefaultArgs> = $Result.GetResult<Prisma.$CoursesPayload, S>

  type CoursesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoursesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoursesCountAggregateInputType | true
    }

  export interface CoursesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Courses'], meta: { name: 'Courses' } }
    /**
     * Find zero or one Courses that matches the filter.
     * @param {CoursesFindUniqueArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoursesFindUniqueArgs>(args: SelectSubset<T, CoursesFindUniqueArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Courses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoursesFindUniqueOrThrowArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoursesFindUniqueOrThrowArgs>(args: SelectSubset<T, CoursesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesFindFirstArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoursesFindFirstArgs>(args?: SelectSubset<T, CoursesFindFirstArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Courses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesFindFirstOrThrowArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoursesFindFirstOrThrowArgs>(args?: SelectSubset<T, CoursesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.courses.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.courses.findMany({ take: 10 })
     * 
     * // Only select the `courseId`
     * const coursesWithCourseIdOnly = await prisma.courses.findMany({ select: { courseId: true } })
     * 
     */
    findMany<T extends CoursesFindManyArgs>(args?: SelectSubset<T, CoursesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Courses.
     * @param {CoursesCreateArgs} args - Arguments to create a Courses.
     * @example
     * // Create one Courses
     * const Courses = await prisma.courses.create({
     *   data: {
     *     // ... data to create a Courses
     *   }
     * })
     * 
     */
    create<T extends CoursesCreateArgs>(args: SelectSubset<T, CoursesCreateArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CoursesCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const courses = await prisma.courses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoursesCreateManyArgs>(args?: SelectSubset<T, CoursesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CoursesCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const courses = await prisma.courses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `courseId`
     * const coursesWithCourseIdOnly = await prisma.courses.createManyAndReturn({
     *   select: { courseId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoursesCreateManyAndReturnArgs>(args?: SelectSubset<T, CoursesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Courses.
     * @param {CoursesDeleteArgs} args - Arguments to delete one Courses.
     * @example
     * // Delete one Courses
     * const Courses = await prisma.courses.delete({
     *   where: {
     *     // ... filter to delete one Courses
     *   }
     * })
     * 
     */
    delete<T extends CoursesDeleteArgs>(args: SelectSubset<T, CoursesDeleteArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Courses.
     * @param {CoursesUpdateArgs} args - Arguments to update one Courses.
     * @example
     * // Update one Courses
     * const courses = await prisma.courses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoursesUpdateArgs>(args: SelectSubset<T, CoursesUpdateArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CoursesDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.courses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoursesDeleteManyArgs>(args?: SelectSubset<T, CoursesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const courses = await prisma.courses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoursesUpdateManyArgs>(args: SelectSubset<T, CoursesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CoursesUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const courses = await prisma.courses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `courseId`
     * const coursesWithCourseIdOnly = await prisma.courses.updateManyAndReturn({
     *   select: { courseId: true },
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
    updateManyAndReturn<T extends CoursesUpdateManyAndReturnArgs>(args: SelectSubset<T, CoursesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Courses.
     * @param {CoursesUpsertArgs} args - Arguments to update or create a Courses.
     * @example
     * // Update or create a Courses
     * const courses = await prisma.courses.upsert({
     *   create: {
     *     // ... data to create a Courses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Courses we want to update
     *   }
     * })
     */
    upsert<T extends CoursesUpsertArgs>(args: SelectSubset<T, CoursesUpsertArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.courses.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CoursesCountArgs>(
      args?: Subset<T, CoursesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoursesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CoursesAggregateArgs>(args: Subset<T, CoursesAggregateArgs>): Prisma.PrismaPromise<GetCoursesAggregateType<T>>

    /**
     * Group by Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesGroupByArgs} args - Group by arguments.
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
      T extends CoursesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoursesGroupByArgs['orderBy'] }
        : { orderBy?: CoursesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CoursesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoursesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Courses model
   */
  readonly fields: CoursesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Courses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoursesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Courses model
   */
  interface CoursesFieldRefs {
    readonly courseId: FieldRef<"Courses", 'Int'>
    readonly courseName: FieldRef<"Courses", 'String'>
    readonly description: FieldRef<"Courses", 'String'>
    readonly feesType: FieldRef<"Courses", 'String'>
    readonly planName: FieldRef<"Courses", 'String'>
    readonly duration: FieldRef<"Courses", 'String'>
    readonly price: FieldRef<"Courses", 'String'>
    readonly batchesPerWeek: FieldRef<"Courses", 'String'>
    readonly billingCycle: FieldRef<"Courses", 'String'>
    readonly batchType: FieldRef<"Courses", 'String'>
    readonly courseStatus: FieldRef<"Courses", 'String'>
    readonly createdBy: FieldRef<"Courses", 'String'>
    readonly preferredMode: FieldRef<"Courses", 'String'>
    readonly permissions: FieldRef<"Courses", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Courses findUnique
   */
  export type CoursesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where: CoursesWhereUniqueInput
  }

  /**
   * Courses findUniqueOrThrow
   */
  export type CoursesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where: CoursesWhereUniqueInput
  }

  /**
   * Courses findFirst
   */
  export type CoursesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CoursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CoursesOrderByWithRelationInput | CoursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CoursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * Courses findFirstOrThrow
   */
  export type CoursesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CoursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CoursesOrderByWithRelationInput | CoursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CoursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * Courses findMany
   */
  export type CoursesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CoursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CoursesOrderByWithRelationInput | CoursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CoursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * Courses create
   */
  export type CoursesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * The data needed to create a Courses.
     */
    data?: XOR<CoursesCreateInput, CoursesUncheckedCreateInput>
  }

  /**
   * Courses createMany
   */
  export type CoursesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CoursesCreateManyInput | CoursesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Courses createManyAndReturn
   */
  export type CoursesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CoursesCreateManyInput | CoursesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Courses update
   */
  export type CoursesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * The data needed to update a Courses.
     */
    data: XOR<CoursesUpdateInput, CoursesUncheckedUpdateInput>
    /**
     * Choose, which Courses to update.
     */
    where: CoursesWhereUniqueInput
  }

  /**
   * Courses updateMany
   */
  export type CoursesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CoursesUpdateManyMutationInput, CoursesUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CoursesWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Courses updateManyAndReturn
   */
  export type CoursesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CoursesUpdateManyMutationInput, CoursesUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CoursesWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Courses upsert
   */
  export type CoursesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * The filter to search for the Courses to update in case it exists.
     */
    where: CoursesWhereUniqueInput
    /**
     * In case the Courses found by the `where` argument doesn't exist, create a new Courses with this data.
     */
    create: XOR<CoursesCreateInput, CoursesUncheckedCreateInput>
    /**
     * In case the Courses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoursesUpdateInput, CoursesUncheckedUpdateInput>
  }

  /**
   * Courses delete
   */
  export type CoursesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Filter which Courses to delete.
     */
    where: CoursesWhereUniqueInput
  }

  /**
   * Courses deleteMany
   */
  export type CoursesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CoursesWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Courses without action
   */
  export type CoursesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
  }


  /**
   * Model Enquiry
   */

  export type AggregateEnquiry = {
    _count: EnquiryCountAggregateOutputType | null
    _avg: EnquiryAvgAggregateOutputType | null
    _sum: EnquirySumAggregateOutputType | null
    _min: EnquiryMinAggregateOutputType | null
    _max: EnquiryMaxAggregateOutputType | null
  }

  export type EnquiryAvgAggregateOutputType = {
    id: number | null
  }

  export type EnquirySumAggregateOutputType = {
    id: number | null
  }

  export type EnquiryMinAggregateOutputType = {
    id: number | null
    email: string | null
    first_name: string | null
    last_name: string | null
    phone_primary: string | null
    phone_secondary: string | null
    referred_by: string | null
    gender: $Enums.Gender | null
    status: $Enums.LeadStatus | null
    created_at: Date | null
    dob: string | null
    course_name: string | null
  }

  export type EnquiryMaxAggregateOutputType = {
    id: number | null
    email: string | null
    first_name: string | null
    last_name: string | null
    phone_primary: string | null
    phone_secondary: string | null
    referred_by: string | null
    gender: $Enums.Gender | null
    status: $Enums.LeadStatus | null
    created_at: Date | null
    dob: string | null
    course_name: string | null
  }

  export type EnquiryCountAggregateOutputType = {
    id: number
    email: number
    first_name: number
    last_name: number
    phone_primary: number
    phone_secondary: number
    referred_by: number
    gender: number
    status: number
    created_at: number
    dob: number
    course_name: number
    _all: number
  }


  export type EnquiryAvgAggregateInputType = {
    id?: true
  }

  export type EnquirySumAggregateInputType = {
    id?: true
  }

  export type EnquiryMinAggregateInputType = {
    id?: true
    email?: true
    first_name?: true
    last_name?: true
    phone_primary?: true
    phone_secondary?: true
    referred_by?: true
    gender?: true
    status?: true
    created_at?: true
    dob?: true
    course_name?: true
  }

  export type EnquiryMaxAggregateInputType = {
    id?: true
    email?: true
    first_name?: true
    last_name?: true
    phone_primary?: true
    phone_secondary?: true
    referred_by?: true
    gender?: true
    status?: true
    created_at?: true
    dob?: true
    course_name?: true
  }

  export type EnquiryCountAggregateInputType = {
    id?: true
    email?: true
    first_name?: true
    last_name?: true
    phone_primary?: true
    phone_secondary?: true
    referred_by?: true
    gender?: true
    status?: true
    created_at?: true
    dob?: true
    course_name?: true
    _all?: true
  }

  export type EnquiryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enquiry to aggregate.
     */
    where?: EnquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enquiries to fetch.
     */
    orderBy?: EnquiryOrderByWithRelationInput | EnquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enquiries
    **/
    _count?: true | EnquiryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnquiryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnquirySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnquiryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnquiryMaxAggregateInputType
  }

  export type GetEnquiryAggregateType<T extends EnquiryAggregateArgs> = {
        [P in keyof T & keyof AggregateEnquiry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnquiry[P]>
      : GetScalarType<T[P], AggregateEnquiry[P]>
  }




  export type EnquiryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnquiryWhereInput
    orderBy?: EnquiryOrderByWithAggregationInput | EnquiryOrderByWithAggregationInput[]
    by: EnquiryScalarFieldEnum[] | EnquiryScalarFieldEnum
    having?: EnquiryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnquiryCountAggregateInputType | true
    _avg?: EnquiryAvgAggregateInputType
    _sum?: EnquirySumAggregateInputType
    _min?: EnquiryMinAggregateInputType
    _max?: EnquiryMaxAggregateInputType
  }

  export type EnquiryGroupByOutputType = {
    id: number
    email: string
    first_name: string
    last_name: string
    phone_primary: string
    phone_secondary: string | null
    referred_by: string | null
    gender: $Enums.Gender
    status: $Enums.LeadStatus
    created_at: Date | null
    dob: string | null
    course_name: string | null
    _count: EnquiryCountAggregateOutputType | null
    _avg: EnquiryAvgAggregateOutputType | null
    _sum: EnquirySumAggregateOutputType | null
    _min: EnquiryMinAggregateOutputType | null
    _max: EnquiryMaxAggregateOutputType | null
  }

  type GetEnquiryGroupByPayload<T extends EnquiryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnquiryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnquiryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnquiryGroupByOutputType[P]>
            : GetScalarType<T[P], EnquiryGroupByOutputType[P]>
        }
      >
    >


  export type EnquirySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    phone_primary?: boolean
    phone_secondary?: boolean
    referred_by?: boolean
    gender?: boolean
    status?: boolean
    created_at?: boolean
    dob?: boolean
    course_name?: boolean
    leadActivityLogs?: boolean | Enquiry$leadActivityLogsArgs<ExtArgs>
    _count?: boolean | EnquiryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enquiry"]>

  export type EnquirySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    phone_primary?: boolean
    phone_secondary?: boolean
    referred_by?: boolean
    gender?: boolean
    status?: boolean
    created_at?: boolean
    dob?: boolean
    course_name?: boolean
  }, ExtArgs["result"]["enquiry"]>

  export type EnquirySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    phone_primary?: boolean
    phone_secondary?: boolean
    referred_by?: boolean
    gender?: boolean
    status?: boolean
    created_at?: boolean
    dob?: boolean
    course_name?: boolean
  }, ExtArgs["result"]["enquiry"]>

  export type EnquirySelectScalar = {
    id?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    phone_primary?: boolean
    phone_secondary?: boolean
    referred_by?: boolean
    gender?: boolean
    status?: boolean
    created_at?: boolean
    dob?: boolean
    course_name?: boolean
  }

  export type EnquiryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "first_name" | "last_name" | "phone_primary" | "phone_secondary" | "referred_by" | "gender" | "status" | "created_at" | "dob" | "course_name", ExtArgs["result"]["enquiry"]>
  export type EnquiryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leadActivityLogs?: boolean | Enquiry$leadActivityLogsArgs<ExtArgs>
    _count?: boolean | EnquiryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EnquiryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EnquiryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EnquiryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Enquiry"
    objects: {
      leadActivityLogs: Prisma.$Lead_activity_logsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      first_name: string
      last_name: string
      phone_primary: string
      phone_secondary: string | null
      referred_by: string | null
      gender: $Enums.Gender
      status: $Enums.LeadStatus
      created_at: Date | null
      dob: string | null
      course_name: string | null
    }, ExtArgs["result"]["enquiry"]>
    composites: {}
  }

  type EnquiryGetPayload<S extends boolean | null | undefined | EnquiryDefaultArgs> = $Result.GetResult<Prisma.$EnquiryPayload, S>

  type EnquiryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnquiryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnquiryCountAggregateInputType | true
    }

  export interface EnquiryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Enquiry'], meta: { name: 'Enquiry' } }
    /**
     * Find zero or one Enquiry that matches the filter.
     * @param {EnquiryFindUniqueArgs} args - Arguments to find a Enquiry
     * @example
     * // Get one Enquiry
     * const enquiry = await prisma.enquiry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnquiryFindUniqueArgs>(args: SelectSubset<T, EnquiryFindUniqueArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enquiry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnquiryFindUniqueOrThrowArgs} args - Arguments to find a Enquiry
     * @example
     * // Get one Enquiry
     * const enquiry = await prisma.enquiry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnquiryFindUniqueOrThrowArgs>(args: SelectSubset<T, EnquiryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enquiry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryFindFirstArgs} args - Arguments to find a Enquiry
     * @example
     * // Get one Enquiry
     * const enquiry = await prisma.enquiry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnquiryFindFirstArgs>(args?: SelectSubset<T, EnquiryFindFirstArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enquiry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryFindFirstOrThrowArgs} args - Arguments to find a Enquiry
     * @example
     * // Get one Enquiry
     * const enquiry = await prisma.enquiry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnquiryFindFirstOrThrowArgs>(args?: SelectSubset<T, EnquiryFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enquiries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enquiries
     * const enquiries = await prisma.enquiry.findMany()
     * 
     * // Get first 10 Enquiries
     * const enquiries = await prisma.enquiry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enquiryWithIdOnly = await prisma.enquiry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnquiryFindManyArgs>(args?: SelectSubset<T, EnquiryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enquiry.
     * @param {EnquiryCreateArgs} args - Arguments to create a Enquiry.
     * @example
     * // Create one Enquiry
     * const Enquiry = await prisma.enquiry.create({
     *   data: {
     *     // ... data to create a Enquiry
     *   }
     * })
     * 
     */
    create<T extends EnquiryCreateArgs>(args: SelectSubset<T, EnquiryCreateArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enquiries.
     * @param {EnquiryCreateManyArgs} args - Arguments to create many Enquiries.
     * @example
     * // Create many Enquiries
     * const enquiry = await prisma.enquiry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnquiryCreateManyArgs>(args?: SelectSubset<T, EnquiryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enquiries and returns the data saved in the database.
     * @param {EnquiryCreateManyAndReturnArgs} args - Arguments to create many Enquiries.
     * @example
     * // Create many Enquiries
     * const enquiry = await prisma.enquiry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enquiries and only return the `id`
     * const enquiryWithIdOnly = await prisma.enquiry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnquiryCreateManyAndReturnArgs>(args?: SelectSubset<T, EnquiryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Enquiry.
     * @param {EnquiryDeleteArgs} args - Arguments to delete one Enquiry.
     * @example
     * // Delete one Enquiry
     * const Enquiry = await prisma.enquiry.delete({
     *   where: {
     *     // ... filter to delete one Enquiry
     *   }
     * })
     * 
     */
    delete<T extends EnquiryDeleteArgs>(args: SelectSubset<T, EnquiryDeleteArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enquiry.
     * @param {EnquiryUpdateArgs} args - Arguments to update one Enquiry.
     * @example
     * // Update one Enquiry
     * const enquiry = await prisma.enquiry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnquiryUpdateArgs>(args: SelectSubset<T, EnquiryUpdateArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enquiries.
     * @param {EnquiryDeleteManyArgs} args - Arguments to filter Enquiries to delete.
     * @example
     * // Delete a few Enquiries
     * const { count } = await prisma.enquiry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnquiryDeleteManyArgs>(args?: SelectSubset<T, EnquiryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enquiries
     * const enquiry = await prisma.enquiry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnquiryUpdateManyArgs>(args: SelectSubset<T, EnquiryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enquiries and returns the data updated in the database.
     * @param {EnquiryUpdateManyAndReturnArgs} args - Arguments to update many Enquiries.
     * @example
     * // Update many Enquiries
     * const enquiry = await prisma.enquiry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enquiries and only return the `id`
     * const enquiryWithIdOnly = await prisma.enquiry.updateManyAndReturn({
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
    updateManyAndReturn<T extends EnquiryUpdateManyAndReturnArgs>(args: SelectSubset<T, EnquiryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Enquiry.
     * @param {EnquiryUpsertArgs} args - Arguments to update or create a Enquiry.
     * @example
     * // Update or create a Enquiry
     * const enquiry = await prisma.enquiry.upsert({
     *   create: {
     *     // ... data to create a Enquiry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enquiry we want to update
     *   }
     * })
     */
    upsert<T extends EnquiryUpsertArgs>(args: SelectSubset<T, EnquiryUpsertArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryCountArgs} args - Arguments to filter Enquiries to count.
     * @example
     * // Count the number of Enquiries
     * const count = await prisma.enquiry.count({
     *   where: {
     *     // ... the filter for the Enquiries we want to count
     *   }
     * })
    **/
    count<T extends EnquiryCountArgs>(
      args?: Subset<T, EnquiryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnquiryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnquiryAggregateArgs>(args: Subset<T, EnquiryAggregateArgs>): Prisma.PrismaPromise<GetEnquiryAggregateType<T>>

    /**
     * Group by Enquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryGroupByArgs} args - Group by arguments.
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
      T extends EnquiryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnquiryGroupByArgs['orderBy'] }
        : { orderBy?: EnquiryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnquiryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnquiryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Enquiry model
   */
  readonly fields: EnquiryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Enquiry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnquiryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leadActivityLogs<T extends Enquiry$leadActivityLogsArgs<ExtArgs> = {}>(args?: Subset<T, Enquiry$leadActivityLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Lead_activity_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Enquiry model
   */
  interface EnquiryFieldRefs {
    readonly id: FieldRef<"Enquiry", 'Int'>
    readonly email: FieldRef<"Enquiry", 'String'>
    readonly first_name: FieldRef<"Enquiry", 'String'>
    readonly last_name: FieldRef<"Enquiry", 'String'>
    readonly phone_primary: FieldRef<"Enquiry", 'String'>
    readonly phone_secondary: FieldRef<"Enquiry", 'String'>
    readonly referred_by: FieldRef<"Enquiry", 'String'>
    readonly gender: FieldRef<"Enquiry", 'Gender'>
    readonly status: FieldRef<"Enquiry", 'LeadStatus'>
    readonly created_at: FieldRef<"Enquiry", 'DateTime'>
    readonly dob: FieldRef<"Enquiry", 'String'>
    readonly course_name: FieldRef<"Enquiry", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Enquiry findUnique
   */
  export type EnquiryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * Filter, which Enquiry to fetch.
     */
    where: EnquiryWhereUniqueInput
  }

  /**
   * Enquiry findUniqueOrThrow
   */
  export type EnquiryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * Filter, which Enquiry to fetch.
     */
    where: EnquiryWhereUniqueInput
  }

  /**
   * Enquiry findFirst
   */
  export type EnquiryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * Filter, which Enquiry to fetch.
     */
    where?: EnquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enquiries to fetch.
     */
    orderBy?: EnquiryOrderByWithRelationInput | EnquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enquiries.
     */
    cursor?: EnquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enquiries.
     */
    distinct?: EnquiryScalarFieldEnum | EnquiryScalarFieldEnum[]
  }

  /**
   * Enquiry findFirstOrThrow
   */
  export type EnquiryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * Filter, which Enquiry to fetch.
     */
    where?: EnquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enquiries to fetch.
     */
    orderBy?: EnquiryOrderByWithRelationInput | EnquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enquiries.
     */
    cursor?: EnquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enquiries.
     */
    distinct?: EnquiryScalarFieldEnum | EnquiryScalarFieldEnum[]
  }

  /**
   * Enquiry findMany
   */
  export type EnquiryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * Filter, which Enquiries to fetch.
     */
    where?: EnquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enquiries to fetch.
     */
    orderBy?: EnquiryOrderByWithRelationInput | EnquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enquiries.
     */
    cursor?: EnquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enquiries.
     */
    skip?: number
    distinct?: EnquiryScalarFieldEnum | EnquiryScalarFieldEnum[]
  }

  /**
   * Enquiry create
   */
  export type EnquiryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * The data needed to create a Enquiry.
     */
    data: XOR<EnquiryCreateInput, EnquiryUncheckedCreateInput>
  }

  /**
   * Enquiry createMany
   */
  export type EnquiryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enquiries.
     */
    data: EnquiryCreateManyInput | EnquiryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Enquiry createManyAndReturn
   */
  export type EnquiryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * The data used to create many Enquiries.
     */
    data: EnquiryCreateManyInput | EnquiryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Enquiry update
   */
  export type EnquiryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * The data needed to update a Enquiry.
     */
    data: XOR<EnquiryUpdateInput, EnquiryUncheckedUpdateInput>
    /**
     * Choose, which Enquiry to update.
     */
    where: EnquiryWhereUniqueInput
  }

  /**
   * Enquiry updateMany
   */
  export type EnquiryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enquiries.
     */
    data: XOR<EnquiryUpdateManyMutationInput, EnquiryUncheckedUpdateManyInput>
    /**
     * Filter which Enquiries to update
     */
    where?: EnquiryWhereInput
    /**
     * Limit how many Enquiries to update.
     */
    limit?: number
  }

  /**
   * Enquiry updateManyAndReturn
   */
  export type EnquiryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * The data used to update Enquiries.
     */
    data: XOR<EnquiryUpdateManyMutationInput, EnquiryUncheckedUpdateManyInput>
    /**
     * Filter which Enquiries to update
     */
    where?: EnquiryWhereInput
    /**
     * Limit how many Enquiries to update.
     */
    limit?: number
  }

  /**
   * Enquiry upsert
   */
  export type EnquiryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * The filter to search for the Enquiry to update in case it exists.
     */
    where: EnquiryWhereUniqueInput
    /**
     * In case the Enquiry found by the `where` argument doesn't exist, create a new Enquiry with this data.
     */
    create: XOR<EnquiryCreateInput, EnquiryUncheckedCreateInput>
    /**
     * In case the Enquiry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnquiryUpdateInput, EnquiryUncheckedUpdateInput>
  }

  /**
   * Enquiry delete
   */
  export type EnquiryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * Filter which Enquiry to delete.
     */
    where: EnquiryWhereUniqueInput
  }

  /**
   * Enquiry deleteMany
   */
  export type EnquiryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enquiries to delete
     */
    where?: EnquiryWhereInput
    /**
     * Limit how many Enquiries to delete.
     */
    limit?: number
  }

  /**
   * Enquiry.leadActivityLogs
   */
  export type Enquiry$leadActivityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead_activity_logs
     */
    select?: Lead_activity_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead_activity_logs
     */
    omit?: Lead_activity_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Lead_activity_logsInclude<ExtArgs> | null
    where?: Lead_activity_logsWhereInput
    orderBy?: Lead_activity_logsOrderByWithRelationInput | Lead_activity_logsOrderByWithRelationInput[]
    cursor?: Lead_activity_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Lead_activity_logsScalarFieldEnum | Lead_activity_logsScalarFieldEnum[]
  }

  /**
   * Enquiry without action
   */
  export type EnquiryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
  }


  /**
   * Model Lead_activity_logs
   */

  export type AggregateLead_activity_logs = {
    _count: Lead_activity_logsCountAggregateOutputType | null
    _avg: Lead_activity_logsAvgAggregateOutputType | null
    _sum: Lead_activity_logsSumAggregateOutputType | null
    _min: Lead_activity_logsMinAggregateOutputType | null
    _max: Lead_activity_logsMaxAggregateOutputType | null
  }

  export type Lead_activity_logsAvgAggregateOutputType = {
    id: number | null
    enquiryId: number | null
  }

  export type Lead_activity_logsSumAggregateOutputType = {
    id: number | null
    enquiryId: number | null
  }

  export type Lead_activity_logsMinAggregateOutputType = {
    id: number | null
    enquiryId: number | null
    enquiryMessage: string | null
    status: $Enums.LeadStatus | null
    callbackDateTime: Date | null
    createdBy: string | null
  }

  export type Lead_activity_logsMaxAggregateOutputType = {
    id: number | null
    enquiryId: number | null
    enquiryMessage: string | null
    status: $Enums.LeadStatus | null
    callbackDateTime: Date | null
    createdBy: string | null
  }

  export type Lead_activity_logsCountAggregateOutputType = {
    id: number
    enquiryId: number
    enquiryMessage: number
    status: number
    callbackDateTime: number
    createdBy: number
    _all: number
  }


  export type Lead_activity_logsAvgAggregateInputType = {
    id?: true
    enquiryId?: true
  }

  export type Lead_activity_logsSumAggregateInputType = {
    id?: true
    enquiryId?: true
  }

  export type Lead_activity_logsMinAggregateInputType = {
    id?: true
    enquiryId?: true
    enquiryMessage?: true
    status?: true
    callbackDateTime?: true
    createdBy?: true
  }

  export type Lead_activity_logsMaxAggregateInputType = {
    id?: true
    enquiryId?: true
    enquiryMessage?: true
    status?: true
    callbackDateTime?: true
    createdBy?: true
  }

  export type Lead_activity_logsCountAggregateInputType = {
    id?: true
    enquiryId?: true
    enquiryMessage?: true
    status?: true
    callbackDateTime?: true
    createdBy?: true
    _all?: true
  }

  export type Lead_activity_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lead_activity_logs to aggregate.
     */
    where?: Lead_activity_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lead_activity_logs to fetch.
     */
    orderBy?: Lead_activity_logsOrderByWithRelationInput | Lead_activity_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Lead_activity_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lead_activity_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lead_activity_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lead_activity_logs
    **/
    _count?: true | Lead_activity_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Lead_activity_logsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Lead_activity_logsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Lead_activity_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Lead_activity_logsMaxAggregateInputType
  }

  export type GetLead_activity_logsAggregateType<T extends Lead_activity_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateLead_activity_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLead_activity_logs[P]>
      : GetScalarType<T[P], AggregateLead_activity_logs[P]>
  }




  export type Lead_activity_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Lead_activity_logsWhereInput
    orderBy?: Lead_activity_logsOrderByWithAggregationInput | Lead_activity_logsOrderByWithAggregationInput[]
    by: Lead_activity_logsScalarFieldEnum[] | Lead_activity_logsScalarFieldEnum
    having?: Lead_activity_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Lead_activity_logsCountAggregateInputType | true
    _avg?: Lead_activity_logsAvgAggregateInputType
    _sum?: Lead_activity_logsSumAggregateInputType
    _min?: Lead_activity_logsMinAggregateInputType
    _max?: Lead_activity_logsMaxAggregateInputType
  }

  export type Lead_activity_logsGroupByOutputType = {
    id: number
    enquiryId: number | null
    enquiryMessage: string | null
    status: $Enums.LeadStatus
    callbackDateTime: Date
    createdBy: string | null
    _count: Lead_activity_logsCountAggregateOutputType | null
    _avg: Lead_activity_logsAvgAggregateOutputType | null
    _sum: Lead_activity_logsSumAggregateOutputType | null
    _min: Lead_activity_logsMinAggregateOutputType | null
    _max: Lead_activity_logsMaxAggregateOutputType | null
  }

  type GetLead_activity_logsGroupByPayload<T extends Lead_activity_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Lead_activity_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Lead_activity_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Lead_activity_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Lead_activity_logsGroupByOutputType[P]>
        }
      >
    >


  export type Lead_activity_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enquiryId?: boolean
    enquiryMessage?: boolean
    status?: boolean
    callbackDateTime?: boolean
    createdBy?: boolean
    enquiry?: boolean | Lead_activity_logs$enquiryArgs<ExtArgs>
  }, ExtArgs["result"]["lead_activity_logs"]>

  export type Lead_activity_logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enquiryId?: boolean
    enquiryMessage?: boolean
    status?: boolean
    callbackDateTime?: boolean
    createdBy?: boolean
    enquiry?: boolean | Lead_activity_logs$enquiryArgs<ExtArgs>
  }, ExtArgs["result"]["lead_activity_logs"]>

  export type Lead_activity_logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enquiryId?: boolean
    enquiryMessage?: boolean
    status?: boolean
    callbackDateTime?: boolean
    createdBy?: boolean
    enquiry?: boolean | Lead_activity_logs$enquiryArgs<ExtArgs>
  }, ExtArgs["result"]["lead_activity_logs"]>

  export type Lead_activity_logsSelectScalar = {
    id?: boolean
    enquiryId?: boolean
    enquiryMessage?: boolean
    status?: boolean
    callbackDateTime?: boolean
    createdBy?: boolean
  }

  export type Lead_activity_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "enquiryId" | "enquiryMessage" | "status" | "callbackDateTime" | "createdBy", ExtArgs["result"]["lead_activity_logs"]>
  export type Lead_activity_logsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enquiry?: boolean | Lead_activity_logs$enquiryArgs<ExtArgs>
  }
  export type Lead_activity_logsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enquiry?: boolean | Lead_activity_logs$enquiryArgs<ExtArgs>
  }
  export type Lead_activity_logsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enquiry?: boolean | Lead_activity_logs$enquiryArgs<ExtArgs>
  }

  export type $Lead_activity_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lead_activity_logs"
    objects: {
      enquiry: Prisma.$EnquiryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      enquiryId: number | null
      enquiryMessage: string | null
      status: $Enums.LeadStatus
      callbackDateTime: Date
      createdBy: string | null
    }, ExtArgs["result"]["lead_activity_logs"]>
    composites: {}
  }

  type Lead_activity_logsGetPayload<S extends boolean | null | undefined | Lead_activity_logsDefaultArgs> = $Result.GetResult<Prisma.$Lead_activity_logsPayload, S>

  type Lead_activity_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Lead_activity_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Lead_activity_logsCountAggregateInputType | true
    }

  export interface Lead_activity_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lead_activity_logs'], meta: { name: 'Lead_activity_logs' } }
    /**
     * Find zero or one Lead_activity_logs that matches the filter.
     * @param {Lead_activity_logsFindUniqueArgs} args - Arguments to find a Lead_activity_logs
     * @example
     * // Get one Lead_activity_logs
     * const lead_activity_logs = await prisma.lead_activity_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Lead_activity_logsFindUniqueArgs>(args: SelectSubset<T, Lead_activity_logsFindUniqueArgs<ExtArgs>>): Prisma__Lead_activity_logsClient<$Result.GetResult<Prisma.$Lead_activity_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lead_activity_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Lead_activity_logsFindUniqueOrThrowArgs} args - Arguments to find a Lead_activity_logs
     * @example
     * // Get one Lead_activity_logs
     * const lead_activity_logs = await prisma.lead_activity_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Lead_activity_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, Lead_activity_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Lead_activity_logsClient<$Result.GetResult<Prisma.$Lead_activity_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lead_activity_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lead_activity_logsFindFirstArgs} args - Arguments to find a Lead_activity_logs
     * @example
     * // Get one Lead_activity_logs
     * const lead_activity_logs = await prisma.lead_activity_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Lead_activity_logsFindFirstArgs>(args?: SelectSubset<T, Lead_activity_logsFindFirstArgs<ExtArgs>>): Prisma__Lead_activity_logsClient<$Result.GetResult<Prisma.$Lead_activity_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lead_activity_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lead_activity_logsFindFirstOrThrowArgs} args - Arguments to find a Lead_activity_logs
     * @example
     * // Get one Lead_activity_logs
     * const lead_activity_logs = await prisma.lead_activity_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Lead_activity_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, Lead_activity_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Lead_activity_logsClient<$Result.GetResult<Prisma.$Lead_activity_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lead_activity_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lead_activity_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lead_activity_logs
     * const lead_activity_logs = await prisma.lead_activity_logs.findMany()
     * 
     * // Get first 10 Lead_activity_logs
     * const lead_activity_logs = await prisma.lead_activity_logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lead_activity_logsWithIdOnly = await prisma.lead_activity_logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Lead_activity_logsFindManyArgs>(args?: SelectSubset<T, Lead_activity_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Lead_activity_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lead_activity_logs.
     * @param {Lead_activity_logsCreateArgs} args - Arguments to create a Lead_activity_logs.
     * @example
     * // Create one Lead_activity_logs
     * const Lead_activity_logs = await prisma.lead_activity_logs.create({
     *   data: {
     *     // ... data to create a Lead_activity_logs
     *   }
     * })
     * 
     */
    create<T extends Lead_activity_logsCreateArgs>(args: SelectSubset<T, Lead_activity_logsCreateArgs<ExtArgs>>): Prisma__Lead_activity_logsClient<$Result.GetResult<Prisma.$Lead_activity_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lead_activity_logs.
     * @param {Lead_activity_logsCreateManyArgs} args - Arguments to create many Lead_activity_logs.
     * @example
     * // Create many Lead_activity_logs
     * const lead_activity_logs = await prisma.lead_activity_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Lead_activity_logsCreateManyArgs>(args?: SelectSubset<T, Lead_activity_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lead_activity_logs and returns the data saved in the database.
     * @param {Lead_activity_logsCreateManyAndReturnArgs} args - Arguments to create many Lead_activity_logs.
     * @example
     * // Create many Lead_activity_logs
     * const lead_activity_logs = await prisma.lead_activity_logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lead_activity_logs and only return the `id`
     * const lead_activity_logsWithIdOnly = await prisma.lead_activity_logs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Lead_activity_logsCreateManyAndReturnArgs>(args?: SelectSubset<T, Lead_activity_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Lead_activity_logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lead_activity_logs.
     * @param {Lead_activity_logsDeleteArgs} args - Arguments to delete one Lead_activity_logs.
     * @example
     * // Delete one Lead_activity_logs
     * const Lead_activity_logs = await prisma.lead_activity_logs.delete({
     *   where: {
     *     // ... filter to delete one Lead_activity_logs
     *   }
     * })
     * 
     */
    delete<T extends Lead_activity_logsDeleteArgs>(args: SelectSubset<T, Lead_activity_logsDeleteArgs<ExtArgs>>): Prisma__Lead_activity_logsClient<$Result.GetResult<Prisma.$Lead_activity_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lead_activity_logs.
     * @param {Lead_activity_logsUpdateArgs} args - Arguments to update one Lead_activity_logs.
     * @example
     * // Update one Lead_activity_logs
     * const lead_activity_logs = await prisma.lead_activity_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Lead_activity_logsUpdateArgs>(args: SelectSubset<T, Lead_activity_logsUpdateArgs<ExtArgs>>): Prisma__Lead_activity_logsClient<$Result.GetResult<Prisma.$Lead_activity_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lead_activity_logs.
     * @param {Lead_activity_logsDeleteManyArgs} args - Arguments to filter Lead_activity_logs to delete.
     * @example
     * // Delete a few Lead_activity_logs
     * const { count } = await prisma.lead_activity_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Lead_activity_logsDeleteManyArgs>(args?: SelectSubset<T, Lead_activity_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lead_activity_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lead_activity_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lead_activity_logs
     * const lead_activity_logs = await prisma.lead_activity_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Lead_activity_logsUpdateManyArgs>(args: SelectSubset<T, Lead_activity_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lead_activity_logs and returns the data updated in the database.
     * @param {Lead_activity_logsUpdateManyAndReturnArgs} args - Arguments to update many Lead_activity_logs.
     * @example
     * // Update many Lead_activity_logs
     * const lead_activity_logs = await prisma.lead_activity_logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lead_activity_logs and only return the `id`
     * const lead_activity_logsWithIdOnly = await prisma.lead_activity_logs.updateManyAndReturn({
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
    updateManyAndReturn<T extends Lead_activity_logsUpdateManyAndReturnArgs>(args: SelectSubset<T, Lead_activity_logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Lead_activity_logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lead_activity_logs.
     * @param {Lead_activity_logsUpsertArgs} args - Arguments to update or create a Lead_activity_logs.
     * @example
     * // Update or create a Lead_activity_logs
     * const lead_activity_logs = await prisma.lead_activity_logs.upsert({
     *   create: {
     *     // ... data to create a Lead_activity_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lead_activity_logs we want to update
     *   }
     * })
     */
    upsert<T extends Lead_activity_logsUpsertArgs>(args: SelectSubset<T, Lead_activity_logsUpsertArgs<ExtArgs>>): Prisma__Lead_activity_logsClient<$Result.GetResult<Prisma.$Lead_activity_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lead_activity_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lead_activity_logsCountArgs} args - Arguments to filter Lead_activity_logs to count.
     * @example
     * // Count the number of Lead_activity_logs
     * const count = await prisma.lead_activity_logs.count({
     *   where: {
     *     // ... the filter for the Lead_activity_logs we want to count
     *   }
     * })
    **/
    count<T extends Lead_activity_logsCountArgs>(
      args?: Subset<T, Lead_activity_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Lead_activity_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lead_activity_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lead_activity_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Lead_activity_logsAggregateArgs>(args: Subset<T, Lead_activity_logsAggregateArgs>): Prisma.PrismaPromise<GetLead_activity_logsAggregateType<T>>

    /**
     * Group by Lead_activity_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lead_activity_logsGroupByArgs} args - Group by arguments.
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
      T extends Lead_activity_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Lead_activity_logsGroupByArgs['orderBy'] }
        : { orderBy?: Lead_activity_logsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Lead_activity_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLead_activity_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lead_activity_logs model
   */
  readonly fields: Lead_activity_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lead_activity_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Lead_activity_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    enquiry<T extends Lead_activity_logs$enquiryArgs<ExtArgs> = {}>(args?: Subset<T, Lead_activity_logs$enquiryArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Lead_activity_logs model
   */
  interface Lead_activity_logsFieldRefs {
    readonly id: FieldRef<"Lead_activity_logs", 'Int'>
    readonly enquiryId: FieldRef<"Lead_activity_logs", 'Int'>
    readonly enquiryMessage: FieldRef<"Lead_activity_logs", 'String'>
    readonly status: FieldRef<"Lead_activity_logs", 'LeadStatus'>
    readonly callbackDateTime: FieldRef<"Lead_activity_logs", 'DateTime'>
    readonly createdBy: FieldRef<"Lead_activity_logs", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Lead_activity_logs findUnique
   */
  export type Lead_activity_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead_activity_logs
     */
    select?: Lead_activity_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead_activity_logs
     */
    omit?: Lead_activity_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Lead_activity_logsInclude<ExtArgs> | null
    /**
     * Filter, which Lead_activity_logs to fetch.
     */
    where: Lead_activity_logsWhereUniqueInput
  }

  /**
   * Lead_activity_logs findUniqueOrThrow
   */
  export type Lead_activity_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead_activity_logs
     */
    select?: Lead_activity_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead_activity_logs
     */
    omit?: Lead_activity_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Lead_activity_logsInclude<ExtArgs> | null
    /**
     * Filter, which Lead_activity_logs to fetch.
     */
    where: Lead_activity_logsWhereUniqueInput
  }

  /**
   * Lead_activity_logs findFirst
   */
  export type Lead_activity_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead_activity_logs
     */
    select?: Lead_activity_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead_activity_logs
     */
    omit?: Lead_activity_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Lead_activity_logsInclude<ExtArgs> | null
    /**
     * Filter, which Lead_activity_logs to fetch.
     */
    where?: Lead_activity_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lead_activity_logs to fetch.
     */
    orderBy?: Lead_activity_logsOrderByWithRelationInput | Lead_activity_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lead_activity_logs.
     */
    cursor?: Lead_activity_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lead_activity_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lead_activity_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lead_activity_logs.
     */
    distinct?: Lead_activity_logsScalarFieldEnum | Lead_activity_logsScalarFieldEnum[]
  }

  /**
   * Lead_activity_logs findFirstOrThrow
   */
  export type Lead_activity_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead_activity_logs
     */
    select?: Lead_activity_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead_activity_logs
     */
    omit?: Lead_activity_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Lead_activity_logsInclude<ExtArgs> | null
    /**
     * Filter, which Lead_activity_logs to fetch.
     */
    where?: Lead_activity_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lead_activity_logs to fetch.
     */
    orderBy?: Lead_activity_logsOrderByWithRelationInput | Lead_activity_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lead_activity_logs.
     */
    cursor?: Lead_activity_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lead_activity_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lead_activity_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lead_activity_logs.
     */
    distinct?: Lead_activity_logsScalarFieldEnum | Lead_activity_logsScalarFieldEnum[]
  }

  /**
   * Lead_activity_logs findMany
   */
  export type Lead_activity_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead_activity_logs
     */
    select?: Lead_activity_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead_activity_logs
     */
    omit?: Lead_activity_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Lead_activity_logsInclude<ExtArgs> | null
    /**
     * Filter, which Lead_activity_logs to fetch.
     */
    where?: Lead_activity_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lead_activity_logs to fetch.
     */
    orderBy?: Lead_activity_logsOrderByWithRelationInput | Lead_activity_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lead_activity_logs.
     */
    cursor?: Lead_activity_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lead_activity_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lead_activity_logs.
     */
    skip?: number
    distinct?: Lead_activity_logsScalarFieldEnum | Lead_activity_logsScalarFieldEnum[]
  }

  /**
   * Lead_activity_logs create
   */
  export type Lead_activity_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead_activity_logs
     */
    select?: Lead_activity_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead_activity_logs
     */
    omit?: Lead_activity_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Lead_activity_logsInclude<ExtArgs> | null
    /**
     * The data needed to create a Lead_activity_logs.
     */
    data: XOR<Lead_activity_logsCreateInput, Lead_activity_logsUncheckedCreateInput>
  }

  /**
   * Lead_activity_logs createMany
   */
  export type Lead_activity_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lead_activity_logs.
     */
    data: Lead_activity_logsCreateManyInput | Lead_activity_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lead_activity_logs createManyAndReturn
   */
  export type Lead_activity_logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead_activity_logs
     */
    select?: Lead_activity_logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lead_activity_logs
     */
    omit?: Lead_activity_logsOmit<ExtArgs> | null
    /**
     * The data used to create many Lead_activity_logs.
     */
    data: Lead_activity_logsCreateManyInput | Lead_activity_logsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Lead_activity_logsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lead_activity_logs update
   */
  export type Lead_activity_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead_activity_logs
     */
    select?: Lead_activity_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead_activity_logs
     */
    omit?: Lead_activity_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Lead_activity_logsInclude<ExtArgs> | null
    /**
     * The data needed to update a Lead_activity_logs.
     */
    data: XOR<Lead_activity_logsUpdateInput, Lead_activity_logsUncheckedUpdateInput>
    /**
     * Choose, which Lead_activity_logs to update.
     */
    where: Lead_activity_logsWhereUniqueInput
  }

  /**
   * Lead_activity_logs updateMany
   */
  export type Lead_activity_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lead_activity_logs.
     */
    data: XOR<Lead_activity_logsUpdateManyMutationInput, Lead_activity_logsUncheckedUpdateManyInput>
    /**
     * Filter which Lead_activity_logs to update
     */
    where?: Lead_activity_logsWhereInput
    /**
     * Limit how many Lead_activity_logs to update.
     */
    limit?: number
  }

  /**
   * Lead_activity_logs updateManyAndReturn
   */
  export type Lead_activity_logsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead_activity_logs
     */
    select?: Lead_activity_logsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lead_activity_logs
     */
    omit?: Lead_activity_logsOmit<ExtArgs> | null
    /**
     * The data used to update Lead_activity_logs.
     */
    data: XOR<Lead_activity_logsUpdateManyMutationInput, Lead_activity_logsUncheckedUpdateManyInput>
    /**
     * Filter which Lead_activity_logs to update
     */
    where?: Lead_activity_logsWhereInput
    /**
     * Limit how many Lead_activity_logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Lead_activity_logsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lead_activity_logs upsert
   */
  export type Lead_activity_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead_activity_logs
     */
    select?: Lead_activity_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead_activity_logs
     */
    omit?: Lead_activity_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Lead_activity_logsInclude<ExtArgs> | null
    /**
     * The filter to search for the Lead_activity_logs to update in case it exists.
     */
    where: Lead_activity_logsWhereUniqueInput
    /**
     * In case the Lead_activity_logs found by the `where` argument doesn't exist, create a new Lead_activity_logs with this data.
     */
    create: XOR<Lead_activity_logsCreateInput, Lead_activity_logsUncheckedCreateInput>
    /**
     * In case the Lead_activity_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Lead_activity_logsUpdateInput, Lead_activity_logsUncheckedUpdateInput>
  }

  /**
   * Lead_activity_logs delete
   */
  export type Lead_activity_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead_activity_logs
     */
    select?: Lead_activity_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead_activity_logs
     */
    omit?: Lead_activity_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Lead_activity_logsInclude<ExtArgs> | null
    /**
     * Filter which Lead_activity_logs to delete.
     */
    where: Lead_activity_logsWhereUniqueInput
  }

  /**
   * Lead_activity_logs deleteMany
   */
  export type Lead_activity_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lead_activity_logs to delete
     */
    where?: Lead_activity_logsWhereInput
    /**
     * Limit how many Lead_activity_logs to delete.
     */
    limit?: number
  }

  /**
   * Lead_activity_logs.enquiry
   */
  export type Lead_activity_logs$enquiryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    where?: EnquiryWhereInput
  }

  /**
   * Lead_activity_logs without action
   */
  export type Lead_activity_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead_activity_logs
     */
    select?: Lead_activity_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead_activity_logs
     */
    omit?: Lead_activity_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Lead_activity_logsInclude<ExtArgs> | null
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


  export const CoursesScalarFieldEnum: {
    courseId: 'courseId',
    courseName: 'courseName',
    description: 'description',
    feesType: 'feesType',
    planName: 'planName',
    duration: 'duration',
    price: 'price',
    batchesPerWeek: 'batchesPerWeek',
    billingCycle: 'billingCycle',
    batchType: 'batchType',
    courseStatus: 'courseStatus',
    createdBy: 'createdBy',
    preferredMode: 'preferredMode',
    permissions: 'permissions'
  };

  export type CoursesScalarFieldEnum = (typeof CoursesScalarFieldEnum)[keyof typeof CoursesScalarFieldEnum]


  export const EnquiryScalarFieldEnum: {
    id: 'id',
    email: 'email',
    first_name: 'first_name',
    last_name: 'last_name',
    phone_primary: 'phone_primary',
    phone_secondary: 'phone_secondary',
    referred_by: 'referred_by',
    gender: 'gender',
    status: 'status',
    created_at: 'created_at',
    dob: 'dob',
    course_name: 'course_name'
  };

  export type EnquiryScalarFieldEnum = (typeof EnquiryScalarFieldEnum)[keyof typeof EnquiryScalarFieldEnum]


  export const Lead_activity_logsScalarFieldEnum: {
    id: 'id',
    enquiryId: 'enquiryId',
    enquiryMessage: 'enquiryMessage',
    status: 'status',
    callbackDateTime: 'callbackDateTime',
    createdBy: 'createdBy'
  };

  export type Lead_activity_logsScalarFieldEnum = (typeof Lead_activity_logsScalarFieldEnum)[keyof typeof Lead_activity_logsScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'LeadStatus'
   */
  export type EnumLeadStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadStatus'>
    


  /**
   * Reference to a field of type 'LeadStatus[]'
   */
  export type ListEnumLeadStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type CoursesWhereInput = {
    AND?: CoursesWhereInput | CoursesWhereInput[]
    OR?: CoursesWhereInput[]
    NOT?: CoursesWhereInput | CoursesWhereInput[]
    courseId?: IntFilter<"Courses"> | number
    courseName?: StringNullableFilter<"Courses"> | string | null
    description?: StringNullableFilter<"Courses"> | string | null
    feesType?: StringNullableFilter<"Courses"> | string | null
    planName?: StringNullableFilter<"Courses"> | string | null
    duration?: StringNullableFilter<"Courses"> | string | null
    price?: StringNullableFilter<"Courses"> | string | null
    batchesPerWeek?: StringNullableFilter<"Courses"> | string | null
    billingCycle?: StringNullableFilter<"Courses"> | string | null
    batchType?: StringNullableFilter<"Courses"> | string | null
    courseStatus?: StringNullableFilter<"Courses"> | string | null
    createdBy?: StringNullableFilter<"Courses"> | string | null
    preferredMode?: StringNullableFilter<"Courses"> | string | null
    permissions?: StringNullableFilter<"Courses"> | string | null
  }

  export type CoursesOrderByWithRelationInput = {
    courseId?: SortOrder
    courseName?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    feesType?: SortOrderInput | SortOrder
    planName?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    batchesPerWeek?: SortOrderInput | SortOrder
    billingCycle?: SortOrderInput | SortOrder
    batchType?: SortOrderInput | SortOrder
    courseStatus?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    preferredMode?: SortOrderInput | SortOrder
    permissions?: SortOrderInput | SortOrder
  }

  export type CoursesWhereUniqueInput = Prisma.AtLeast<{
    courseId?: number
    courseName?: string
    AND?: CoursesWhereInput | CoursesWhereInput[]
    OR?: CoursesWhereInput[]
    NOT?: CoursesWhereInput | CoursesWhereInput[]
    description?: StringNullableFilter<"Courses"> | string | null
    feesType?: StringNullableFilter<"Courses"> | string | null
    planName?: StringNullableFilter<"Courses"> | string | null
    duration?: StringNullableFilter<"Courses"> | string | null
    price?: StringNullableFilter<"Courses"> | string | null
    batchesPerWeek?: StringNullableFilter<"Courses"> | string | null
    billingCycle?: StringNullableFilter<"Courses"> | string | null
    batchType?: StringNullableFilter<"Courses"> | string | null
    courseStatus?: StringNullableFilter<"Courses"> | string | null
    createdBy?: StringNullableFilter<"Courses"> | string | null
    preferredMode?: StringNullableFilter<"Courses"> | string | null
    permissions?: StringNullableFilter<"Courses"> | string | null
  }, "courseId" | "courseName">

  export type CoursesOrderByWithAggregationInput = {
    courseId?: SortOrder
    courseName?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    feesType?: SortOrderInput | SortOrder
    planName?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    batchesPerWeek?: SortOrderInput | SortOrder
    billingCycle?: SortOrderInput | SortOrder
    batchType?: SortOrderInput | SortOrder
    courseStatus?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    preferredMode?: SortOrderInput | SortOrder
    permissions?: SortOrderInput | SortOrder
    _count?: CoursesCountOrderByAggregateInput
    _avg?: CoursesAvgOrderByAggregateInput
    _max?: CoursesMaxOrderByAggregateInput
    _min?: CoursesMinOrderByAggregateInput
    _sum?: CoursesSumOrderByAggregateInput
  }

  export type CoursesScalarWhereWithAggregatesInput = {
    AND?: CoursesScalarWhereWithAggregatesInput | CoursesScalarWhereWithAggregatesInput[]
    OR?: CoursesScalarWhereWithAggregatesInput[]
    NOT?: CoursesScalarWhereWithAggregatesInput | CoursesScalarWhereWithAggregatesInput[]
    courseId?: IntWithAggregatesFilter<"Courses"> | number
    courseName?: StringNullableWithAggregatesFilter<"Courses"> | string | null
    description?: StringNullableWithAggregatesFilter<"Courses"> | string | null
    feesType?: StringNullableWithAggregatesFilter<"Courses"> | string | null
    planName?: StringNullableWithAggregatesFilter<"Courses"> | string | null
    duration?: StringNullableWithAggregatesFilter<"Courses"> | string | null
    price?: StringNullableWithAggregatesFilter<"Courses"> | string | null
    batchesPerWeek?: StringNullableWithAggregatesFilter<"Courses"> | string | null
    billingCycle?: StringNullableWithAggregatesFilter<"Courses"> | string | null
    batchType?: StringNullableWithAggregatesFilter<"Courses"> | string | null
    courseStatus?: StringNullableWithAggregatesFilter<"Courses"> | string | null
    createdBy?: StringNullableWithAggregatesFilter<"Courses"> | string | null
    preferredMode?: StringNullableWithAggregatesFilter<"Courses"> | string | null
    permissions?: StringNullableWithAggregatesFilter<"Courses"> | string | null
  }

  export type EnquiryWhereInput = {
    AND?: EnquiryWhereInput | EnquiryWhereInput[]
    OR?: EnquiryWhereInput[]
    NOT?: EnquiryWhereInput | EnquiryWhereInput[]
    id?: IntFilter<"Enquiry"> | number
    email?: StringFilter<"Enquiry"> | string
    first_name?: StringFilter<"Enquiry"> | string
    last_name?: StringFilter<"Enquiry"> | string
    phone_primary?: StringFilter<"Enquiry"> | string
    phone_secondary?: StringNullableFilter<"Enquiry"> | string | null
    referred_by?: StringNullableFilter<"Enquiry"> | string | null
    gender?: EnumGenderFilter<"Enquiry"> | $Enums.Gender
    status?: EnumLeadStatusFilter<"Enquiry"> | $Enums.LeadStatus
    created_at?: DateTimeNullableFilter<"Enquiry"> | Date | string | null
    dob?: StringNullableFilter<"Enquiry"> | string | null
    course_name?: StringNullableFilter<"Enquiry"> | string | null
    leadActivityLogs?: Lead_activity_logsListRelationFilter
  }

  export type EnquiryOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone_primary?: SortOrder
    phone_secondary?: SortOrderInput | SortOrder
    referred_by?: SortOrderInput | SortOrder
    gender?: SortOrder
    status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    dob?: SortOrderInput | SortOrder
    course_name?: SortOrderInput | SortOrder
    leadActivityLogs?: Lead_activity_logsOrderByRelationAggregateInput
  }

  export type EnquiryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: EnquiryWhereInput | EnquiryWhereInput[]
    OR?: EnquiryWhereInput[]
    NOT?: EnquiryWhereInput | EnquiryWhereInput[]
    first_name?: StringFilter<"Enquiry"> | string
    last_name?: StringFilter<"Enquiry"> | string
    phone_primary?: StringFilter<"Enquiry"> | string
    phone_secondary?: StringNullableFilter<"Enquiry"> | string | null
    referred_by?: StringNullableFilter<"Enquiry"> | string | null
    gender?: EnumGenderFilter<"Enquiry"> | $Enums.Gender
    status?: EnumLeadStatusFilter<"Enquiry"> | $Enums.LeadStatus
    created_at?: DateTimeNullableFilter<"Enquiry"> | Date | string | null
    dob?: StringNullableFilter<"Enquiry"> | string | null
    course_name?: StringNullableFilter<"Enquiry"> | string | null
    leadActivityLogs?: Lead_activity_logsListRelationFilter
  }, "id" | "email">

  export type EnquiryOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone_primary?: SortOrder
    phone_secondary?: SortOrderInput | SortOrder
    referred_by?: SortOrderInput | SortOrder
    gender?: SortOrder
    status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    dob?: SortOrderInput | SortOrder
    course_name?: SortOrderInput | SortOrder
    _count?: EnquiryCountOrderByAggregateInput
    _avg?: EnquiryAvgOrderByAggregateInput
    _max?: EnquiryMaxOrderByAggregateInput
    _min?: EnquiryMinOrderByAggregateInput
    _sum?: EnquirySumOrderByAggregateInput
  }

  export type EnquiryScalarWhereWithAggregatesInput = {
    AND?: EnquiryScalarWhereWithAggregatesInput | EnquiryScalarWhereWithAggregatesInput[]
    OR?: EnquiryScalarWhereWithAggregatesInput[]
    NOT?: EnquiryScalarWhereWithAggregatesInput | EnquiryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Enquiry"> | number
    email?: StringWithAggregatesFilter<"Enquiry"> | string
    first_name?: StringWithAggregatesFilter<"Enquiry"> | string
    last_name?: StringWithAggregatesFilter<"Enquiry"> | string
    phone_primary?: StringWithAggregatesFilter<"Enquiry"> | string
    phone_secondary?: StringNullableWithAggregatesFilter<"Enquiry"> | string | null
    referred_by?: StringNullableWithAggregatesFilter<"Enquiry"> | string | null
    gender?: EnumGenderWithAggregatesFilter<"Enquiry"> | $Enums.Gender
    status?: EnumLeadStatusWithAggregatesFilter<"Enquiry"> | $Enums.LeadStatus
    created_at?: DateTimeNullableWithAggregatesFilter<"Enquiry"> | Date | string | null
    dob?: StringNullableWithAggregatesFilter<"Enquiry"> | string | null
    course_name?: StringNullableWithAggregatesFilter<"Enquiry"> | string | null
  }

  export type Lead_activity_logsWhereInput = {
    AND?: Lead_activity_logsWhereInput | Lead_activity_logsWhereInput[]
    OR?: Lead_activity_logsWhereInput[]
    NOT?: Lead_activity_logsWhereInput | Lead_activity_logsWhereInput[]
    id?: IntFilter<"Lead_activity_logs"> | number
    enquiryId?: IntNullableFilter<"Lead_activity_logs"> | number | null
    enquiryMessage?: StringNullableFilter<"Lead_activity_logs"> | string | null
    status?: EnumLeadStatusFilter<"Lead_activity_logs"> | $Enums.LeadStatus
    callbackDateTime?: DateTimeFilter<"Lead_activity_logs"> | Date | string
    createdBy?: StringNullableFilter<"Lead_activity_logs"> | string | null
    enquiry?: XOR<EnquiryNullableScalarRelationFilter, EnquiryWhereInput> | null
  }

  export type Lead_activity_logsOrderByWithRelationInput = {
    id?: SortOrder
    enquiryId?: SortOrderInput | SortOrder
    enquiryMessage?: SortOrderInput | SortOrder
    status?: SortOrder
    callbackDateTime?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    enquiry?: EnquiryOrderByWithRelationInput
  }

  export type Lead_activity_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Lead_activity_logsWhereInput | Lead_activity_logsWhereInput[]
    OR?: Lead_activity_logsWhereInput[]
    NOT?: Lead_activity_logsWhereInput | Lead_activity_logsWhereInput[]
    enquiryId?: IntNullableFilter<"Lead_activity_logs"> | number | null
    enquiryMessage?: StringNullableFilter<"Lead_activity_logs"> | string | null
    status?: EnumLeadStatusFilter<"Lead_activity_logs"> | $Enums.LeadStatus
    callbackDateTime?: DateTimeFilter<"Lead_activity_logs"> | Date | string
    createdBy?: StringNullableFilter<"Lead_activity_logs"> | string | null
    enquiry?: XOR<EnquiryNullableScalarRelationFilter, EnquiryWhereInput> | null
  }, "id">

  export type Lead_activity_logsOrderByWithAggregationInput = {
    id?: SortOrder
    enquiryId?: SortOrderInput | SortOrder
    enquiryMessage?: SortOrderInput | SortOrder
    status?: SortOrder
    callbackDateTime?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    _count?: Lead_activity_logsCountOrderByAggregateInput
    _avg?: Lead_activity_logsAvgOrderByAggregateInput
    _max?: Lead_activity_logsMaxOrderByAggregateInput
    _min?: Lead_activity_logsMinOrderByAggregateInput
    _sum?: Lead_activity_logsSumOrderByAggregateInput
  }

  export type Lead_activity_logsScalarWhereWithAggregatesInput = {
    AND?: Lead_activity_logsScalarWhereWithAggregatesInput | Lead_activity_logsScalarWhereWithAggregatesInput[]
    OR?: Lead_activity_logsScalarWhereWithAggregatesInput[]
    NOT?: Lead_activity_logsScalarWhereWithAggregatesInput | Lead_activity_logsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Lead_activity_logs"> | number
    enquiryId?: IntNullableWithAggregatesFilter<"Lead_activity_logs"> | number | null
    enquiryMessage?: StringNullableWithAggregatesFilter<"Lead_activity_logs"> | string | null
    status?: EnumLeadStatusWithAggregatesFilter<"Lead_activity_logs"> | $Enums.LeadStatus
    callbackDateTime?: DateTimeWithAggregatesFilter<"Lead_activity_logs"> | Date | string
    createdBy?: StringNullableWithAggregatesFilter<"Lead_activity_logs"> | string | null
  }

  export type CoursesCreateInput = {
    courseName?: string | null
    description?: string | null
    feesType?: string | null
    planName?: string | null
    duration?: string | null
    price?: string | null
    batchesPerWeek?: string | null
    billingCycle?: string | null
    batchType?: string | null
    courseStatus?: string | null
    createdBy?: string | null
    preferredMode?: string | null
    permissions?: string | null
  }

  export type CoursesUncheckedCreateInput = {
    courseId?: number
    courseName?: string | null
    description?: string | null
    feesType?: string | null
    planName?: string | null
    duration?: string | null
    price?: string | null
    batchesPerWeek?: string | null
    billingCycle?: string | null
    batchType?: string | null
    courseStatus?: string | null
    createdBy?: string | null
    preferredMode?: string | null
    permissions?: string | null
  }

  export type CoursesUpdateInput = {
    courseName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    feesType?: NullableStringFieldUpdateOperationsInput | string | null
    planName?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    batchesPerWeek?: NullableStringFieldUpdateOperationsInput | string | null
    billingCycle?: NullableStringFieldUpdateOperationsInput | string | null
    batchType?: NullableStringFieldUpdateOperationsInput | string | null
    courseStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    preferredMode?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CoursesUncheckedUpdateInput = {
    courseId?: IntFieldUpdateOperationsInput | number
    courseName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    feesType?: NullableStringFieldUpdateOperationsInput | string | null
    planName?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    batchesPerWeek?: NullableStringFieldUpdateOperationsInput | string | null
    billingCycle?: NullableStringFieldUpdateOperationsInput | string | null
    batchType?: NullableStringFieldUpdateOperationsInput | string | null
    courseStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    preferredMode?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CoursesCreateManyInput = {
    courseId?: number
    courseName?: string | null
    description?: string | null
    feesType?: string | null
    planName?: string | null
    duration?: string | null
    price?: string | null
    batchesPerWeek?: string | null
    billingCycle?: string | null
    batchType?: string | null
    courseStatus?: string | null
    createdBy?: string | null
    preferredMode?: string | null
    permissions?: string | null
  }

  export type CoursesUpdateManyMutationInput = {
    courseName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    feesType?: NullableStringFieldUpdateOperationsInput | string | null
    planName?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    batchesPerWeek?: NullableStringFieldUpdateOperationsInput | string | null
    billingCycle?: NullableStringFieldUpdateOperationsInput | string | null
    batchType?: NullableStringFieldUpdateOperationsInput | string | null
    courseStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    preferredMode?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CoursesUncheckedUpdateManyInput = {
    courseId?: IntFieldUpdateOperationsInput | number
    courseName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    feesType?: NullableStringFieldUpdateOperationsInput | string | null
    planName?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    batchesPerWeek?: NullableStringFieldUpdateOperationsInput | string | null
    billingCycle?: NullableStringFieldUpdateOperationsInput | string | null
    batchType?: NullableStringFieldUpdateOperationsInput | string | null
    courseStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    preferredMode?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EnquiryCreateInput = {
    email: string
    first_name: string
    last_name: string
    phone_primary: string
    phone_secondary?: string | null
    referred_by?: string | null
    gender: $Enums.Gender
    status: $Enums.LeadStatus
    created_at?: Date | string | null
    dob?: string | null
    course_name?: string | null
    leadActivityLogs?: Lead_activity_logsCreateNestedManyWithoutEnquiryInput
  }

  export type EnquiryUncheckedCreateInput = {
    id?: number
    email: string
    first_name: string
    last_name: string
    phone_primary: string
    phone_secondary?: string | null
    referred_by?: string | null
    gender: $Enums.Gender
    status: $Enums.LeadStatus
    created_at?: Date | string | null
    dob?: string | null
    course_name?: string | null
    leadActivityLogs?: Lead_activity_logsUncheckedCreateNestedManyWithoutEnquiryInput
  }

  export type EnquiryUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_primary?: StringFieldUpdateOperationsInput | string
    phone_secondary?: NullableStringFieldUpdateOperationsInput | string | null
    referred_by?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    course_name?: NullableStringFieldUpdateOperationsInput | string | null
    leadActivityLogs?: Lead_activity_logsUpdateManyWithoutEnquiryNestedInput
  }

  export type EnquiryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_primary?: StringFieldUpdateOperationsInput | string
    phone_secondary?: NullableStringFieldUpdateOperationsInput | string | null
    referred_by?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    course_name?: NullableStringFieldUpdateOperationsInput | string | null
    leadActivityLogs?: Lead_activity_logsUncheckedUpdateManyWithoutEnquiryNestedInput
  }

  export type EnquiryCreateManyInput = {
    id?: number
    email: string
    first_name: string
    last_name: string
    phone_primary: string
    phone_secondary?: string | null
    referred_by?: string | null
    gender: $Enums.Gender
    status: $Enums.LeadStatus
    created_at?: Date | string | null
    dob?: string | null
    course_name?: string | null
  }

  export type EnquiryUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_primary?: StringFieldUpdateOperationsInput | string
    phone_secondary?: NullableStringFieldUpdateOperationsInput | string | null
    referred_by?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    course_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EnquiryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_primary?: StringFieldUpdateOperationsInput | string
    phone_secondary?: NullableStringFieldUpdateOperationsInput | string | null
    referred_by?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    course_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Lead_activity_logsCreateInput = {
    enquiryMessage?: string | null
    status: $Enums.LeadStatus
    callbackDateTime: Date | string
    createdBy?: string | null
    enquiry?: EnquiryCreateNestedOneWithoutLeadActivityLogsInput
  }

  export type Lead_activity_logsUncheckedCreateInput = {
    id?: number
    enquiryId?: number | null
    enquiryMessage?: string | null
    status: $Enums.LeadStatus
    callbackDateTime: Date | string
    createdBy?: string | null
  }

  export type Lead_activity_logsUpdateInput = {
    enquiryMessage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    callbackDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    enquiry?: EnquiryUpdateOneWithoutLeadActivityLogsNestedInput
  }

  export type Lead_activity_logsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    enquiryId?: NullableIntFieldUpdateOperationsInput | number | null
    enquiryMessage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    callbackDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Lead_activity_logsCreateManyInput = {
    id?: number
    enquiryId?: number | null
    enquiryMessage?: string | null
    status: $Enums.LeadStatus
    callbackDateTime: Date | string
    createdBy?: string | null
  }

  export type Lead_activity_logsUpdateManyMutationInput = {
    enquiryMessage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    callbackDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Lead_activity_logsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    enquiryId?: NullableIntFieldUpdateOperationsInput | number | null
    enquiryMessage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    callbackDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CoursesCountOrderByAggregateInput = {
    courseId?: SortOrder
    courseName?: SortOrder
    description?: SortOrder
    feesType?: SortOrder
    planName?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    batchesPerWeek?: SortOrder
    billingCycle?: SortOrder
    batchType?: SortOrder
    courseStatus?: SortOrder
    createdBy?: SortOrder
    preferredMode?: SortOrder
    permissions?: SortOrder
  }

  export type CoursesAvgOrderByAggregateInput = {
    courseId?: SortOrder
  }

  export type CoursesMaxOrderByAggregateInput = {
    courseId?: SortOrder
    courseName?: SortOrder
    description?: SortOrder
    feesType?: SortOrder
    planName?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    batchesPerWeek?: SortOrder
    billingCycle?: SortOrder
    batchType?: SortOrder
    courseStatus?: SortOrder
    createdBy?: SortOrder
    preferredMode?: SortOrder
    permissions?: SortOrder
  }

  export type CoursesMinOrderByAggregateInput = {
    courseId?: SortOrder
    courseName?: SortOrder
    description?: SortOrder
    feesType?: SortOrder
    planName?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    batchesPerWeek?: SortOrder
    billingCycle?: SortOrder
    batchType?: SortOrder
    courseStatus?: SortOrder
    createdBy?: SortOrder
    preferredMode?: SortOrder
    permissions?: SortOrder
  }

  export type CoursesSumOrderByAggregateInput = {
    courseId?: SortOrder
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

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type EnumLeadStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusFilter<$PrismaModel> | $Enums.LeadStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Lead_activity_logsListRelationFilter = {
    every?: Lead_activity_logsWhereInput
    some?: Lead_activity_logsWhereInput
    none?: Lead_activity_logsWhereInput
  }

  export type Lead_activity_logsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnquiryCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone_primary?: SortOrder
    phone_secondary?: SortOrder
    referred_by?: SortOrder
    gender?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    dob?: SortOrder
    course_name?: SortOrder
  }

  export type EnquiryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnquiryMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone_primary?: SortOrder
    phone_secondary?: SortOrder
    referred_by?: SortOrder
    gender?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    dob?: SortOrder
    course_name?: SortOrder
  }

  export type EnquiryMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone_primary?: SortOrder
    phone_secondary?: SortOrder
    referred_by?: SortOrder
    gender?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    dob?: SortOrder
    course_name?: SortOrder
  }

  export type EnquirySumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type EnumLeadStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeadStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadStatusFilter<$PrismaModel>
    _max?: NestedEnumLeadStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type EnquiryNullableScalarRelationFilter = {
    is?: EnquiryWhereInput | null
    isNot?: EnquiryWhereInput | null
  }

  export type Lead_activity_logsCountOrderByAggregateInput = {
    id?: SortOrder
    enquiryId?: SortOrder
    enquiryMessage?: SortOrder
    status?: SortOrder
    callbackDateTime?: SortOrder
    createdBy?: SortOrder
  }

  export type Lead_activity_logsAvgOrderByAggregateInput = {
    id?: SortOrder
    enquiryId?: SortOrder
  }

  export type Lead_activity_logsMaxOrderByAggregateInput = {
    id?: SortOrder
    enquiryId?: SortOrder
    enquiryMessage?: SortOrder
    status?: SortOrder
    callbackDateTime?: SortOrder
    createdBy?: SortOrder
  }

  export type Lead_activity_logsMinOrderByAggregateInput = {
    id?: SortOrder
    enquiryId?: SortOrder
    enquiryMessage?: SortOrder
    status?: SortOrder
    callbackDateTime?: SortOrder
    createdBy?: SortOrder
  }

  export type Lead_activity_logsSumOrderByAggregateInput = {
    id?: SortOrder
    enquiryId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Lead_activity_logsCreateNestedManyWithoutEnquiryInput = {
    create?: XOR<Lead_activity_logsCreateWithoutEnquiryInput, Lead_activity_logsUncheckedCreateWithoutEnquiryInput> | Lead_activity_logsCreateWithoutEnquiryInput[] | Lead_activity_logsUncheckedCreateWithoutEnquiryInput[]
    connectOrCreate?: Lead_activity_logsCreateOrConnectWithoutEnquiryInput | Lead_activity_logsCreateOrConnectWithoutEnquiryInput[]
    createMany?: Lead_activity_logsCreateManyEnquiryInputEnvelope
    connect?: Lead_activity_logsWhereUniqueInput | Lead_activity_logsWhereUniqueInput[]
  }

  export type Lead_activity_logsUncheckedCreateNestedManyWithoutEnquiryInput = {
    create?: XOR<Lead_activity_logsCreateWithoutEnquiryInput, Lead_activity_logsUncheckedCreateWithoutEnquiryInput> | Lead_activity_logsCreateWithoutEnquiryInput[] | Lead_activity_logsUncheckedCreateWithoutEnquiryInput[]
    connectOrCreate?: Lead_activity_logsCreateOrConnectWithoutEnquiryInput | Lead_activity_logsCreateOrConnectWithoutEnquiryInput[]
    createMany?: Lead_activity_logsCreateManyEnquiryInputEnvelope
    connect?: Lead_activity_logsWhereUniqueInput | Lead_activity_logsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type EnumLeadStatusFieldUpdateOperationsInput = {
    set?: $Enums.LeadStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type Lead_activity_logsUpdateManyWithoutEnquiryNestedInput = {
    create?: XOR<Lead_activity_logsCreateWithoutEnquiryInput, Lead_activity_logsUncheckedCreateWithoutEnquiryInput> | Lead_activity_logsCreateWithoutEnquiryInput[] | Lead_activity_logsUncheckedCreateWithoutEnquiryInput[]
    connectOrCreate?: Lead_activity_logsCreateOrConnectWithoutEnquiryInput | Lead_activity_logsCreateOrConnectWithoutEnquiryInput[]
    upsert?: Lead_activity_logsUpsertWithWhereUniqueWithoutEnquiryInput | Lead_activity_logsUpsertWithWhereUniqueWithoutEnquiryInput[]
    createMany?: Lead_activity_logsCreateManyEnquiryInputEnvelope
    set?: Lead_activity_logsWhereUniqueInput | Lead_activity_logsWhereUniqueInput[]
    disconnect?: Lead_activity_logsWhereUniqueInput | Lead_activity_logsWhereUniqueInput[]
    delete?: Lead_activity_logsWhereUniqueInput | Lead_activity_logsWhereUniqueInput[]
    connect?: Lead_activity_logsWhereUniqueInput | Lead_activity_logsWhereUniqueInput[]
    update?: Lead_activity_logsUpdateWithWhereUniqueWithoutEnquiryInput | Lead_activity_logsUpdateWithWhereUniqueWithoutEnquiryInput[]
    updateMany?: Lead_activity_logsUpdateManyWithWhereWithoutEnquiryInput | Lead_activity_logsUpdateManyWithWhereWithoutEnquiryInput[]
    deleteMany?: Lead_activity_logsScalarWhereInput | Lead_activity_logsScalarWhereInput[]
  }

  export type Lead_activity_logsUncheckedUpdateManyWithoutEnquiryNestedInput = {
    create?: XOR<Lead_activity_logsCreateWithoutEnquiryInput, Lead_activity_logsUncheckedCreateWithoutEnquiryInput> | Lead_activity_logsCreateWithoutEnquiryInput[] | Lead_activity_logsUncheckedCreateWithoutEnquiryInput[]
    connectOrCreate?: Lead_activity_logsCreateOrConnectWithoutEnquiryInput | Lead_activity_logsCreateOrConnectWithoutEnquiryInput[]
    upsert?: Lead_activity_logsUpsertWithWhereUniqueWithoutEnquiryInput | Lead_activity_logsUpsertWithWhereUniqueWithoutEnquiryInput[]
    createMany?: Lead_activity_logsCreateManyEnquiryInputEnvelope
    set?: Lead_activity_logsWhereUniqueInput | Lead_activity_logsWhereUniqueInput[]
    disconnect?: Lead_activity_logsWhereUniqueInput | Lead_activity_logsWhereUniqueInput[]
    delete?: Lead_activity_logsWhereUniqueInput | Lead_activity_logsWhereUniqueInput[]
    connect?: Lead_activity_logsWhereUniqueInput | Lead_activity_logsWhereUniqueInput[]
    update?: Lead_activity_logsUpdateWithWhereUniqueWithoutEnquiryInput | Lead_activity_logsUpdateWithWhereUniqueWithoutEnquiryInput[]
    updateMany?: Lead_activity_logsUpdateManyWithWhereWithoutEnquiryInput | Lead_activity_logsUpdateManyWithWhereWithoutEnquiryInput[]
    deleteMany?: Lead_activity_logsScalarWhereInput | Lead_activity_logsScalarWhereInput[]
  }

  export type EnquiryCreateNestedOneWithoutLeadActivityLogsInput = {
    create?: XOR<EnquiryCreateWithoutLeadActivityLogsInput, EnquiryUncheckedCreateWithoutLeadActivityLogsInput>
    connectOrCreate?: EnquiryCreateOrConnectWithoutLeadActivityLogsInput
    connect?: EnquiryWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnquiryUpdateOneWithoutLeadActivityLogsNestedInput = {
    create?: XOR<EnquiryCreateWithoutLeadActivityLogsInput, EnquiryUncheckedCreateWithoutLeadActivityLogsInput>
    connectOrCreate?: EnquiryCreateOrConnectWithoutLeadActivityLogsInput
    upsert?: EnquiryUpsertWithoutLeadActivityLogsInput
    disconnect?: EnquiryWhereInput | boolean
    delete?: EnquiryWhereInput | boolean
    connect?: EnquiryWhereUniqueInput
    update?: XOR<XOR<EnquiryUpdateToOneWithWhereWithoutLeadActivityLogsInput, EnquiryUpdateWithoutLeadActivityLogsInput>, EnquiryUncheckedUpdateWithoutLeadActivityLogsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedEnumLeadStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusFilter<$PrismaModel> | $Enums.LeadStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedEnumLeadStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeadStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadStatusFilter<$PrismaModel>
    _max?: NestedEnumLeadStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type Lead_activity_logsCreateWithoutEnquiryInput = {
    enquiryMessage?: string | null
    status: $Enums.LeadStatus
    callbackDateTime: Date | string
    createdBy?: string | null
  }

  export type Lead_activity_logsUncheckedCreateWithoutEnquiryInput = {
    id?: number
    enquiryMessage?: string | null
    status: $Enums.LeadStatus
    callbackDateTime: Date | string
    createdBy?: string | null
  }

  export type Lead_activity_logsCreateOrConnectWithoutEnquiryInput = {
    where: Lead_activity_logsWhereUniqueInput
    create: XOR<Lead_activity_logsCreateWithoutEnquiryInput, Lead_activity_logsUncheckedCreateWithoutEnquiryInput>
  }

  export type Lead_activity_logsCreateManyEnquiryInputEnvelope = {
    data: Lead_activity_logsCreateManyEnquiryInput | Lead_activity_logsCreateManyEnquiryInput[]
    skipDuplicates?: boolean
  }

  export type Lead_activity_logsUpsertWithWhereUniqueWithoutEnquiryInput = {
    where: Lead_activity_logsWhereUniqueInput
    update: XOR<Lead_activity_logsUpdateWithoutEnquiryInput, Lead_activity_logsUncheckedUpdateWithoutEnquiryInput>
    create: XOR<Lead_activity_logsCreateWithoutEnquiryInput, Lead_activity_logsUncheckedCreateWithoutEnquiryInput>
  }

  export type Lead_activity_logsUpdateWithWhereUniqueWithoutEnquiryInput = {
    where: Lead_activity_logsWhereUniqueInput
    data: XOR<Lead_activity_logsUpdateWithoutEnquiryInput, Lead_activity_logsUncheckedUpdateWithoutEnquiryInput>
  }

  export type Lead_activity_logsUpdateManyWithWhereWithoutEnquiryInput = {
    where: Lead_activity_logsScalarWhereInput
    data: XOR<Lead_activity_logsUpdateManyMutationInput, Lead_activity_logsUncheckedUpdateManyWithoutEnquiryInput>
  }

  export type Lead_activity_logsScalarWhereInput = {
    AND?: Lead_activity_logsScalarWhereInput | Lead_activity_logsScalarWhereInput[]
    OR?: Lead_activity_logsScalarWhereInput[]
    NOT?: Lead_activity_logsScalarWhereInput | Lead_activity_logsScalarWhereInput[]
    id?: IntFilter<"Lead_activity_logs"> | number
    enquiryId?: IntNullableFilter<"Lead_activity_logs"> | number | null
    enquiryMessage?: StringNullableFilter<"Lead_activity_logs"> | string | null
    status?: EnumLeadStatusFilter<"Lead_activity_logs"> | $Enums.LeadStatus
    callbackDateTime?: DateTimeFilter<"Lead_activity_logs"> | Date | string
    createdBy?: StringNullableFilter<"Lead_activity_logs"> | string | null
  }

  export type EnquiryCreateWithoutLeadActivityLogsInput = {
    email: string
    first_name: string
    last_name: string
    phone_primary: string
    phone_secondary?: string | null
    referred_by?: string | null
    gender: $Enums.Gender
    status: $Enums.LeadStatus
    created_at?: Date | string | null
    dob?: string | null
    course_name?: string | null
  }

  export type EnquiryUncheckedCreateWithoutLeadActivityLogsInput = {
    id?: number
    email: string
    first_name: string
    last_name: string
    phone_primary: string
    phone_secondary?: string | null
    referred_by?: string | null
    gender: $Enums.Gender
    status: $Enums.LeadStatus
    created_at?: Date | string | null
    dob?: string | null
    course_name?: string | null
  }

  export type EnquiryCreateOrConnectWithoutLeadActivityLogsInput = {
    where: EnquiryWhereUniqueInput
    create: XOR<EnquiryCreateWithoutLeadActivityLogsInput, EnquiryUncheckedCreateWithoutLeadActivityLogsInput>
  }

  export type EnquiryUpsertWithoutLeadActivityLogsInput = {
    update: XOR<EnquiryUpdateWithoutLeadActivityLogsInput, EnquiryUncheckedUpdateWithoutLeadActivityLogsInput>
    create: XOR<EnquiryCreateWithoutLeadActivityLogsInput, EnquiryUncheckedCreateWithoutLeadActivityLogsInput>
    where?: EnquiryWhereInput
  }

  export type EnquiryUpdateToOneWithWhereWithoutLeadActivityLogsInput = {
    where?: EnquiryWhereInput
    data: XOR<EnquiryUpdateWithoutLeadActivityLogsInput, EnquiryUncheckedUpdateWithoutLeadActivityLogsInput>
  }

  export type EnquiryUpdateWithoutLeadActivityLogsInput = {
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_primary?: StringFieldUpdateOperationsInput | string
    phone_secondary?: NullableStringFieldUpdateOperationsInput | string | null
    referred_by?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    course_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EnquiryUncheckedUpdateWithoutLeadActivityLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_primary?: StringFieldUpdateOperationsInput | string
    phone_secondary?: NullableStringFieldUpdateOperationsInput | string | null
    referred_by?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    course_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Lead_activity_logsCreateManyEnquiryInput = {
    id?: number
    enquiryMessage?: string | null
    status: $Enums.LeadStatus
    callbackDateTime: Date | string
    createdBy?: string | null
  }

  export type Lead_activity_logsUpdateWithoutEnquiryInput = {
    enquiryMessage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    callbackDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Lead_activity_logsUncheckedUpdateWithoutEnquiryInput = {
    id?: IntFieldUpdateOperationsInput | number
    enquiryMessage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    callbackDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Lead_activity_logsUncheckedUpdateManyWithoutEnquiryInput = {
    id?: IntFieldUpdateOperationsInput | number
    enquiryMessage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    callbackDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
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