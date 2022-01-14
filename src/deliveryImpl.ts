import { IOrderWebhook, IServiceTypeCategory, IVehicleTypeCategory } from '.';

const ServiceTypeCategoryCollection: IServiceTypeCategory[] = ['instant', 'sameday', 'regular', 'nextday', 'economy'];
const VehicleTypeCategoryCollection: IVehicleTypeCategory[] = ['bike', 'car', 'other'];

const HznStatusCollection: IOrderWebhook.HZNStatus[] = [
  '',
  'NEW ORDER',
  'ALLOCATING',
  'REJECTED',
  'DRIVER ASSIGNED',
  'PICKING UP',
  'DRIVER NOT FOUND',
  'ITEM PICKED',
  'ON DELIVERY',
  'RECEIVED',
  'COMPLETED',
  'REACTIVATED',
  'ON HOLD',
  'CANCELLED',
  'DELAYED',
  'EXPIRED',
  'RETURNED',
  'FAILED',
  'ORDER MANIFESTED',
  'ALLOCATING COURRIER',
  'COURRIER EN-ROUTE TO PICKUP',
  'PICKUP SUCCEDED',
  'PICKUP FAILED',
  'REASSIGN COURRIER',
  'ARRIVED AT SORTING HUB',
  'ON PROCESS AT SORTING HUB',
  'DEPARTED FROM SORTING HUB',
  'SHIPMENT ARRIVED IN DESTINATION CITY',
  'SHIPMENT IN TRANSIT',
  'DEPARTED TO DESTINATION',
  'SHIPMENT RECEIVED',
  'SHIPMENT FAILED',
  'CANCEL BY SYSTEM',
  'CANCEL BY ADMIN',
  'CANCEL BY USER',
  'ON HOLD',
  'SHIPMENT RETURNED',
  'RETURNED TO SENDER',
];

export { ServiceTypeCategoryCollection, VehicleTypeCategoryCollection, HznStatusCollection };
