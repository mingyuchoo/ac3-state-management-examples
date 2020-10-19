import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
  endCursor: Scalars['String'];
};

export type Todo = {
  __typename?: 'Todo';
  id: Scalars['Int'];
  text: Scalars['String'];
  completed: Scalars['Boolean'];
};

export type TodosEdge = {
  __typename?: 'TodosEdge';
  node: Todo;
  cursor: Scalars['String'];
};

export type TodosConnection = {
  __typename?: 'TodosConnection';
  edges: Array<Maybe<TodosEdge>>;
  pageInfo: PageInfo;
};

export type TodoNotFoundError = {
  __typename?: 'TodoNotFoundError';
  message: Scalars['String'];
};

export type TodoResult = Todo | TodoNotFoundError;

export type Query = {
  __typename?: 'Query';
  todos: TodosConnection;
  todo: TodoResult;
};


export type QueryTodosArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryTodoArgs = {
  id: Scalars['Int'];
};

export type TodoAlreadyCompletedError = {
  __typename?: 'TodoAlreadyCompletedError';
  message: Scalars['String'];
};

export type CompleteTodoError = TodoNotFoundError | TodoAlreadyCompletedError;

export type CompleteTodoResult = {
  __typename?: 'CompleteTodoResult';
  success: Scalars['Boolean'];
  todo?: Maybe<Todo>;
  error?: Maybe<CompleteTodoError>;
};

export type TodoValidationError = {
  __typename?: 'TodoValidationError';
  message: Scalars['String'];
};

export type AddTodoResult = {
  __typename?: 'AddTodoResult';
  success: Scalars['Boolean'];
  todo?: Maybe<Todo>;
  error?: Maybe<TodoValidationError>;
};

export type ClearCompletedTodosResult = {
  __typename?: 'ClearCompletedTodosResult';
  success: Scalars['Boolean'];
  todos: Array<Maybe<Todo>>;
};

export type CompleteAllTodosResult = {
  __typename?: 'CompleteAllTodosResult';
  success: Scalars['Boolean'];
  todos: Array<Maybe<Todo>>;
};

export type DeleteTodoResult = {
  __typename?: 'DeleteTodoResult';
  success: Scalars['Boolean'];
  todo?: Maybe<Todo>;
  error?: Maybe<TodoNotFoundError>;
};

export type EditTodoError = TodoNotFoundError | TodoValidationError;

export type EditTodoResult = {
  __typename?: 'EditTodoResult';
  success: Scalars['Boolean'];
  todo?: Maybe<Todo>;
  error?: Maybe<EditTodoError>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addTodo: AddTodoResult;
  clearCompletedTodos: ClearCompletedTodosResult;
  completeTodo: CompleteTodoResult;
  completeAllTodos: CompleteAllTodosResult;
  deleteTodo: DeleteTodoResult;
  editTodo: EditTodoResult;
};


export type MutationAddTodoArgs = {
  text: Scalars['String'];
};


export type MutationCompleteTodoArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteTodoArgs = {
  id: Scalars['Int'];
};


export type MutationEditTodoArgs = {
  id: Scalars['Int'];
  text: Scalars['String'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}




export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Todo: ResolverTypeWrapper<Todo>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  TodosEdge: ResolverTypeWrapper<TodosEdge>;
  TodosConnection: ResolverTypeWrapper<TodosConnection>;
  TodoNotFoundError: ResolverTypeWrapper<TodoNotFoundError>;
  TodoResult: ResolversTypes['Todo'] | ResolversTypes['TodoNotFoundError'];
  Query: ResolverTypeWrapper<{}>;
  TodoAlreadyCompletedError: ResolverTypeWrapper<TodoAlreadyCompletedError>;
  CompleteTodoError: ResolversTypes['TodoNotFoundError'] | ResolversTypes['TodoAlreadyCompletedError'];
  CompleteTodoResult: ResolverTypeWrapper<Omit<CompleteTodoResult, 'error'> & { error?: Maybe<ResolversTypes['CompleteTodoError']> }>;
  TodoValidationError: ResolverTypeWrapper<TodoValidationError>;
  AddTodoResult: ResolverTypeWrapper<AddTodoResult>;
  ClearCompletedTodosResult: ResolverTypeWrapper<ClearCompletedTodosResult>;
  CompleteAllTodosResult: ResolverTypeWrapper<CompleteAllTodosResult>;
  DeleteTodoResult: ResolverTypeWrapper<DeleteTodoResult>;
  EditTodoError: ResolversTypes['TodoNotFoundError'] | ResolversTypes['TodoValidationError'];
  EditTodoResult: ResolverTypeWrapper<Omit<EditTodoResult, 'error'> & { error?: Maybe<ResolversTypes['EditTodoError']> }>;
  Mutation: ResolverTypeWrapper<{}>;
  CacheControlScope: CacheControlScope;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  PageInfo: PageInfo;
  Boolean: Scalars['Boolean'];
  String: Scalars['String'];
  Todo: Todo;
  Int: Scalars['Int'];
  TodosEdge: TodosEdge;
  TodosConnection: TodosConnection;
  TodoNotFoundError: TodoNotFoundError;
  TodoResult: ResolversParentTypes['Todo'] | ResolversParentTypes['TodoNotFoundError'];
  Query: {};
  TodoAlreadyCompletedError: TodoAlreadyCompletedError;
  CompleteTodoError: ResolversParentTypes['TodoNotFoundError'] | ResolversParentTypes['TodoAlreadyCompletedError'];
  CompleteTodoResult: Omit<CompleteTodoResult, 'error'> & { error?: Maybe<ResolversParentTypes['CompleteTodoError']> };
  TodoValidationError: TodoValidationError;
  AddTodoResult: AddTodoResult;
  ClearCompletedTodosResult: ClearCompletedTodosResult;
  CompleteAllTodosResult: CompleteAllTodosResult;
  DeleteTodoResult: DeleteTodoResult;
  EditTodoError: ResolversParentTypes['TodoNotFoundError'] | ResolversParentTypes['TodoValidationError'];
  EditTodoResult: Omit<EditTodoResult, 'error'> & { error?: Maybe<ResolversParentTypes['EditTodoError']> };
  Mutation: {};
  Upload: Scalars['Upload'];
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  endCursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TodoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Todo'] = ResolversParentTypes['Todo']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  completed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TodosEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodosEdge'] = ResolversParentTypes['TodosEdge']> = {
  node?: Resolver<ResolversTypes['Todo'], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TodosConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodosConnection'] = ResolversParentTypes['TodosConnection']> = {
  edges?: Resolver<Array<Maybe<ResolversTypes['TodosEdge']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TodoNotFoundErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodoNotFoundError'] = ResolversParentTypes['TodoNotFoundError']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TodoResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodoResult'] = ResolversParentTypes['TodoResult']> = {
  __resolveType: TypeResolveFn<'Todo' | 'TodoNotFoundError', ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  todos?: Resolver<ResolversTypes['TodosConnection'], ParentType, ContextType, RequireFields<QueryTodosArgs, never>>;
  todo?: Resolver<ResolversTypes['TodoResult'], ParentType, ContextType, RequireFields<QueryTodoArgs, 'id'>>;
};

export type TodoAlreadyCompletedErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodoAlreadyCompletedError'] = ResolversParentTypes['TodoAlreadyCompletedError']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompleteTodoErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['CompleteTodoError'] = ResolversParentTypes['CompleteTodoError']> = {
  __resolveType: TypeResolveFn<'TodoNotFoundError' | 'TodoAlreadyCompletedError', ParentType, ContextType>;
};

export type CompleteTodoResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['CompleteTodoResult'] = ResolversParentTypes['CompleteTodoResult']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  todo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['CompleteTodoError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TodoValidationErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodoValidationError'] = ResolversParentTypes['TodoValidationError']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddTodoResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddTodoResult'] = ResolversParentTypes['AddTodoResult']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  todo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['TodoValidationError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClearCompletedTodosResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClearCompletedTodosResult'] = ResolversParentTypes['ClearCompletedTodosResult']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  todos?: Resolver<Array<Maybe<ResolversTypes['Todo']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompleteAllTodosResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['CompleteAllTodosResult'] = ResolversParentTypes['CompleteAllTodosResult']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  todos?: Resolver<Array<Maybe<ResolversTypes['Todo']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteTodoResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteTodoResult'] = ResolversParentTypes['DeleteTodoResult']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  todo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['TodoNotFoundError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EditTodoErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['EditTodoError'] = ResolversParentTypes['EditTodoError']> = {
  __resolveType: TypeResolveFn<'TodoNotFoundError' | 'TodoValidationError', ParentType, ContextType>;
};

export type EditTodoResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['EditTodoResult'] = ResolversParentTypes['EditTodoResult']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  todo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['EditTodoError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addTodo?: Resolver<ResolversTypes['AddTodoResult'], ParentType, ContextType, RequireFields<MutationAddTodoArgs, 'text'>>;
  clearCompletedTodos?: Resolver<ResolversTypes['ClearCompletedTodosResult'], ParentType, ContextType>;
  completeTodo?: Resolver<ResolversTypes['CompleteTodoResult'], ParentType, ContextType, RequireFields<MutationCompleteTodoArgs, 'id'>>;
  completeAllTodos?: Resolver<ResolversTypes['CompleteAllTodosResult'], ParentType, ContextType>;
  deleteTodo?: Resolver<ResolversTypes['DeleteTodoResult'], ParentType, ContextType, RequireFields<MutationDeleteTodoArgs, 'id'>>;
  editTodo?: Resolver<ResolversTypes['EditTodoResult'], ParentType, ContextType, RequireFields<MutationEditTodoArgs, 'id' | 'text'>>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type Resolvers<ContextType = any> = {
  PageInfo?: PageInfoResolvers<ContextType>;
  Todo?: TodoResolvers<ContextType>;
  TodosEdge?: TodosEdgeResolvers<ContextType>;
  TodosConnection?: TodosConnectionResolvers<ContextType>;
  TodoNotFoundError?: TodoNotFoundErrorResolvers<ContextType>;
  TodoResult?: TodoResultResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  TodoAlreadyCompletedError?: TodoAlreadyCompletedErrorResolvers<ContextType>;
  CompleteTodoError?: CompleteTodoErrorResolvers<ContextType>;
  CompleteTodoResult?: CompleteTodoResultResolvers<ContextType>;
  TodoValidationError?: TodoValidationErrorResolvers<ContextType>;
  AddTodoResult?: AddTodoResultResolvers<ContextType>;
  ClearCompletedTodosResult?: ClearCompletedTodosResultResolvers<ContextType>;
  CompleteAllTodosResult?: CompleteAllTodosResultResolvers<ContextType>;
  DeleteTodoResult?: DeleteTodoResultResolvers<ContextType>;
  EditTodoError?: EditTodoErrorResolvers<ContextType>;
  EditTodoResult?: EditTodoResultResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Upload?: GraphQLScalarType;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
