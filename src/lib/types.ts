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
  Date: string
  _sum: {
    FormWork: number;
    Concrete: number;
    Excavation: number;
    Rebar: number;
  };
};