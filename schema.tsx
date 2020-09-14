import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBAHue: any;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  RGBATransparency: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Localization = 'localization',
  Combined = 'combined'
}

export type AboutCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
};

export type PostUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PostWhereUniqueInput;
  /** Upsert data */
  data: PostUpsertInput;
};


export enum _RelationInputCardinality {
  One = 'one',
  Many = 'many'
}

export type ArtistUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: ArtistWhereInput;
  /** Update many input */
  data: ArtistUpdateManyInput;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  postImage_every?: Maybe<PostWhereInput>;
  postImage_some?: Maybe<PostWhereInput>;
  postImage_none?: Maybe<PostWhereInput>;
  postVideoPoster_every?: Maybe<PostWhereInput>;
  postVideoPoster_some?: Maybe<PostWhereInput>;
  postVideoPoster_none?: Maybe<PostWhereInput>;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Upsert data */
  data: AssetUpsertInput;
};


/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  distance: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  image?: Maybe<ImageTransformationInput>;
  document?: Maybe<DocumentTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>;
};

export type ArtistUpdateInput = {
  artistName?: Maybe<Scalars['String']>;
  bandcamp?: Maybe<Scalars['String']>;
  soundcloud?: Maybe<Scalars['String']>;
  spotify?: Maybe<Scalars['String']>;
  iTunes?: Maybe<Scalars['String']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  handle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: Maybe<Scalars['String']>;
  postImage_every?: Maybe<PostWhereInput>;
  postImage_some?: Maybe<PostWhereInput>;
  postImage_none?: Maybe<PostWhereInput>;
  postVideoPoster_every?: Maybe<PostWhereInput>;
  postVideoPoster_some?: Maybe<PostWhereInput>;
  postVideoPoster_none?: Maybe<PostWhereInput>;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

/** References About record uniquely */
export type AboutWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED',
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT'
}

/** Identifies documents */
export type ArtistWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ArtistWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ArtistWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ArtistWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  artistName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  artistName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  artistName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  artistName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  artistName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  artistName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  artistName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  artistName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  artistName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  artistName_not_ends_with?: Maybe<Scalars['String']>;
  bandcamp?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  bandcamp_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  bandcamp_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  bandcamp_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  bandcamp_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  bandcamp_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  bandcamp_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  bandcamp_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  bandcamp_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  bandcamp_not_ends_with?: Maybe<Scalars['String']>;
  soundcloud?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  soundcloud_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  soundcloud_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  soundcloud_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  soundcloud_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  soundcloud_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  soundcloud_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  soundcloud_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  soundcloud_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  soundcloud_not_ends_with?: Maybe<Scalars['String']>;
  spotify?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  spotify_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  spotify_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  spotify_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  spotify_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  spotify_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  spotify_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  spotify_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  spotify_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  spotify_not_ends_with?: Maybe<Scalars['String']>;
  iTunes?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  iTunes_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  iTunes_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  iTunes_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  iTunes_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  iTunes_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  iTunes_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  iTunes_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  iTunes_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  iTunes_not_ends_with?: Maybe<Scalars['String']>;
};


export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   * 
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: Maybe<DocumentFileTypes>;
};

/** An edge in a connection. */
export type AboutEdge = {
  __typename?: 'AboutEdge';
  /** The item at the end of the edge. */
  node: About;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type Post = Node & {
  __typename?: 'Post';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Post>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  category: Categories;
  /** Example Format: March 20th 2020 */
  publishedDate?: Maybe<Scalars['String']>;
  image?: Maybe<Asset>;
  content: RichText;
  link: Scalars['String'];
  bandcampLink?: Maybe<Scalars['String']>;
  releaseContent?: Maybe<RichText>;
  iframe?: Maybe<Scalars['String']>;
  tracklist?: Maybe<RichText>;
  credits?: Maybe<RichText>;
  videoPoster?: Maybe<Asset>;
  /** List of Post versions */
  history: Array<Version>;
};


export type PostDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type PostHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type PostUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PostWhereUniqueInput;
  /** Document to update */
  data: PostUpdateInput;
};


/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};

export type PostUpdateOneInlineInput = {
  /** Create and connect one Post document */
  create?: Maybe<PostCreateInput>;
  /** Update single Post document */
  update?: Maybe<PostUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Post document */
  upsert?: Maybe<PostUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Post document */
  connect?: Maybe<PostWhereUniqueInput>;
  /** Disconnect currently connected Post document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Post document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateManyLocalizationInput>>;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: Maybe<Scalars['Hex']>;
  rgba?: Maybe<RgbaInput>;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** A connection to a list of items. */
export type ArtistConnection = {
  __typename?: 'ArtistConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<ArtistEdge>;
  aggregate: Aggregate;
};

export enum ArtistOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ArtistNameAsc = 'artistName_ASC',
  ArtistNameDesc = 'artistName_DESC',
  BandcampAsc = 'bandcamp_ASC',
  BandcampDesc = 'bandcamp_DESC',
  SoundcloudAsc = 'soundcloud_ASC',
  SoundcloudDesc = 'soundcloud_DESC',
  SpotifyAsc = 'spotify_ASC',
  SpotifyDesc = 'spotify_DESC',
  ITunesAsc = 'iTunes_ASC',
  ITunesDesc = 'iTunes_DESC'
}

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  aggregate: Aggregate;
};

export enum AssetOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC'
}

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
};

/** A connection to a list of items. */
export type PostConnection = {
  __typename?: 'PostConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<PostEdge>;
  aggregate: Aggregate;
};

export type PostUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: PostWhereInput;
  /** Update many input */
  data: PostUpdateManyInput;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<DocumentOutputInput>;
};

export type ArtistUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ArtistWhereUniqueInput;
  /** Upsert data */
  data: ArtistUpsertInput;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
};

/** References Post record uniquely */
export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type PostUpsertInput = {
  /** Create document if it didn't exist */
  create: PostCreateInput;
  /** Update document if it exists */
  update: PostUpdateInput;
};


export type AssetCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetUpsertLocalizationInput = {
  update: AssetUpdateLocalizationDataInput;
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type PostConnectInput = {
  /** Document to connect */
  where: PostWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

export type ArtistUpdateManyInput = {
  artistName?: Maybe<Scalars['String']>;
  bandcamp?: Maybe<Scalars['String']>;
  soundcloud?: Maybe<Scalars['String']>;
  spotify?: Maybe<Scalars['String']>;
  iTunes?: Maybe<Scalars['String']>;
};

export enum _MutationInputFieldKind {
  Scalar = 'scalar',
  RichText = 'richText',
  Enum = 'enum',
  Relation = 'relation',
  Union = 'union',
  Virtual = 'virtual'
}

export type AssetConnectInput = {
  /** Document to connect */
  where: AssetWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** Identifies documents */
export type PostWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PostWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PostWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PostWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  subtitle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subtitle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  subtitle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: Maybe<Scalars['String']>;
  category?: Maybe<Categories>;
  /** All values that are not equal to given value. */
  category_not?: Maybe<Categories>;
  /** All values that are contained in given list. */
  category_in?: Maybe<Array<Categories>>;
  /** All values that are not contained in given list. */
  category_not_in?: Maybe<Array<Categories>>;
  publishedDate?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  publishedDate_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  publishedDate_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  publishedDate_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  publishedDate_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  publishedDate_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  publishedDate_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  publishedDate_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  publishedDate_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  publishedDate_not_ends_with?: Maybe<Scalars['String']>;
  image?: Maybe<AssetWhereInput>;
  link?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  link_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  link_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  link_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  link_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  link_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  link_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  link_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  link_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  link_not_ends_with?: Maybe<Scalars['String']>;
  bandcampLink?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  bandcampLink_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  bandcampLink_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  bandcampLink_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  bandcampLink_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  bandcampLink_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  bandcampLink_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  bandcampLink_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  bandcampLink_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  bandcampLink_not_ends_with?: Maybe<Scalars['String']>;
  iframe?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  iframe_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  iframe_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  iframe_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  iframe_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  iframe_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  iframe_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  iframe_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  iframe_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  iframe_not_ends_with?: Maybe<Scalars['String']>;
  videoPoster?: Maybe<AssetWhereInput>;
};

export type PostUpdateManyInput = {
  title: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  category: Categories;
  publishedDate?: Maybe<Scalars['String']>;
  content: Scalars['RichTextAST'];
  link: Scalars['String'];
  bandcampLink?: Maybe<Scalars['String']>;
  releaseContent?: Maybe<Scalars['RichTextAST']>;
  iframe?: Maybe<Scalars['String']>;
  tracklist?: Maybe<Scalars['RichTextAST']>;
  credits?: Maybe<Scalars['RichTextAST']>;
};


export type AboutUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AboutWhereUniqueInput;
  /** Document to update */
  data: AboutUpdateInput;
};

export type PostCreateManyInlineInput = {
  /** Create and connect multiple existing Post documents */
  create?: Maybe<Array<PostCreateInput>>;
  /** Connect multiple existing Post documents */
  connect?: Maybe<Array<PostWhereUniqueInput>>;
};


export type ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>;
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<ImageFit>;
};

export type ArtistUpsertInput = {
  /** Create document if it didn't exist */
  create: ArtistCreateInput;
  /** Update document if it exists */
  update: ArtistUpdateInput;
};

export enum _MutationKind {
  Create = 'create',
  Publish = 'publish',
  Unpublish = 'unpublish',
  Update = 'update',
  Upsert = 'upsert',
  Delete = 'delete',
  UpdateMany = 'updateMany',
  PublishMany = 'publishMany',
  UnpublishMany = 'unpublishMany',
  DeleteMany = 'deleteMany'
}


/** Identifies documents */
export type AboutManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AboutWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AboutWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AboutWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: AssetWhereInput;
  /** Update many input */
  data: AssetUpdateManyInput;
};

export type AssetCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  postImage?: Maybe<PostCreateManyInlineInput>;
  postVideoPoster?: Maybe<PostCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<AssetCreateLocalizationsInput>;
};

export type AssetUpdateManyInput = {
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<AssetUpdateManyLocalizationsInput>;
};

export type AssetCreateManyInlineInput = {
  /** Create and connect multiple existing Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetWhereUniqueInput>>;
};

export type AboutUpdateInput = {
  description?: Maybe<Scalars['String']>;
};

export type AssetUpdateInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  postImage?: Maybe<PostUpdateManyInlineInput>;
  postVideoPoster?: Maybe<PostUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<AssetUpdateLocalizationsInput>;
};

export type AssetUpdateLocalizationDataInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type Artist = Node & {
  __typename?: 'Artist';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Artist>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  artistName?: Maybe<Scalars['String']>;
  bandcamp?: Maybe<Scalars['String']>;
  soundcloud?: Maybe<Scalars['String']>;
  spotify?: Maybe<Scalars['String']>;
  iTunes?: Maybe<Scalars['String']>;
  /** List of Artist versions */
  history: Array<Version>;
};


export type ArtistDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type ArtistHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export enum AboutOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC'
}

export type ArtistUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ArtistWhereUniqueInput;
  /** Document to update */
  data: ArtistUpdateInput;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type PostCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  category: Categories;
  publishedDate?: Maybe<Scalars['String']>;
  image?: Maybe<AssetCreateOneInlineInput>;
  content: Scalars['RichTextAST'];
  link: Scalars['String'];
  bandcampLink?: Maybe<Scalars['String']>;
  releaseContent?: Maybe<Scalars['RichTextAST']>;
  iframe?: Maybe<Scalars['String']>;
  tracklist?: Maybe<Scalars['RichTextAST']>;
  credits?: Maybe<Scalars['RichTextAST']>;
  videoPoster?: Maybe<AssetCreateOneInlineInput>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type AboutConnection = {
  __typename?: 'AboutConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<AboutEdge>;
  aggregate: Aggregate;
};

export type AssetUpdateManyInlineInput = {
  /** Create and connect multiple Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetConnectInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: Maybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: Maybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Delete multiple Asset documents */
  delete?: Maybe<Array<AssetWhereUniqueInput>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create one about */
  createAbout?: Maybe<About>;
  /** Update one about */
  updateAbout?: Maybe<About>;
  /** Delete one about from _all_ existing stages. Returns deleted document. */
  deleteAbout?: Maybe<About>;
  /** Upsert one about */
  upsertAbout?: Maybe<About>;
  /** Publish one about */
  publishAbout?: Maybe<About>;
  /** Unpublish one about from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAbout?: Maybe<About>;
  /** Update many About documents */
  updateManyAboutsConnection: AboutConnection;
  /** Delete many About documents, return deleted documents */
  deleteManyAboutsConnection: AboutConnection;
  /** Publish many About documents */
  publishManyAboutsConnection: AboutConnection;
  /** Find many About documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAboutsConnection: AboutConnection;
  /**
   * Update many abouts
   * @deprecated Please use the new paginated many mutation (updateManyAboutsConnection)
   */
  updateManyAbouts: BatchPayload;
  /**
   * Delete many About documents
   * @deprecated Please use the new paginated many mutation (deleteManyAboutsConnection)
   */
  deleteManyAbouts: BatchPayload;
  /**
   * Publish many About documents
   * @deprecated Please use the new paginated many mutation (publishManyAboutsConnection)
   */
  publishManyAbouts: BatchPayload;
  /**
   * Unpublish many About documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAboutsConnection)
   */
  unpublishManyAbouts: BatchPayload;
  /** Create one artist */
  createArtist?: Maybe<Artist>;
  /** Update one artist */
  updateArtist?: Maybe<Artist>;
  /** Delete one artist from _all_ existing stages. Returns deleted document. */
  deleteArtist?: Maybe<Artist>;
  /** Upsert one artist */
  upsertArtist?: Maybe<Artist>;
  /** Publish one artist */
  publishArtist?: Maybe<Artist>;
  /** Unpublish one artist from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishArtist?: Maybe<Artist>;
  /** Update many Artist documents */
  updateManyArtistsConnection: ArtistConnection;
  /** Delete many Artist documents, return deleted documents */
  deleteManyArtistsConnection: ArtistConnection;
  /** Publish many Artist documents */
  publishManyArtistsConnection: ArtistConnection;
  /** Find many Artist documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyArtistsConnection: ArtistConnection;
  /**
   * Update many artists
   * @deprecated Please use the new paginated many mutation (updateManyArtistsConnection)
   */
  updateManyArtists: BatchPayload;
  /**
   * Delete many Artist documents
   * @deprecated Please use the new paginated many mutation (deleteManyArtistsConnection)
   */
  deleteManyArtists: BatchPayload;
  /**
   * Publish many Artist documents
   * @deprecated Please use the new paginated many mutation (publishManyArtistsConnection)
   */
  publishManyArtists: BatchPayload;
  /**
   * Unpublish many Artist documents
   * @deprecated Please use the new paginated many mutation (unpublishManyArtistsConnection)
   */
  unpublishManyArtists: BatchPayload;
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Create one post */
  createPost?: Maybe<Post>;
  /** Update one post */
  updatePost?: Maybe<Post>;
  /** Delete one post from _all_ existing stages. Returns deleted document. */
  deletePost?: Maybe<Post>;
  /** Upsert one post */
  upsertPost?: Maybe<Post>;
  /** Publish one post */
  publishPost?: Maybe<Post>;
  /** Unpublish one post from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPost?: Maybe<Post>;
  /** Update many Post documents */
  updateManyPostsConnection: PostConnection;
  /** Delete many Post documents, return deleted documents */
  deleteManyPostsConnection: PostConnection;
  /** Publish many Post documents */
  publishManyPostsConnection: PostConnection;
  /** Find many Post documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPostsConnection: PostConnection;
  /**
   * Update many posts
   * @deprecated Please use the new paginated many mutation (updateManyPostsConnection)
   */
  updateManyPosts: BatchPayload;
  /**
   * Delete many Post documents
   * @deprecated Please use the new paginated many mutation (deleteManyPostsConnection)
   */
  deleteManyPosts: BatchPayload;
  /**
   * Publish many Post documents
   * @deprecated Please use the new paginated many mutation (publishManyPostsConnection)
   */
  publishManyPosts: BatchPayload;
  /**
   * Unpublish many Post documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPostsConnection)
   */
  unpublishManyPosts: BatchPayload;
};


export type MutationCreateAboutArgs = {
  data: AboutCreateInput;
};


export type MutationUpdateAboutArgs = {
  where: AboutWhereUniqueInput;
  data: AboutUpdateInput;
};


export type MutationDeleteAboutArgs = {
  where: AboutWhereUniqueInput;
};


export type MutationUpsertAboutArgs = {
  where: AboutWhereUniqueInput;
  upsert: AboutUpsertInput;
};


export type MutationPublishAboutArgs = {
  where: AboutWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishAboutArgs = {
  where: AboutWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyAboutsConnectionArgs = {
  where?: Maybe<AboutManyWhereInput>;
  data: AboutUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyAboutsConnectionArgs = {
  where?: Maybe<AboutManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyAboutsConnectionArgs = {
  where?: Maybe<AboutManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyAboutsConnectionArgs = {
  where?: Maybe<AboutManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyAboutsArgs = {
  where?: Maybe<AboutManyWhereInput>;
  data: AboutUpdateManyInput;
};


export type MutationDeleteManyAboutsArgs = {
  where?: Maybe<AboutManyWhereInput>;
};


export type MutationPublishManyAboutsArgs = {
  where?: Maybe<AboutManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyAboutsArgs = {
  where?: Maybe<AboutManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateArtistArgs = {
  data: ArtistCreateInput;
};


export type MutationUpdateArtistArgs = {
  where: ArtistWhereUniqueInput;
  data: ArtistUpdateInput;
};


export type MutationDeleteArtistArgs = {
  where: ArtistWhereUniqueInput;
};


export type MutationUpsertArtistArgs = {
  where: ArtistWhereUniqueInput;
  upsert: ArtistUpsertInput;
};


export type MutationPublishArtistArgs = {
  where: ArtistWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishArtistArgs = {
  where: ArtistWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyArtistsConnectionArgs = {
  where?: Maybe<ArtistManyWhereInput>;
  data: ArtistUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyArtistsConnectionArgs = {
  where?: Maybe<ArtistManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyArtistsConnectionArgs = {
  where?: Maybe<ArtistManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyArtistsConnectionArgs = {
  where?: Maybe<ArtistManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyArtistsArgs = {
  where?: Maybe<ArtistManyWhereInput>;
  data: ArtistUpdateManyInput;
};


export type MutationDeleteManyArtistsArgs = {
  where?: Maybe<ArtistManyWhereInput>;
};


export type MutationPublishManyArtistsArgs = {
  where?: Maybe<ArtistManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyArtistsArgs = {
  where?: Maybe<ArtistManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationUpdateAssetArgs = {
  where: AssetWhereUniqueInput;
  data: AssetUpdateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  where: AssetWhereUniqueInput;
  upsert: AssetUpsertInput;
};


export type MutationPublishAssetArgs = {
  where: AssetWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishAssetArgs = {
  where: AssetWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationPublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreatePostArgs = {
  data: PostCreateInput;
};


export type MutationUpdatePostArgs = {
  where: PostWhereUniqueInput;
  data: PostUpdateInput;
};


export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationUpsertPostArgs = {
  where: PostWhereUniqueInput;
  upsert: PostUpsertInput;
};


export type MutationPublishPostArgs = {
  where: PostWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishPostArgs = {
  where: PostWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyPostsConnectionArgs = {
  where?: Maybe<PostManyWhereInput>;
  data: PostUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyPostsConnectionArgs = {
  where?: Maybe<PostManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyPostsConnectionArgs = {
  where?: Maybe<PostManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyPostsConnectionArgs = {
  where?: Maybe<PostManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyPostsArgs = {
  where?: Maybe<PostManyWhereInput>;
  data: PostUpdateManyInput;
};


export type MutationDeleteManyPostsArgs = {
  where?: Maybe<PostManyWhereInput>;
};


export type MutationPublishManyPostsArgs = {
  where?: Maybe<PostManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyPostsArgs = {
  where?: Maybe<PostManyWhereInput>;
  from?: Array<Stage>;
};

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Localization = 'LOCALIZATION',
  Combined = 'COMBINED'
}

export type Version = {
  __typename?: 'Version';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
};

export enum Categories {
  Editorial = 'editorial',
  Event = 'event',
  Radio = 'radio',
  Release = 'release',
  Video = 'video'
}

export type AboutUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: AboutWhereInput;
  /** Update many input */
  data: AboutUpdateManyInput;
};

export type AssetCreateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Connect one existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
};

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

/** Identifies documents */
export type AboutWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AboutWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AboutWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AboutWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
};

export type AboutUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AboutWhereUniqueInput;
  /** Upsert data */
  data: AboutUpsertInput;
};

export enum PostOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  PublishedDateAsc = 'publishedDate_ASC',
  PublishedDateDesc = 'publishedDate_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  BandcampLinkAsc = 'bandcampLink_ASC',
  BandcampLinkDesc = 'bandcampLink_DESC',
  IframeAsc = 'iframe_ASC',
  IframeDesc = 'iframe_DESC'
}

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** An edge in a connection. */
export type ArtistEdge = {
  __typename?: 'ArtistEdge';
  /** The item at the end of the edge. */
  node: Artist;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** References Artist record uniquely */
export type ArtistWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type AssetUpdateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Update single Asset document */
  update?: Maybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: Maybe<AssetUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
  /** Disconnect currently connected Asset document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Asset document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type PostUpdateInput = {
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  category?: Maybe<Categories>;
  publishedDate?: Maybe<Scalars['String']>;
  image?: Maybe<AssetUpdateOneInlineInput>;
  content?: Maybe<Scalars['RichTextAST']>;
  link?: Maybe<Scalars['String']>;
  bandcampLink?: Maybe<Scalars['String']>;
  releaseContent?: Maybe<Scalars['RichTextAST']>;
  iframe?: Maybe<Scalars['String']>;
  tracklist?: Maybe<Scalars['RichTextAST']>;
  credits?: Maybe<Scalars['RichTextAST']>;
  videoPoster?: Maybe<AssetUpdateOneInlineInput>;
};

export enum DocumentFileTypes {
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Png = 'png',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Docx = 'docx',
  Pdf = 'pdf',
  Html = 'html',
  Doc = 'doc',
  Xlsx = 'xlsx',
  Xls = 'xls',
  Pptx = 'pptx',
  Ppt = 'ppt'
}

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max'
}

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<ImageResizeInput>;
};

export type AboutUpsertInput = {
  /** Create document if it didn't exist */
  create: AboutCreateInput;
  /** Update document if it exists */
  update: AboutUpdateInput;
};

/** An edge in a connection. */
export type PostEdge = {
  __typename?: 'PostEdge';
  /** The item at the end of the edge. */
  node: Post;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Document to update */
  data: AssetUpdateInput;
};

export type PostUpdateManyInlineInput = {
  /** Create and connect multiple Post documents */
  create?: Maybe<Array<PostCreateInput>>;
  /** Connect multiple existing Post documents */
  connect?: Maybe<Array<PostConnectInput>>;
  /** Override currently-connected documents with multiple existing Post documents */
  set?: Maybe<Array<PostWhereUniqueInput>>;
  /** Update multiple Post documents */
  update?: Maybe<Array<PostUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Post documents */
  upsert?: Maybe<Array<PostUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Post documents */
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  /** Delete multiple Post documents */
  delete?: Maybe<Array<PostWhereUniqueInput>>;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type About = Node & {
  __typename?: 'About';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<About>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  /** List of About versions */
  history: Array<Version>;
};


export type AboutDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type AboutHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type PostCreateOneInlineInput = {
  /** Create and connect one Post document */
  create?: Maybe<PostCreateInput>;
  /** Connect one existing Post document */
  connect?: Maybe<PostWhereUniqueInput>;
};

export enum _FilterKind {
  Search = 'search',
  And = 'AND',
  Or = 'OR',
  Not = 'NOT',
  Eq = 'eq',
  EqNot = 'eq_not',
  In = 'in',
  NotIn = 'not_in',
  Lt = 'lt',
  Lte = 'lte',
  Gt = 'gt',
  Gte = 'gte',
  Contains = 'contains',
  NotContains = 'not_contains',
  StartsWith = 'starts_with',
  NotStartsWith = 'not_starts_with',
  EndsWith = 'ends_with',
  NotEndsWith = 'not_ends_with',
  ContainsAll = 'contains_all',
  ContainsSome = 'contains_some',
  ContainsNone = 'contains_none',
  RelationalSingle = 'relational_single',
  RelationalEvery = 'relational_every',
  RelationalSome = 'relational_some',
  RelationalNone = 'relational_none'
}

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  hex: Scalars['Hex'];
  rgba: Rgba;
  css: Scalars['String'];
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** The item at the end of the edge. */
  node: Asset;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: Maybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: Maybe<Scalars['ID']>;
  /** Connect document at first position */
  start?: Maybe<Scalars['Boolean']>;
  /** Connect document at last position */
  end?: Maybe<Scalars['Boolean']>;
};

export type ArtistCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  artistName?: Maybe<Scalars['String']>;
  bandcamp?: Maybe<Scalars['String']>;
  soundcloud?: Maybe<Scalars['String']>;
  spotify?: Maybe<Scalars['String']>;
  iTunes?: Maybe<Scalars['String']>;
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** The file handle */
  handle: Scalars['String'];
  /** The file name */
  fileName: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** The file width */
  width?: Maybe<Scalars['Float']>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  postImage: Array<Post>;
  postVideoPoster: Array<Post>;
  /** List of Asset versions */
  history: Array<Version>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPostImageArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Asset system model */
export type AssetPostVideoPosterArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: Maybe<Array<AssetUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type Query = {
  __typename?: 'Query';
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve multiple abouts */
  abouts: Array<About>;
  /** Retrieve a single about */
  about?: Maybe<About>;
  /** Retrieve multiple abouts using the Relay connection interface */
  aboutsConnection: AboutConnection;
  /** Retrieve document version */
  aboutVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple artists */
  artists: Array<Artist>;
  /** Retrieve a single artist */
  artist?: Maybe<Artist>;
  /** Retrieve multiple artists using the Relay connection interface */
  artistsConnection: ArtistConnection;
  /** Retrieve document version */
  artistVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple posts */
  posts: Array<Post>;
  /** Retrieve a single post */
  post?: Maybe<Post>;
  /** Retrieve multiple posts using the Relay connection interface */
  postsConnection: PostConnection;
  /** Retrieve document version */
  postVersion?: Maybe<DocumentVersion>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAboutsArgs = {
  where?: Maybe<AboutWhereInput>;
  orderBy?: Maybe<AboutOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryAboutArgs = {
  where: AboutWhereUniqueInput;
  stage?: Stage;
};


export type QueryAboutsConnectionArgs = {
  where?: Maybe<AboutWhereInput>;
  orderBy?: Maybe<AboutOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryAboutVersionArgs = {
  where: VersionWhereInput;
};


export type QueryArtistsArgs = {
  where?: Maybe<ArtistWhereInput>;
  orderBy?: Maybe<ArtistOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryArtistArgs = {
  where: ArtistWhereUniqueInput;
  stage?: Stage;
};


export type QueryArtistsConnectionArgs = {
  where?: Maybe<ArtistWhereInput>;
  orderBy?: Maybe<ArtistOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryArtistVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetArgs = {
  where: AssetWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetsConnectionArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPostsArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryPostArgs = {
  where: PostWhereUniqueInput;
  stage?: Stage;
};


export type QueryPostsConnectionArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryPostVersionArgs = {
  where: VersionWhereInput;
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
};

export type AboutUpdateManyInput = {
  description?: Maybe<Scalars['String']>;
};

/** Identifies documents */
export type ArtistManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ArtistWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ArtistWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ArtistWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  artistName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  artistName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  artistName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  artistName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  artistName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  artistName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  artistName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  artistName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  artistName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  artistName_not_ends_with?: Maybe<Scalars['String']>;
  bandcamp?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  bandcamp_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  bandcamp_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  bandcamp_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  bandcamp_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  bandcamp_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  bandcamp_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  bandcamp_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  bandcamp_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  bandcamp_not_ends_with?: Maybe<Scalars['String']>;
  soundcloud?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  soundcloud_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  soundcloud_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  soundcloud_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  soundcloud_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  soundcloud_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  soundcloud_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  soundcloud_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  soundcloud_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  soundcloud_not_ends_with?: Maybe<Scalars['String']>;
  spotify?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  spotify_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  spotify_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  spotify_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  spotify_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  spotify_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  spotify_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  spotify_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  spotify_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  spotify_not_ends_with?: Maybe<Scalars['String']>;
  iTunes?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  iTunes_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  iTunes_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  iTunes_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  iTunes_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  iTunes_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  iTunes_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  iTunes_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  iTunes_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  iTunes_not_ends_with?: Maybe<Scalars['String']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

/** Identifies documents */
export type PostManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PostWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PostWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PostWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  subtitle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subtitle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  subtitle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: Maybe<Scalars['String']>;
  category?: Maybe<Categories>;
  /** All values that are not equal to given value. */
  category_not?: Maybe<Categories>;
  /** All values that are contained in given list. */
  category_in?: Maybe<Array<Categories>>;
  /** All values that are not contained in given list. */
  category_not_in?: Maybe<Array<Categories>>;
  publishedDate?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  publishedDate_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  publishedDate_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  publishedDate_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  publishedDate_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  publishedDate_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  publishedDate_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  publishedDate_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  publishedDate_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  publishedDate_not_ends_with?: Maybe<Scalars['String']>;
  image?: Maybe<AssetWhereInput>;
  link?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  link_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  link_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  link_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  link_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  link_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  link_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  link_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  link_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  link_not_ends_with?: Maybe<Scalars['String']>;
  bandcampLink?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  bandcampLink_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  bandcampLink_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  bandcampLink_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  bandcampLink_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  bandcampLink_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  bandcampLink_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  bandcampLink_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  bandcampLink_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  bandcampLink_not_ends_with?: Maybe<Scalars['String']>;
  iframe?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  iframe_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  iframe_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  iframe_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  iframe_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  iframe_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  iframe_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  iframe_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  iframe_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  iframe_not_ends_with?: Maybe<Scalars['String']>;
  videoPoster?: Maybe<AssetWhereInput>;
};

export type PostFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'id' | 'title' | 'subtitle' | 'category' | 'link' | 'bandcampLink' | 'iframe' | 'publishedDate'>
  & { videoPoster?: Maybe<(
    { __typename?: 'Asset' }
    & Pick<Asset, 'url'>
  )>, image?: Maybe<(
    { __typename?: 'Asset' }
    & Pick<Asset, 'url'>
  )>, releaseContent?: Maybe<(
    { __typename?: 'RichText' }
    & Pick<RichText, 'markdown'>
  )>, content: (
    { __typename?: 'RichText' }
    & Pick<RichText, 'markdown'>
  ), credits?: Maybe<(
    { __typename?: 'RichText' }
    & Pick<RichText, 'markdown'>
  )>, tracklist?: Maybe<(
    { __typename?: 'RichText' }
    & Pick<RichText, 'raw' | 'markdown'>
  )> }
);

export type ArtistFragment = (
  { __typename?: 'Artist' }
  & Pick<Artist, 'id' | 'bandcamp' | 'artistName' | 'soundcloud' | 'spotify' | 'iTunes'>
);

export type GetPostsQueryVariables = Exact<{
  where?: Maybe<PostWhereInput>;
  skip?: Maybe<Scalars['Int']>;
}>;


export type GetPostsQuery = (
  { __typename?: 'Query' }
  & { posts: Array<(
    { __typename?: 'Post' }
    & PostFragment
  )> }
);

export type GetPostQueryVariables = Exact<{
  id?: Maybe<Scalars['ID']>;
}>;


export type GetPostQuery = (
  { __typename?: 'Query' }
  & { post?: Maybe<(
    { __typename?: 'Post' }
    & PostFragment
  )> }
);

export type GetArtistsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetArtistsQuery = (
  { __typename?: 'Query' }
  & { artists: Array<(
    { __typename?: 'Artist' }
    & ArtistFragment
  )> }
);

export const PostFragmentDoc = gql`
    fragment Post on Post {
  id
  title
  subtitle
  category
  link
  bandcampLink
  iframe
  publishedDate
  videoPoster {
    url
  }
  image {
    url
  }
  releaseContent {
    markdown
  }
  content {
    markdown
  }
  credits {
    markdown
  }
  tracklist {
    raw
    markdown
  }
}
    `;
export const ArtistFragmentDoc = gql`
    fragment Artist on Artist {
  id
  bandcamp
  artistName
  soundcloud
  spotify
  iTunes
}
    `;
export const GetPostsDocument = gql`
    query getPosts($where: PostWhereInput, $skip: Int) {
  posts(where: $where, skip: $skip) {
    ...Post
  }
}
    ${PostFragmentDoc}`;

/**
 * __useGetPostsQuery__
 *
 * To run a query within a React component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useGetPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
        return Apollo.useQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, baseOptions);
      }
export function useGetPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
          return Apollo.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, baseOptions);
        }
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>;
export type GetPostsLazyQueryHookResult = ReturnType<typeof useGetPostsLazyQuery>;
export type GetPostsQueryResult = Apollo.QueryResult<GetPostsQuery, GetPostsQueryVariables>;
export const GetPostDocument = gql`
    query getPost($id: ID) {
  post(where: {id: $id}) {
    ...Post
  }
}
    ${PostFragmentDoc}`;

/**
 * __useGetPostQuery__
 *
 * To run a query within a React component, call `useGetPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPostQuery(baseOptions?: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
        return Apollo.useQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, baseOptions);
      }
export function useGetPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
          return Apollo.useLazyQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, baseOptions);
        }
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export type GetPostQueryResult = Apollo.QueryResult<GetPostQuery, GetPostQueryVariables>;
export const GetArtistsDocument = gql`
    query getArtists {
  artists {
    ...Artist
  }
}
    ${ArtistFragmentDoc}`;

/**
 * __useGetArtistsQuery__
 *
 * To run a query within a React component, call `useGetArtistsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArtistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArtistsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetArtistsQuery(baseOptions?: Apollo.QueryHookOptions<GetArtistsQuery, GetArtistsQueryVariables>) {
        return Apollo.useQuery<GetArtistsQuery, GetArtistsQueryVariables>(GetArtistsDocument, baseOptions);
      }
export function useGetArtistsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetArtistsQuery, GetArtistsQueryVariables>) {
          return Apollo.useLazyQuery<GetArtistsQuery, GetArtistsQueryVariables>(GetArtistsDocument, baseOptions);
        }
export type GetArtistsQueryHookResult = ReturnType<typeof useGetArtistsQuery>;
export type GetArtistsLazyQueryHookResult = ReturnType<typeof useGetArtistsLazyQuery>;
export type GetArtistsQueryResult = Apollo.QueryResult<GetArtistsQuery, GetArtistsQueryVariables>;