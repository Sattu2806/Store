export type ManpowerItem = {
    Value: number | null;
    Month: string;
    Type: string
};

export type AggregatedData = {
    _sum: {
      FormWork: number | null;
      Concrete: number | null;
      Excavation: number | null;
      Rebar: number | null;
    };
  };

export type Monthlydata = {
    Month:string,
    Value:number
}

export type Props = {
    total: AggregatedData,
    monthlydataDirect : Monthlydata[],
     monthlydataInDirect: Monthlydata[], 
     monthlydataEquipment: Monthlydata[]
}

export type WeeklySummaryData = {
    WeekNumber: number;
    _sum: {
      FormWork: number;
      Concrete: number;
      Excavation: number;
      Rebar: number;
    };
  };

export type MonthlyChartData = {
  MonthName: string;
  _sum: {
    FormWork: number;
    Concrete: number;
    Excavation: number;
    Rebar: number;
  };
};

export type TableDataItem = {
  Area:string
  MonthName: string;
  WeekNumber: number;
  date: string
  _sum: {
    excavationQty :number
    formWorkQty   :number
    rebarQty      :number
    concreteQty   :number
  };
};

export type sumQuantityData = {
    totalquantitysum: {
      _sum: {
        totalFoundations: number;
        concreteQty: number;
        excavationQty: number;
        rebarQty: number;
      };
    };
    dailyquantitysum: {
      _sum: {
        formWorkQty: number;
        concreteQty: number;
        excavationQty: number;
        rebarQty: number;
      };
    };
  };


  export interface ImageT {
    id: number;
    url: string;
    description: string;
    slideActive: boolean;
    groupId: number;
    Group: ImageGroup; // This might need to be updated based on the structure of the Group interface
  }
  
export interface ImageGroup {
id: number;
name: string;
Image: ImageT[];
}


// interfaces.ts

export interface Project {
  Discipline: string;
  Area: string;
  Date: Date;
  Excavation: number;
  FormWork: number;
  Rebar: number;
  Concrete: number;
  WeekNumber: number;
  MonthName: string;
}

 export interface MonthlyData {
  Type: string;
  Month: string;
  Value: number;
}

export interface ManpowerData {
  Group?: string;
  category: string;
  Trade: string;
  Year: number;
  Month: string;
  Nos: number;
}

export interface TradeData {
  Type: string;
  Trade: string;
  Month: string;
  Value: number;
}

export interface Group {
  name: string;
}

export interface Category {
  name: string;
  groupId: number;
}

export interface TotalQuantity {
  groupId: number;
  categoryId: number;
  foundationType: string;
  totalFoundations: number;
  excavationQty: number;
  rebarQty: number;
  concreteQty: number;
}

export interface DailyQuantity {
  groupId: number;
  categoryId: number;
  date: Date;
  excavationQty: number;
  formWorkQty: number;
  rebarQty: number;
  concreteQty: number;
  WeekNumber: number;
  MonthName: string;
}

export interface Image {
  url: string;
  description: string;
  slideActive: boolean;
  groupId: number;
}

export interface ProjectMileStone {
  description:string
  startDate:Date
  endDate:Date
  ProjectMileStoneInfo:{
    month  :number
    year   :number
    barwidth  :number
    barleftpostion :number
  }
}


export interface TotalScopeAggregateResult {
  _sum: {
    totalFoundations: number;
    concreteQty: number;
    excavationQty: number;
    rebarQty: number;
  };
}

export type LongLeadItemCategory = {
  id: number;
  name: string;
  LongLeadItems: LongLeadItem[]; // Assuming you have a type for LongLeadItem
};

// // You can reuse the LongLeadItem type from the previous response
// export type LongLeadItem = {
//   id: number;
//   image: string;
//   country: string;
//   categoryId: number;
//   vendor: string;
//   description: string;
//   qty: number;
//   unit: string;
//   deliveryDate: Date;
//   requiredAtSiteDate: Date;
//   deliveryMode: string;
// };


import { DeliveryToSiteStatus, FinalInspectionStatus, LongLeadItem as LongLeadItemModel, ManufacturingStatus, POStatus, PRStatus, RFQStatus, ReceivedQuotationStatus, TechnicalEvaluationStatus, TechnicalPR, } from '@prisma/client';

// export interface ExtendedLongLeadItem extends LongLeadItemModel {
//   category?: LongLeadItemCategory;
//   technicalEvaluation: TechnicalPR;
//   prStatus:TechnicalPR;
//   rfqStatus:
// }


export interface LongLeadItem {
  id: number;
  image: string;
  country: string;
  categoryId: number;
  // LongLeadItemCategory: LongLeadItemCategory;
  vendor: string;
  description: string;
  qty: number;
  unit: string;
  deliveryDate: Date;
  requiredAtSiteDate: Date;
  deliveryMode: string;
  technicalEvaluation: TechnicalEvaluationStatus | null;
  prStatus: PRStatus | null;
  rfqStatus: RFQStatus | null;
  receivedQuotation: ReceivedQuotationStatus | null;
  poStatus: POStatus | null;
  manufacturingStatus: ManufacturingStatus | null;
  finalInspection: FinalInspectionStatus | null;
  deliveryToSite: DeliveryToSiteStatus | null;
}