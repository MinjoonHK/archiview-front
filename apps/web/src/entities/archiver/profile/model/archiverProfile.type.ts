import type { ApiResponse } from '@/shared/lib/api/common';

export interface IPlaceInfo {
  placeId: number;
  name: string;
  roadAddress: string;
  detailAddress: string;
  zipCode: string;
  latitude: number;
  longitude: number;
}

export type IPlaceInfoResponseList = IPlaceInfo[];

export interface IArchiverProfileResponse {
  postId: number;
  url: string;
  hashTag: string;
  placeInfoResponseList: IPlaceInfoResponseList;
}

// 아카이버용 장소 정보 관련 조회 API DTO
export type IArchiverProfileResponseDTO = ApiResponse<IArchiverProfileResponse>;

// 내 프로필 조회(아카이버) API DTO
export type IMyProfileResponseDTO = ApiResponse<IArchiverProfileResponse>;
