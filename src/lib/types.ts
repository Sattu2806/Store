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
  id: number;
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
  id: number;
  Type: string;
  Month: string;
  Value: number;
}

export interface ManpowerData {
  id: number;
  Group?: string;
  category: string;
  Trade: string;
  Year: number;
  Month: string;
  Nos: number;
}

export interface TradeData {
  id: number;
  Type: string;
  Trade: string;
  Month: string;
  Value: number;
}

export interface Group {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  name: string;
  groupId: number;
}

export interface TotalQuantity {
  id: number;
  groupId: number;
  categoryId: number;
  foundationType: string;
  totalFoundations: number;
  excavationQty: number;
  rebarQty: number;
  concreteQty: number;
}

export interface DailyQuantity {
  id: number;
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
  id: number;
  url: string;
  description: string;
  slideActive: boolean;
  groupId: number;
}


