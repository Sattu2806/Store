// export const sCurveData = [
//     { month: 'Jan', planned: 100, actual: 80 },
//     { month: 'Feb', planned: 150, actual: 120 },
//     { month: 'Mar', planned: 200, actual: 180 },
//     { month: 'Apr', planned: 250, actual: 220 },
//     { month: 'May', planned: 300, actual: 280 },
//     { month: 'Jun', planned: 350, actual: 320 },
//     { month: 'Jul', planned: 400, actual: 380 },
//     { month: 'Aug', planned: 450, actual: 420 },
//     { month: 'Sep', planned: 500, actual: 480 },
//     { month: 'Oct', planned: 550, actual: 520 },
//     { month: 'Nov', planned: 600, actual: 580 },
//     { month: 'Dec', planned: 650, actual: 620 },
// ]


export const long_lead_item = [
    {
        "ItemID": "R-1234",
        "Description": "50 MW High-Pressure Reactor",
        "Manufacturer": "Acme Engineering",
        "LeadTime(Weeks)": 24,
        "OrderDate": "15/11/2023",
        "ExpectedDeliveryDate": "12/05/2024",
        "Status": "Ordered",
        "Remarks": "Expedited delivery requested due to project timeline."
    },
    {
        "ItemID": "C-7890",
        "Description": "20m Distillation Column",
        "Manufacturer": "ChemTech Industries",
        "LeadTime(Weeks)": 16,
        "OrderDate": "12/12/2023",
        "ExpectedDeliveryDate": "03/04/2024",
        "Status": "In Production",
        "Remarks": "Material selection awaiting final approval."
    },
    {
        "ItemID": "HX-5678",
        "Description": "Heat Exchanger (Shell & Tube)",
        "Manufacturer": "Alfa Laval",
        "LeadTime(Weeks)": 12,
        "OrderDate": "05/12/2023",
        "ExpectedDeliveryDate": "13/03/2024",
        "Status": "Pending Quote",
        "Remarks": "Awaiting final pricing and technical specifications."
    },
    {
        "ItemID": "P-4321",
        "Description": "Centrifugal Pump (250 KW)",
        "Manufacturer": "Grundfos",
        "LeadTime(Weeks)": 8,
        "OrderDate": "20/12/2023",
        "ExpectedDeliveryDate": "21/02/2024",
        "Status": "Quotation Received",
        "Remarks": "Evaluating quotes from multiple vendors."
    },
    {
        "ItemID": "C-2019",
        "Description": "Axial Compressor (High Flow)",
        "Manufacturer": "MAN Energy Solutions",
        "LeadTime(Weeks)": 20,
        "OrderDate": "28/11/2023",
        "ExpectedDeliveryDate": "29/05/2024",
        "Status": "On Backorder",
        "Remarks": "Extended lead time due to high demand."
    },
    {
        "ItemID": "SW-9876",
        "Description": "High-Voltage Switchgear (33 kV)",
        "Manufacturer": "Siemens",
        "LeadTime(Weeks)": 18,
        "OrderDate": "10/12/2023",
        "ExpectedDeliveryDate": "17/04/2024",
        "Status": "Manufacturing Started",
        "Remarks": "Early delivery possible based on current progress."
    },
    {
        "ItemID": "G-1254",
        "Description": "Planetary Gear Reducer",
        "Manufacturer": "Bonfiglioli",
        "LeadTime(Weeks)": 10,
        "OrderDate": "18/12/2023",
        "ExpectedDeliveryDate": "06/03/2024",
        "Status": "Design Review In Progress",
        "Remarks": "Awaiting confirmation on final gear ratios."
    },
    {
        "ItemID": "S-3456",
        "Description": "Ultrasonic Flowmeter",
        "Manufacturer": "Endress+Hauser",
        "LeadTime(Weeks)": 14,
        "OrderDate": "07/12/2023",
        "ExpectedDeliveryDate": "27/03/2024",
        "Status": "Tender Stage",
        "Remarks": "Evaluating proposals from qualified suppliers."
    }
]

export const sCurveData = [
    { year:2023, month: 'Oct', planned: 10, actual: 8 },
    { year:2023, month: 'Nov', planned: 10, actual: 9 },
    { year:2023, month: 'Dec', planned: 10, actual: 7 },
    { year:2024, month: 'Jan', planned: 6, actual: 0 },
    { year:2024, month: 'Feb', planned: 7, actual: 0 },
    { year:2024, month: 'Mar', planned: 8, actual: 0 },
    { year:2024, month: 'Apr', planned: 9, actual: 0 },
    { year:2024, month: 'May', planned: 6, actual: 0 },
    { year:2024, month: 'Jun', planned: 3, actual: 0 },
    { year:2024, month: 'Jul', planned: 1, actual: 0 },
    { year:2024, month: 'Aug', planned: 2, actual: 0 },
    { year:2024, month: 'Sep', planned: 7, actual: 0 },
    { year:2024, month: 'Oct', planned: 6, actual: 0 },
    { year:2024, month: 'Nov', planned: 6, actual: 0 },
    { year:2024, month: 'Dec', planned: 4, actual: 0 },
    { year:2024, month: 'Jan', planned: 5, actual: 0 }
]


export const ConcretePlannedVsActual = [
    {
        "name":"Planned",
        value:5500
    },
    {
        "name":"Actual",
        value:4500
    },
    {
        "name":"Variance",
        value:1000
    }
]

export const NCRTable = [
    {
        "name":"Observed",
        value:80
    },
    {
        "name":"Closed",
        value:50
    },
    {
        "name":"Open",
        value:30
    }
]


export const manpower = [
    {
        "name": "Helper",
        "total": 26
    },
    {
        "name": "Mason",
        "total": 11
    },
    {
        "name": "Carpenter",
        "total": 25
    },
    {
        "name": "Steelfixer",
        "total": 34
    },
    {
        "name": "Opt./Driver",
        "total": 10
    },
    {
        "name": "Foreman",
        "total": 5
    },
    {
        "name": "WPR",
        "total": 5
    },
    {
        "name": "Welders",
        "total": 10
    },
    {
        "name": "Pipe Fitter",
        "total": 15
    },
    {
        "name": "Fabricator",
        "total": 12
    },
    {
        "name": "Hdpe Technician",
        "total": 5
    },
    {
        "name": "Rigger",
        "total": 2
    },
    {
        "name": "Scaffolder",
        "total": 5
    }
]
export const data = [
    {
        "Area": "Tank Form Arear",
        "Date": "1-Jan",
        "Excavation": 100,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "2-Jan",
        "Excavation": 200,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "3-Jan",
        "Excavation": 250,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "4-Jan",
        "Excavation": 300,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "5-Jan",
        "Excavation": 650,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "6-Jan",
        "Excavation": 230,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "7-Jan",
        "Excavation": 680,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "8-Jan",
        "Excavation": 380,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "9-Jan",
        "Excavation": 420,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "10-Jan",
        "Excavation": 230,
        "FormWork": 115,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "11-Jan",
        "Excavation": 850,
        "FormWork": 425,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "12-Jan",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "13-Jan",
        "Excavation": 360,
        "FormWork": 180,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "14-Jan",
        "Excavation": 250,
        "FormWork": 125,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "15-Jan",
        "Excavation": 240,
        "FormWork": 120,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "16-Jan",
        "Excavation": 120,
        "FormWork": 60,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "17-Jan",
        "Excavation": 360,
        "FormWork": 180,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "18-Jan",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "19-Jan",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "20-Jan",
        "Excavation": 480,
        "FormWork": 240,
        "Rebar": 12,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "21-Jan",
        "Excavation": 230,
        "FormWork": 115,
        "Rebar": 5.75,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "22-Jan",
        "Excavation": 590,
        "FormWork": 295,
        "Rebar": 14.75,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "23-Jan",
        "Excavation": 230,
        "FormWork": 115,
        "Rebar": 5.75,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "24-Jan",
        "Excavation": 456,
        "FormWork": 228,
        "Rebar": 11.4,
        "Concrete": 22.8
    },
    {
        "Area": "Tank Form Arear",
        "Date": "25-Jan",
        "Excavation": 750,
        "FormWork": 375,
        "Rebar": 18.75,
        "Concrete": 37.5
    },
    {
        "Area": "Tank Form Arear",
        "Date": "26-Jan",
        "Excavation": 960,
        "FormWork": 480,
        "Rebar": 24,
        "Concrete": 48
    },
    {
        "Area": "Tank Form Arear",
        "Date": "27-Jan",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "28-Jan",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "29-Jan",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "30-Jan",
        "Excavation": 645,
        "FormWork": 322.5,
        "Rebar": 16.125,
        "Concrete": 32.25
    },
    {
        "Area": "Tank Form Arear",
        "Date": "31-Jan",
        "Excavation": 230,
        "FormWork": 115,
        "Rebar": 5.75,
        "Concrete": 11.5
    },
    {
        "Area": "Tank Form Arear",
        "Date": "1-Feb",
        "Excavation": 110,
        "FormWork": 55,
        "Rebar": 2.75,
        "Concrete": 5.5
    },
    {
        "Area": "Tank Form Arear",
        "Date": "2-Feb",
        "Excavation": 220,
        "FormWork": 110,
        "Rebar": 5.5,
        "Concrete": 11
    },
    {
        "Area": "Tank Form Arear",
        "Date": "3-Feb",
        "Excavation": 275,
        "FormWork": 137.5,
        "Rebar": 6.875,
        "Concrete": 13.75
    },
    {
        "Area": "Tank Form Arear",
        "Date": "4-Feb",
        "Excavation": 330,
        "FormWork": 165,
        "Rebar": 8.25,
        "Concrete": 16.5
    },
    {
        "Area": "Tank Form Arear",
        "Date": "5-Feb",
        "Excavation": 715,
        "FormWork": 357.5,
        "Rebar": 17.875,
        "Concrete": 35.75
    },
    {
        "Area": "Tank Form Arear",
        "Date": "6-Feb",
        "Excavation": 253,
        "FormWork": 126.5,
        "Rebar": 6.325,
        "Concrete": 12.65
    },
    {
        "Area": "Tank Form Arear",
        "Date": "7-Feb",
        "Excavation": 748,
        "FormWork": 374,
        "Rebar": 18.7,
        "Concrete": 37.4
    },
    {
        "Area": "Tank Form Arear",
        "Date": "8-Feb",
        "Excavation": 418,
        "FormWork": 209,
        "Rebar": 10.450000000000001,
        "Concrete": 20.900000000000002
    },
    {
        "Area": "Tank Form Arear",
        "Date": "9-Feb",
        "Excavation": 462,
        "FormWork": 231,
        "Rebar": 11.55,
        "Concrete": 23.1
    },
    {
        "Area": "Tank Form Arear",
        "Date": "10-Feb",
        "Excavation": 253,
        "FormWork": 126.5,
        "Rebar": 6.325,
        "Concrete": 12.65
    },
    {
        "Area": "Tank Form Arear",
        "Date": "11-Feb",
        "Excavation": 935,
        "FormWork": 467.5,
        "Rebar": 23.375,
        "Concrete": 46.75
    },
    {
        "Area": "Tank Form Arear",
        "Date": "12-Feb",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "13-Feb",
        "Excavation": 396,
        "FormWork": 198,
        "Rebar": 9.9,
        "Concrete": 19.8
    },
    {
        "Area": "Tank Form Arear",
        "Date": "14-Feb",
        "Excavation": 275,
        "FormWork": 137.5,
        "Rebar": 6.875,
        "Concrete": 13.75
    },
    {
        "Area": "Tank Form Arear",
        "Date": "15-Feb",
        "Excavation": 264,
        "FormWork": 132,
        "Rebar": 6.6000000000000005,
        "Concrete": 13.200000000000001
    },
    {
        "Area": "Tank Form Arear",
        "Date": "16-Feb",
        "Excavation": 132,
        "FormWork": 66,
        "Rebar": 3.3000000000000003,
        "Concrete": 6.6000000000000005
    },
    {
        "Area": "Tank Form Arear",
        "Date": "17-Feb",
        "Excavation": 396,
        "FormWork": 198,
        "Rebar": 9.9,
        "Concrete": 19.8
    },
    {
        "Area": "Tank Form Arear",
        "Date": "18-Feb",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "19-Feb",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "20-Feb",
        "Excavation": 528,
        "FormWork": 264,
        "Rebar": 13.200000000000001,
        "Concrete": 26.400000000000002
    },
    {
        "Area": "Tank Form Arear",
        "Date": "21-Feb",
        "Excavation": 253,
        "FormWork": 126.5,
        "Rebar": 6.325,
        "Concrete": 12.65
    },
    {
        "Area": "Tank Form Arear",
        "Date": "22-Feb",
        "Excavation": 649,
        "FormWork": 324.5,
        "Rebar": 16.225,
        "Concrete": 32.45
    },
    {
        "Area": "Tank Form Arear",
        "Date": "23-Feb",
        "Excavation": 253,
        "FormWork": 126.5,
        "Rebar": 6.325,
        "Concrete": 12.65
    },
    {
        "Area": "Tank Form Arear",
        "Date": "24-Feb",
        "Excavation": 501.6,
        "FormWork": 250.8,
        "Rebar": 12.540000000000001,
        "Concrete": 25.080000000000002
    },
    {
        "Area": "Tank Form Arear",
        "Date": "25-Feb",
        "Excavation": 825,
        "FormWork": 412.5,
        "Rebar": 20.625,
        "Concrete": 41.25
    },
    {
        "Area": "Tank Form Arear",
        "Date": "26-Feb",
        "Excavation": 1056,
        "FormWork": 528,
        "Rebar": 26.400000000000002,
        "Concrete": 52.800000000000004
    },
    {
        "Area": "Tank Form Arear",
        "Date": "27-Feb",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "28-Feb",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "1-Mar",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "2-Mar",
        "Excavation": 709.5,
        "FormWork": 354.75,
        "Rebar": 17.7375,
        "Concrete": 35.475
    },
    {
        "Area": "Tank Form Arear",
        "Date": "3-Mar",
        "Excavation": 253,
        "FormWork": 126.5,
        "Rebar": 6.325,
        "Concrete": 12.65
    },
    {
        "Area": "Tank Form Arear",
        "Date": "4-Mar",
        "Excavation": 115,
        "FormWork": 57.5,
        "Rebar": 2.875,
        "Concrete": 5.75
    },
    {
        "Area": "Tank Form Arear",
        "Date": "5-Mar",
        "Excavation": 230,
        "FormWork": 115,
        "Rebar": 5.75,
        "Concrete": 11.5
    },
    {
        "Area": "Tank Form Arear",
        "Date": "6-Mar",
        "Excavation": 287.5,
        "FormWork": 143.75,
        "Rebar": 7.1875,
        "Concrete": 14.375
    },
    {
        "Area": "Tank Form Arear",
        "Date": "7-Mar",
        "Excavation": 345,
        "FormWork": 172.5,
        "Rebar": 8.625,
        "Concrete": 17.25
    },
    {
        "Area": "Tank Form Arear",
        "Date": "8-Mar",
        "Excavation": 747.5,
        "FormWork": 373.75,
        "Rebar": 18.6875,
        "Concrete": 37.375
    },
    {
        "Area": "Tank Form Arear",
        "Date": "9-Mar",
        "Excavation": 264.5,
        "FormWork": 132.25,
        "Rebar": 6.612500000000001,
        "Concrete": 13.225000000000001
    },
    {
        "Area": "Tank Form Arear",
        "Date": "10-Mar",
        "Excavation": 782,
        "FormWork": 391,
        "Rebar": 19.55,
        "Concrete": 39.1
    },
    {
        "Area": "Tank Form Arear",
        "Date": "11-Mar",
        "Excavation": 437,
        "FormWork": 218.5,
        "Rebar": 10.925,
        "Concrete": 21.85
    },
    {
        "Area": "Tank Form Arear",
        "Date": "12-Mar",
        "Excavation": 483,
        "FormWork": 241.5,
        "Rebar": 12.075000000000001,
        "Concrete": 24.150000000000002
    },
    {
        "Area": "Tank Form Arear",
        "Date": "13-Mar",
        "Excavation": 264.5,
        "FormWork": 132.25,
        "Rebar": 6.612500000000001,
        "Concrete": 13.225000000000001
    },
    {
        "Area": "Tank Form Arear",
        "Date": "14-Mar",
        "Excavation": 977.5,
        "FormWork": 488.75,
        "Rebar": 24.4375,
        "Concrete": 48.875
    },
    {
        "Area": "Tank Form Arear",
        "Date": "15-Mar",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "16-Mar",
        "Excavation": 414,
        "FormWork": 207,
        "Rebar": 10.350000000000001,
        "Concrete": 20.700000000000003
    },
    {
        "Area": "Tank Form Arear",
        "Date": "17-Mar",
        "Excavation": 287.5,
        "FormWork": 143.75,
        "Rebar": 7.1875,
        "Concrete": 14.375
    },
    {
        "Area": "Tank Form Arear",
        "Date": "18-Mar",
        "Excavation": 276,
        "FormWork": 138,
        "Rebar": 6.9,
        "Concrete": 13.8
    },
    {
        "Area": "Tank Form Arear",
        "Date": "19-Mar",
        "Excavation": 138,
        "FormWork": 69,
        "Rebar": 3.45,
        "Concrete": 6.9
    },
    {
        "Area": "Tank Form Arear",
        "Date": "20-Mar",
        "Excavation": 414,
        "FormWork": 207,
        "Rebar": 10.350000000000001,
        "Concrete": 20.700000000000003
    },
    {
        "Area": "Tank Form Arear",
        "Date": "21-Mar",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "22-Mar",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "23-Mar",
        "Excavation": 552,
        "FormWork": 276,
        "Rebar": 13.8,
        "Concrete": 27.6
    },
    {
        "Area": "Tank Form Arear",
        "Date": "24-Mar",
        "Excavation": 264.5,
        "FormWork": 132.25,
        "Rebar": 6.612500000000001,
        "Concrete": 13.225000000000001
    },
    {
        "Area": "Tank Form Arear",
        "Date": "25-Mar",
        "Excavation": 678.5,
        "FormWork": 339.25,
        "Rebar": 16.962500000000002,
        "Concrete": 33.925000000000004
    },
    {
        "Area": "Tank Form Arear",
        "Date": "26-Mar",
        "Excavation": 264.5,
        "FormWork": 132.25,
        "Rebar": 6.612500000000001,
        "Concrete": 13.225000000000001
    },
    {
        "Area": "Tank Form Arear",
        "Date": "27-Mar",
        "Excavation": 524.4,
        "FormWork": 262.2,
        "Rebar": 13.11,
        "Concrete": 26.22
    },
    {
        "Area": "Tank Form Arear",
        "Date": "28-Mar",
        "Excavation": 862.5,
        "FormWork": 431.25,
        "Rebar": 21.5625,
        "Concrete": 43.125
    },
    {
        "Area": "Tank Form Arear",
        "Date": "29-Mar",
        "Excavation": 1104,
        "FormWork": 552,
        "Rebar": 27.6,
        "Concrete": 55.2
    },
    {
        "Area": "Tank Form Arear",
        "Date": "30-Mar",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "31-Mar",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "1-Apr",
        "Excavation": 105,
        "FormWork": 52.5,
        "Rebar": 2.625,
        "Concrete": 5.25
    },
    {
        "Area": "Tank Form Arear",
        "Date": "2-Apr",
        "Excavation": 210,
        "FormWork": 105,
        "Rebar": 5.25,
        "Concrete": 10.5
    },
    {
        "Area": "Tank Form Arear",
        "Date": "3-Apr",
        "Excavation": 262.5,
        "FormWork": 131.25,
        "Rebar": 6.5625,
        "Concrete": 13.125
    },
    {
        "Area": "Tank Form Arear",
        "Date": "4-Apr",
        "Excavation": 315,
        "FormWork": 157.5,
        "Rebar": 7.875,
        "Concrete": 15.75
    },
    {
        "Area": "Tank Form Arear",
        "Date": "5-Apr",
        "Excavation": 682.5,
        "FormWork": 341.25,
        "Rebar": 17.0625,
        "Concrete": 34.125
    },
    {
        "Area": "Tank Form Arear",
        "Date": "6-Apr",
        "Excavation": 241.5,
        "FormWork": 120.75,
        "Rebar": 6.0375000000000005,
        "Concrete": 12.075000000000001
    },
    {
        "Area": "Tank Form Arear",
        "Date": "7-Apr",
        "Excavation": 714,
        "FormWork": 357,
        "Rebar": 17.85,
        "Concrete": 35.7
    },
    {
        "Area": "Tank Form Arear",
        "Date": "8-Apr",
        "Excavation": 399,
        "FormWork": 199.5,
        "Rebar": 9.975000000000001,
        "Concrete": 19.950000000000003
    },
    {
        "Area": "Tank Form Arear",
        "Date": "9-Apr",
        "Excavation": 441,
        "FormWork": 220.5,
        "Rebar": 11.025,
        "Concrete": 22.05
    },
    {
        "Area": "Tank Form Arear",
        "Date": "10-Apr",
        "Excavation": 241.5,
        "FormWork": 120.75,
        "Rebar": 6.0375000000000005,
        "Concrete": 12.075000000000001
    },
    {
        "Area": "Tank Form Arear",
        "Date": "11-Apr",
        "Excavation": 892.5,
        "FormWork": 446.25,
        "Rebar": 22.3125,
        "Concrete": 44.625
    },
    {
        "Area": "Tank Form Arear",
        "Date": "12-Apr",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "13-Apr",
        "Excavation": 378,
        "FormWork": 189,
        "Rebar": 9.450000000000001,
        "Concrete": 18.900000000000002
    },
    {
        "Area": "Tank Form Arear",
        "Date": "14-Apr",
        "Excavation": 262.5,
        "FormWork": 131.25,
        "Rebar": 6.5625,
        "Concrete": 13.125
    },
    {
        "Area": "Tank Form Arear",
        "Date": "15-Apr",
        "Excavation": 252,
        "FormWork": 126,
        "Rebar": 6.300000000000001,
        "Concrete": 12.600000000000001
    },
    {
        "Area": "Tank Form Arear",
        "Date": "16-Apr",
        "Excavation": 126,
        "FormWork": 63,
        "Rebar": 3.1500000000000004,
        "Concrete": 6.300000000000001
    },
    {
        "Area": "Tank Form Arear",
        "Date": "17-Apr",
        "Excavation": 378,
        "FormWork": 189,
        "Rebar": 9.450000000000001,
        "Concrete": 18.900000000000002
    },
    {
        "Area": "Tank Form Arear",
        "Date": "18-Apr",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "19-Apr",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "20-Apr",
        "Excavation": 504,
        "FormWork": 252,
        "Rebar": 12.600000000000001,
        "Concrete": 25.200000000000003
    },
    {
        "Area": "Tank Form Arear",
        "Date": "21-Apr",
        "Excavation": 241.5,
        "FormWork": 120.75,
        "Rebar": 6.0375000000000005,
        "Concrete": 12.075000000000001
    },
    {
        "Area": "Tank Form Arear",
        "Date": "22-Apr",
        "Excavation": 619.5,
        "FormWork": 309.75,
        "Rebar": 15.4875,
        "Concrete": 30.975
    },
    {
        "Area": "Tank Form Arear",
        "Date": "23-Apr",
        "Excavation": 241.5,
        "FormWork": 120.75,
        "Rebar": 6.0375000000000005,
        "Concrete": 12.075000000000001
    },
    {
        "Area": "Tank Form Arear",
        "Date": "24-Apr",
        "Excavation": 478.8,
        "FormWork": 239.4,
        "Rebar": 11.97,
        "Concrete": 23.94
    },
    {
        "Area": "Tank Form Arear",
        "Date": "25-Apr",
        "Excavation": 787.5,
        "FormWork": 393.75,
        "Rebar": 19.6875,
        "Concrete": 39.375
    },
    {
        "Area": "Tank Form Arear",
        "Date": "26-Apr",
        "Excavation": 1008,
        "FormWork": 504,
        "Rebar": 25.200000000000003,
        "Concrete": 50.400000000000006
    },
    {
        "Area": "Tank Form Arear",
        "Date": "27-Apr",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "28-Apr",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "29-Apr",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "30-Apr",
        "Excavation": 677.25,
        "FormWork": 338.625,
        "Rebar": 16.931250000000002,
        "Concrete": 33.862500000000004
    },
    {
        "Area": "Tank Form Arear",
        "Date": "1-May",
        "Excavation": 120,
        "FormWork": 60,
        "Rebar": 3,
        "Concrete": 6
    },
    {
        "Area": "Tank Form Arear",
        "Date": "2-May",
        "Excavation": 240,
        "FormWork": 120,
        "Rebar": 6,
        "Concrete": 12
    },
    {
        "Area": "Tank Form Arear",
        "Date": "3-May",
        "Excavation": 300,
        "FormWork": 150,
        "Rebar": 7.5,
        "Concrete": 15
    },
    {
        "Area": "Tank Form Arear",
        "Date": "4-May",
        "Excavation": 360,
        "FormWork": 180,
        "Rebar": 9,
        "Concrete": 18
    },
    {
        "Area": "Tank Form Arear",
        "Date": "5-May",
        "Excavation": 780,
        "FormWork": 390,
        "Rebar": 19.5,
        "Concrete": 39
    },
    {
        "Area": "Tank Form Arear",
        "Date": "6-May",
        "Excavation": 276,
        "FormWork": 138,
        "Rebar": 6.9,
        "Concrete": 13.8
    },
    {
        "Area": "Tank Form Arear",
        "Date": "7-May",
        "Excavation": 816,
        "FormWork": 408,
        "Rebar": 20.400000000000002,
        "Concrete": 40.800000000000004
    },
    {
        "Area": "Tank Form Arear",
        "Date": "8-May",
        "Excavation": 456,
        "FormWork": 228,
        "Rebar": 11.4,
        "Concrete": 22.8
    },
    {
        "Area": "Tank Form Arear",
        "Date": "9-May",
        "Excavation": 504,
        "FormWork": 252,
        "Rebar": 12.600000000000001,
        "Concrete": 25.200000000000003
    },
    {
        "Area": "Tank Form Arear",
        "Date": "10-May",
        "Excavation": 276,
        "FormWork": 138,
        "Rebar": 6.9,
        "Concrete": 13.8
    },
    {
        "Area": "Tank Form Arear",
        "Date": "11-May",
        "Excavation": 1020,
        "FormWork": 510,
        "Rebar": 25.5,
        "Concrete": 51
    },
    {
        "Area": "Tank Form Arear",
        "Date": "12-May",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "13-May",
        "Excavation": 432,
        "FormWork": 216,
        "Rebar": 10.8,
        "Concrete": 21.6
    },
    {
        "Area": "Tank Form Arear",
        "Date": "14-May",
        "Excavation": 300,
        "FormWork": 150,
        "Rebar": 7.5,
        "Concrete": 15
    },
    {
        "Area": "Tank Form Arear",
        "Date": "15-May",
        "Excavation": 288,
        "FormWork": 144,
        "Rebar": 7.2,
        "Concrete": 14.4
    },
    {
        "Area": "Tank Form Arear",
        "Date": "16-May",
        "Excavation": 144,
        "FormWork": 72,
        "Rebar": 3.6,
        "Concrete": 7.2
    },
    {
        "Area": "Tank Form Arear",
        "Date": "17-May",
        "Excavation": 432,
        "FormWork": 216,
        "Rebar": 10.8,
        "Concrete": 21.6
    },
    {
        "Area": "Tank Form Arear",
        "Date": "18-May",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "19-May",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "20-May",
        "Excavation": 576,
        "FormWork": 288,
        "Rebar": 14.4,
        "Concrete": 28.8
    },
    {
        "Area": "Tank Form Arear",
        "Date": "21-May",
        "Excavation": 276,
        "FormWork": 138,
        "Rebar": 6.9,
        "Concrete": 13.8
    },
    {
        "Area": "Tank Form Arear",
        "Date": "22-May",
        "Excavation": 708,
        "FormWork": 354,
        "Rebar": 17.7,
        "Concrete": 35.4
    },
    {
        "Area": "Tank Form Arear",
        "Date": "23-May",
        "Excavation": 276,
        "FormWork": 138,
        "Rebar": 6.9,
        "Concrete": 13.8
    },
    {
        "Area": "Tank Form Arear",
        "Date": "24-May",
        "Excavation": 547.2,
        "FormWork": 273.6,
        "Rebar": 13.680000000000001,
        "Concrete": 27.360000000000003
    },
    {
        "Area": "Tank Form Arear",
        "Date": "25-May",
        "Excavation": 900,
        "FormWork": 450,
        "Rebar": 22.5,
        "Concrete": 45
    },
    {
        "Area": "Tank Form Arear",
        "Date": "26-May",
        "Excavation": 1152,
        "FormWork": 576,
        "Rebar": 28.8,
        "Concrete": 57.6
    },
    {
        "Area": "Tank Form Arear",
        "Date": "27-May",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "28-May",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "29-May",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "30-May",
        "Excavation": 774,
        "FormWork": 387,
        "Rebar": 19.35,
        "Concrete": 38.7
    },
    {
        "Area": "Tank Form Arear",
        "Date": "31-May",
        "Excavation": 276,
        "FormWork": 138,
        "Rebar": 6.9,
        "Concrete": 13.8
    },
    {
        "Area": "Tank Form Arear",
        "Date": "1-Jun",
        "Excavation": 95,
        "FormWork": 47.5,
        "Rebar": 2.375,
        "Concrete": 4.75
    },
    {
        "Area": "Tank Form Arear",
        "Date": "2-Jun",
        "Excavation": 190,
        "FormWork": 95,
        "Rebar": 4.75,
        "Concrete": 9.5
    },
    {
        "Area": "Tank Form Arear",
        "Date": "3-Jun",
        "Excavation": 237.5,
        "FormWork": 118.75,
        "Rebar": 5.9375,
        "Concrete": 11.875
    },
    {
        "Area": "Tank Form Arear",
        "Date": "4-Jun",
        "Excavation": 285,
        "FormWork": 142.5,
        "Rebar": 7.125,
        "Concrete": 14.25
    },
    {
        "Area": "Tank Form Arear",
        "Date": "5-Jun",
        "Excavation": 617.5,
        "FormWork": 308.75,
        "Rebar": 15.4375,
        "Concrete": 30.875
    },
    {
        "Area": "Tank Form Arear",
        "Date": "6-Jun",
        "Excavation": 218.5,
        "FormWork": 109.25,
        "Rebar": 5.4625,
        "Concrete": 10.925
    },
    {
        "Area": "Tank Form Arear",
        "Date": "7-Jun",
        "Excavation": 646,
        "FormWork": 323,
        "Rebar": 16.150000000000002,
        "Concrete": 32.300000000000004
    },
    {
        "Area": "Tank Form Arear",
        "Date": "8-Jun",
        "Excavation": 361,
        "FormWork": 180.5,
        "Rebar": 9.025,
        "Concrete": 18.05
    },
    {
        "Area": "Tank Form Arear",
        "Date": "9-Jun",
        "Excavation": 399,
        "FormWork": 199.5,
        "Rebar": 9.975000000000001,
        "Concrete": 19.950000000000003
    },
    {
        "Area": "Tank Form Arear",
        "Date": "10-Jun",
        "Excavation": 218.5,
        "FormWork": 109.25,
        "Rebar": 5.4625,
        "Concrete": 10.925
    },
    {
        "Area": "Tank Form Arear",
        "Date": "11-Jun",
        "Excavation": 807.5,
        "FormWork": 403.75,
        "Rebar": 20.1875,
        "Concrete": 40.375
    },
    {
        "Area": "Tank Form Arear",
        "Date": "12-Jun",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "13-Jun",
        "Excavation": 342,
        "FormWork": 171,
        "Rebar": 8.55,
        "Concrete": 17.1
    },
    {
        "Area": "Tank Form Arear",
        "Date": "14-Jun",
        "Excavation": 237.5,
        "FormWork": 118.75,
        "Rebar": 5.9375,
        "Concrete": 11.875
    },
    {
        "Area": "Tank Form Arear",
        "Date": "15-Jun",
        "Excavation": 228,
        "FormWork": 114,
        "Rebar": 5.7,
        "Concrete": 11.4
    },
    {
        "Area": "Tank Form Arear",
        "Date": "16-Jun",
        "Excavation": 114,
        "FormWork": 57,
        "Rebar": 2.85,
        "Concrete": 5.7
    },
    {
        "Area": "Tank Form Arear",
        "Date": "17-Jun",
        "Excavation": 342,
        "FormWork": 171,
        "Rebar": 8.55,
        "Concrete": 17.1
    },
    {
        "Area": "Tank Form Arear",
        "Date": "18-Jun",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "19-Jun",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "20-Jun",
        "Excavation": 456,
        "FormWork": 228,
        "Rebar": 11.4,
        "Concrete": 22.8
    },
    {
        "Area": "Tank Form Arear",
        "Date": "21-Jun",
        "Excavation": 218.5,
        "FormWork": 109.25,
        "Rebar": 5.4625,
        "Concrete": 10.925
    },
    {
        "Area": "Tank Form Arear",
        "Date": "22-Jun",
        "Excavation": 560.5,
        "FormWork": 280.25,
        "Rebar": 14.012500000000001,
        "Concrete": 28.025000000000002
    },
    {
        "Area": "Tank Form Arear",
        "Date": "23-Jun",
        "Excavation": 218.5,
        "FormWork": 109.25,
        "Rebar": 5.4625,
        "Concrete": 10.925
    },
    {
        "Area": "Tank Form Arear",
        "Date": "24-Jun",
        "Excavation": 433.2,
        "FormWork": 216.6,
        "Rebar": 10.83,
        "Concrete": 21.66
    },
    {
        "Area": "Tank Form Arear",
        "Date": "25-Jun",
        "Excavation": 712.5,
        "FormWork": 356.25,
        "Rebar": 17.8125,
        "Concrete": 35.625
    },
    {
        "Area": "Tank Form Arear",
        "Date": "26-Jun",
        "Excavation": 912,
        "FormWork": 456,
        "Rebar": 22.8,
        "Concrete": 45.6
    },
    {
        "Area": "Tank Form Arear",
        "Date": "27-Jun",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "28-Jun",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "29-Jun",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "30-Jun",
        "Excavation": 612.75,
        "FormWork": 306.375,
        "Rebar": 15.318750000000001,
        "Concrete": 30.637500000000003
    },
    {
        "Area": "Tank Form Arear",
        "Date": "1-Jul",
        "Excavation": 90,
        "FormWork": 45,
        "Rebar": 2.25,
        "Concrete": 4.5
    },
    {
        "Area": "Tank Form Arear",
        "Date": "2-Jul",
        "Excavation": 180,
        "FormWork": 90,
        "Rebar": 4.5,
        "Concrete": 9
    },
    {
        "Area": "Tank Form Arear",
        "Date": "3-Jul",
        "Excavation": 225,
        "FormWork": 112.5,
        "Rebar": 5.625,
        "Concrete": 11.25
    },
    {
        "Area": "Tank Form Arear",
        "Date": "4-Jul",
        "Excavation": 270,
        "FormWork": 135,
        "Rebar": 6.75,
        "Concrete": 13.5
    },
    {
        "Area": "Tank Form Arear",
        "Date": "5-Jul",
        "Excavation": 585,
        "FormWork": 292.5,
        "Rebar": 14.625,
        "Concrete": 29.25
    },
    {
        "Area": "Tank Form Arear",
        "Date": "6-Jul",
        "Excavation": 207,
        "FormWork": 103.5,
        "Rebar": 5.175000000000001,
        "Concrete": 10.350000000000001
    },
    {
        "Area": "Tank Form Arear",
        "Date": "7-Jul",
        "Excavation": 612,
        "FormWork": 306,
        "Rebar": 15.3,
        "Concrete": 30.6
    },
    {
        "Area": "Tank Form Arear",
        "Date": "8-Jul",
        "Excavation": 342,
        "FormWork": 171,
        "Rebar": 8.55,
        "Concrete": 17.1
    },
    {
        "Area": "Tank Form Arear",
        "Date": "9-Jul",
        "Excavation": 378,
        "FormWork": 189,
        "Rebar": 9.450000000000001,
        "Concrete": 18.900000000000002
    },
    {
        "Area": "Tank Form Arear",
        "Date": "10-Jul",
        "Excavation": 207,
        "FormWork": 103.5,
        "Rebar": 5.175000000000001,
        "Concrete": 10.350000000000001
    },
    {
        "Area": "Tank Form Arear",
        "Date": "11-Jul",
        "Excavation": 765,
        "FormWork": 382.5,
        "Rebar": 19.125,
        "Concrete": 38.25
    },
    {
        "Area": "Tank Form Arear",
        "Date": "12-Jul",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "13-Jul",
        "Excavation": 324,
        "FormWork": 162,
        "Rebar": 8.1,
        "Concrete": 16.2
    },
    {
        "Area": "Tank Form Arear",
        "Date": "14-Jul",
        "Excavation": 225,
        "FormWork": 112.5,
        "Rebar": 5.625,
        "Concrete": 11.25
    },
    {
        "Area": "Tank Form Arear",
        "Date": "15-Jul",
        "Excavation": 216,
        "FormWork": 108,
        "Rebar": 5.4,
        "Concrete": 10.8
    },
    {
        "Area": "Tank Form Arear",
        "Date": "16-Jul",
        "Excavation": 108,
        "FormWork": 54,
        "Rebar": 2.7,
        "Concrete": 5.4
    },
    {
        "Area": "Tank Form Arear",
        "Date": "17-Jul",
        "Excavation": 324,
        "FormWork": 162,
        "Rebar": 8.1,
        "Concrete": 16.2
    },
    {
        "Area": "Tank Form Arear",
        "Date": "18-Jul",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "19-Jul",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "20-Jul",
        "Excavation": 432,
        "FormWork": 216,
        "Rebar": 10.8,
        "Concrete": 21.6
    },
    {
        "Area": "Tank Form Arear",
        "Date": "21-Jul",
        "Excavation": 207,
        "FormWork": 103.5,
        "Rebar": 5.175000000000001,
        "Concrete": 10.350000000000001
    },
    {
        "Area": "Tank Form Arear",
        "Date": "22-Jul",
        "Excavation": 531,
        "FormWork": 265.5,
        "Rebar": 13.275,
        "Concrete": 26.55
    },
    {
        "Area": "Tank Form Arear",
        "Date": "23-Jul",
        "Excavation": 207,
        "FormWork": 103.5,
        "Rebar": 5.175000000000001,
        "Concrete": 10.350000000000001
    },
    {
        "Area": "Tank Form Arear",
        "Date": "24-Jul",
        "Excavation": 410.4,
        "FormWork": 205.2,
        "Rebar": 10.26,
        "Concrete": 20.52
    },
    {
        "Area": "Tank Form Arear",
        "Date": "25-Jul",
        "Excavation": 675,
        "FormWork": 337.5,
        "Rebar": 16.875,
        "Concrete": 33.75
    },
    {
        "Area": "Tank Form Arear",
        "Date": "26-Jul",
        "Excavation": 864,
        "FormWork": 432,
        "Rebar": 21.6,
        "Concrete": 43.2
    },
    {
        "Area": "Tank Form Arear",
        "Date": "27-Jul",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "28-Jul",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "29-Jul",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "30-Jul",
        "Excavation": 580.5,
        "FormWork": 290.25,
        "Rebar": 14.512500000000001,
        "Concrete": 29.025000000000002
    },
    {
        "Area": "Tank Form Arear",
        "Date": "31-Jul",
        "Excavation": 207,
        "FormWork": 103.5,
        "Rebar": 5.175000000000001,
        "Concrete": 10.350000000000001
    },
    {
        "Area": "Tank Form Arear",
        "Date": "1-Aug",
        "Excavation": 85,
        "FormWork": 42.5,
        "Rebar": 2.125,
        "Concrete": 4.25
    },
    {
        "Area": "Tank Form Arear",
        "Date": "2-Aug",
        "Excavation": 170,
        "FormWork": 85,
        "Rebar": 4.25,
        "Concrete": 8.5
    },
    {
        "Area": "Tank Form Arear",
        "Date": "3-Aug",
        "Excavation": 212.5,
        "FormWork": 106.25,
        "Rebar": 5.3125,
        "Concrete": 10.625
    },
    {
        "Area": "Tank Form Arear",
        "Date": "4-Aug",
        "Excavation": 255,
        "FormWork": 127.5,
        "Rebar": 6.375,
        "Concrete": 12.75
    },
    {
        "Area": "Tank Form Arear",
        "Date": "5-Aug",
        "Excavation": 552.5,
        "FormWork": 276.25,
        "Rebar": 13.8125,
        "Concrete": 27.625
    },
    {
        "Area": "Tank Form Arear",
        "Date": "6-Aug",
        "Excavation": 195.5,
        "FormWork": 97.75,
        "Rebar": 4.8875,
        "Concrete": 9.775
    },
    {
        "Area": "Tank Form Arear",
        "Date": "7-Aug",
        "Excavation": 578,
        "FormWork": 289,
        "Rebar": 14.450000000000001,
        "Concrete": 28.900000000000002
    },
    {
        "Area": "Tank Form Arear",
        "Date": "8-Aug",
        "Excavation": 323,
        "FormWork": 161.5,
        "Rebar": 8.075000000000001,
        "Concrete": 16.150000000000002
    },
    {
        "Area": "Tank Form Arear",
        "Date": "9-Aug",
        "Excavation": 357,
        "FormWork": 178.5,
        "Rebar": 8.925,
        "Concrete": 17.85
    },
    {
        "Area": "Tank Form Arear",
        "Date": "10-Aug",
        "Excavation": 195.5,
        "FormWork": 97.75,
        "Rebar": 4.8875,
        "Concrete": 9.775
    },
    {
        "Area": "Tank Form Arear",
        "Date": "11-Aug",
        "Excavation": 722.5,
        "FormWork": 361.25,
        "Rebar": 18.0625,
        "Concrete": 36.125
    },
    {
        "Area": "Tank Form Arear",
        "Date": "12-Aug",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "13-Aug",
        "Excavation": 306,
        "FormWork": 153,
        "Rebar": 7.65,
        "Concrete": 15.3
    },
    {
        "Area": "Tank Form Arear",
        "Date": "14-Aug",
        "Excavation": 212.5,
        "FormWork": 106.25,
        "Rebar": 5.3125,
        "Concrete": 10.625
    },
    {
        "Area": "Tank Form Arear",
        "Date": "15-Aug",
        "Excavation": 204,
        "FormWork": 102,
        "Rebar": 5.1000000000000005,
        "Concrete": 10.200000000000001
    },
    {
        "Area": "Tank Form Arear",
        "Date": "16-Aug",
        "Excavation": 102,
        "FormWork": 51,
        "Rebar": 2.5500000000000003,
        "Concrete": 5.1000000000000005
    },
    {
        "Area": "Tank Form Arear",
        "Date": "17-Aug",
        "Excavation": 306,
        "FormWork": 153,
        "Rebar": 7.65,
        "Concrete": 15.3
    },
    {
        "Area": "Tank Form Arear",
        "Date": "18-Aug",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "19-Aug",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "20-Aug",
        "Excavation": 408,
        "FormWork": 204,
        "Rebar": 10.200000000000001,
        "Concrete": 20.400000000000002
    },
    {
        "Area": "Tank Form Arear",
        "Date": "21-Aug",
        "Excavation": 195.5,
        "FormWork": 97.75,
        "Rebar": 4.8875,
        "Concrete": 9.775
    },
    {
        "Area": "Tank Form Arear",
        "Date": "22-Aug",
        "Excavation": 501.5,
        "FormWork": 250.75,
        "Rebar": 12.537500000000001,
        "Concrete": 25.075000000000003
    },
    {
        "Area": "Tank Form Arear",
        "Date": "23-Aug",
        "Excavation": 195.5,
        "FormWork": 97.75,
        "Rebar": 4.8875,
        "Concrete": 9.775
    },
    {
        "Area": "Tank Form Arear",
        "Date": "24-Aug",
        "Excavation": 387.6,
        "FormWork": 193.8,
        "Rebar": 9.690000000000001,
        "Concrete": 19.380000000000003
    },
    {
        "Area": "Tank Form Arear",
        "Date": "25-Aug",
        "Excavation": 637.5,
        "FormWork": 318.75,
        "Rebar": 15.9375,
        "Concrete": 31.875
    },
    {
        "Area": "Tank Form Arear",
        "Date": "26-Aug",
        "Excavation": 816,
        "FormWork": 408,
        "Rebar": 20.400000000000002,
        "Concrete": 40.800000000000004
    },
    {
        "Area": "Tank Form Arear",
        "Date": "27-Aug",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "28-Aug",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "29-Aug",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "30-Aug",
        "Excavation": 548.25,
        "FormWork": 274.125,
        "Rebar": 13.70625,
        "Concrete": 27.4125
    },
    {
        "Area": "Tank Form Arear",
        "Date": "31-Aug",
        "Excavation": 195.5,
        "FormWork": 97.75,
        "Rebar": 4.8875,
        "Concrete": 9.775
    },
    {
        "Area": "Tank Form Arear",
        "Date": "1-Sep",
        "Excavation": 80,
        "FormWork": 40,
        "Rebar": 2,
        "Concrete": 4
    },
    {
        "Area": "Tank Form Arear",
        "Date": "2-Sep",
        "Excavation": 160,
        "FormWork": 80,
        "Rebar": 4,
        "Concrete": 8
    },
    {
        "Area": "Tank Form Arear",
        "Date": "3-Sep",
        "Excavation": 200,
        "FormWork": 100,
        "Rebar": 5,
        "Concrete": 10
    },
    {
        "Area": "Tank Form Arear",
        "Date": "4-Sep",
        "Excavation": 240,
        "FormWork": 120,
        "Rebar": 6,
        "Concrete": 12
    },
    {
        "Area": "Tank Form Arear",
        "Date": "5-Sep",
        "Excavation": 520,
        "FormWork": 260,
        "Rebar": 13,
        "Concrete": 26
    },
    {
        "Area": "Tank Form Arear",
        "Date": "6-Sep",
        "Excavation": 184,
        "FormWork": 92,
        "Rebar": 4.6000000000000005,
        "Concrete": 9.200000000000001
    },
    {
        "Area": "Tank Form Arear",
        "Date": "7-Sep",
        "Excavation": 544,
        "FormWork": 272,
        "Rebar": 13.600000000000001,
        "Concrete": 27.200000000000003
    },
    {
        "Area": "Tank Form Arear",
        "Date": "8-Sep",
        "Excavation": 304,
        "FormWork": 152,
        "Rebar": 7.6000000000000005,
        "Concrete": 15.200000000000001
    },
    {
        "Area": "Tank Form Arear",
        "Date": "9-Sep",
        "Excavation": 336,
        "FormWork": 168,
        "Rebar": 8.4,
        "Concrete": 16.8
    },
    {
        "Area": "Tank Form Arear",
        "Date": "10-Sep",
        "Excavation": 184,
        "FormWork": 92,
        "Rebar": 4.6000000000000005,
        "Concrete": 9.200000000000001
    },
    {
        "Area": "Tank Form Arear",
        "Date": "11-Sep",
        "Excavation": 680,
        "FormWork": 340,
        "Rebar": 17,
        "Concrete": 34
    },
    {
        "Area": "Tank Form Arear",
        "Date": "12-Sep",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "13-Sep",
        "Excavation": 288,
        "FormWork": 144,
        "Rebar": 7.2,
        "Concrete": 14.4
    },
    {
        "Area": "Tank Form Arear",
        "Date": "14-Sep",
        "Excavation": 200,
        "FormWork": 100,
        "Rebar": 5,
        "Concrete": 10
    },
    {
        "Area": "Tank Form Arear",
        "Date": "15-Sep",
        "Excavation": 192,
        "FormWork": 96,
        "Rebar": 4.800000000000001,
        "Concrete": 9.600000000000001
    },
    {
        "Area": "Tank Form Arear",
        "Date": "16-Sep",
        "Excavation": 96,
        "FormWork": 48,
        "Rebar": 2.4000000000000004,
        "Concrete": 4.800000000000001
    },
    {
        "Area": "Tank Form Arear",
        "Date": "17-Sep",
        "Excavation": 288,
        "FormWork": 144,
        "Rebar": 7.2,
        "Concrete": 14.4
    },
    {
        "Area": "Tank Form Arear",
        "Date": "18-Sep",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "19-Sep",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "20-Sep",
        "Excavation": 384,
        "FormWork": 192,
        "Rebar": 9.600000000000001,
        "Concrete": 19.200000000000003
    },
    {
        "Area": "Tank Form Arear",
        "Date": "21-Sep",
        "Excavation": 184,
        "FormWork": 92,
        "Rebar": 4.6000000000000005,
        "Concrete": 9.200000000000001
    },
    {
        "Area": "Tank Form Arear",
        "Date": "22-Sep",
        "Excavation": 472,
        "FormWork": 236,
        "Rebar": 11.8,
        "Concrete": 23.6
    },
    {
        "Area": "Tank Form Arear",
        "Date": "23-Sep",
        "Excavation": 184,
        "FormWork": 92,
        "Rebar": 4.6000000000000005,
        "Concrete": 9.200000000000001
    },
    {
        "Area": "Tank Form Arear",
        "Date": "24-Sep",
        "Excavation": 364.8,
        "FormWork": 182.4,
        "Rebar": 9.120000000000001,
        "Concrete": 18.240000000000002
    },
    {
        "Area": "Tank Form Arear",
        "Date": "25-Sep",
        "Excavation": 600,
        "FormWork": 300,
        "Rebar": 15,
        "Concrete": 30
    },
    {
        "Area": "Tank Form Arear",
        "Date": "26-Sep",
        "Excavation": 768,
        "FormWork": 384,
        "Rebar": 19.200000000000003,
        "Concrete": 38.400000000000006
    },
    {
        "Area": "Tank Form Arear",
        "Date": "27-Sep",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "28-Sep",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "29-Sep",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "30-Sep",
        "Excavation": 516,
        "FormWork": 258,
        "Rebar": 12.9,
        "Concrete": 25.8
    },
    {
        "Area": "Tank Form Arear",
        "Date": "1-Oct",
        "Excavation": 184,
        "FormWork": 92,
        "Rebar": 4.6000000000000005,
        "Concrete": 9.200000000000001
    },
    {
        "Area": "Tank Form Arear",
        "Date": "2-Oct",
        "Excavation": 78,
        "FormWork": 39,
        "Rebar": 1.9500000000000002,
        "Concrete": 3.9000000000000004
    },
    {
        "Area": "Tank Form Arear",
        "Date": "3-Oct",
        "Excavation": 156,
        "FormWork": 78,
        "Rebar": 3.9000000000000004,
        "Concrete": 7.800000000000001
    },
    {
        "Area": "Tank Form Arear",
        "Date": "4-Oct",
        "Excavation": 195,
        "FormWork": 97.5,
        "Rebar": 4.875,
        "Concrete": 9.75
    },
    {
        "Area": "Tank Form Arear",
        "Date": "5-Oct",
        "Excavation": 234,
        "FormWork": 117,
        "Rebar": 5.8500000000000005,
        "Concrete": 11.700000000000001
    },
    {
        "Area": "Tank Form Arear",
        "Date": "6-Oct",
        "Excavation": 507,
        "FormWork": 253.5,
        "Rebar": 12.675,
        "Concrete": 25.35
    },
    {
        "Area": "Tank Form Arear",
        "Date": "7-Oct",
        "Excavation": 179.4,
        "FormWork": 89.7,
        "Rebar": 4.485,
        "Concrete": 8.97
    },
    {
        "Area": "Tank Form Arear",
        "Date": "8-Oct",
        "Excavation": 530.4,
        "FormWork": 265.2,
        "Rebar": 13.26,
        "Concrete": 26.52
    },
    {
        "Area": "Tank Form Arear",
        "Date": "9-Oct",
        "Excavation": 296.4,
        "FormWork": 148.2,
        "Rebar": 7.41,
        "Concrete": 14.82
    },
    {
        "Area": "Tank Form Arear",
        "Date": "10-Oct",
        "Excavation": 327.6,
        "FormWork": 163.8,
        "Rebar": 8.190000000000001,
        "Concrete": 16.380000000000003
    },
    {
        "Area": "Tank Form Arear",
        "Date": "11-Oct",
        "Excavation": 179.4,
        "FormWork": 89.7,
        "Rebar": 4.485,
        "Concrete": 8.97
    },
    {
        "Area": "Tank Form Arear",
        "Date": "12-Oct",
        "Excavation": 663,
        "FormWork": 331.5,
        "Rebar": 16.575,
        "Concrete": 33.15
    },
    {
        "Area": "Tank Form Arear",
        "Date": "13-Oct",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "14-Oct",
        "Excavation": 280.8,
        "FormWork": 140.4,
        "Rebar": 7.0200000000000005,
        "Concrete": 14.040000000000001
    },
    {
        "Area": "Tank Form Arear",
        "Date": "15-Oct",
        "Excavation": 195,
        "FormWork": 97.5,
        "Rebar": 4.875,
        "Concrete": 9.75
    },
    {
        "Area": "Tank Form Arear",
        "Date": "16-Oct",
        "Excavation": 187.2,
        "FormWork": 93.6,
        "Rebar": 4.68,
        "Concrete": 9.36
    },
    {
        "Area": "Tank Form Arear",
        "Date": "17-Oct",
        "Excavation": 93.6,
        "FormWork": 46.8,
        "Rebar": 2.34,
        "Concrete": 4.68
    },
    {
        "Area": "Tank Form Arear",
        "Date": "18-Oct",
        "Excavation": 280.8,
        "FormWork": 140.4,
        "Rebar": 7.0200000000000005,
        "Concrete": 14.040000000000001
    },
    {
        "Area": "Tank Form Arear",
        "Date": "19-Oct",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "20-Oct",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "21-Oct",
        "Excavation": 374.4,
        "FormWork": 187.2,
        "Rebar": 9.36,
        "Concrete": 18.72
    },
    {
        "Area": "Tank Form Arear",
        "Date": "22-Oct",
        "Excavation": 179.4,
        "FormWork": 89.7,
        "Rebar": 4.485,
        "Concrete": 8.97
    },
    {
        "Area": "Tank Form Arear",
        "Date": "23-Oct",
        "Excavation": 460.2,
        "FormWork": 230.1,
        "Rebar": 11.505,
        "Concrete": 23.01
    },
    {
        "Area": "Tank Form Arear",
        "Date": "24-Oct",
        "Excavation": 179.4,
        "FormWork": 89.7,
        "Rebar": 4.485,
        "Concrete": 8.97
    },
    {
        "Area": "Tank Form Arear",
        "Date": "25-Oct",
        "Excavation": 355.68,
        "FormWork": 177.84,
        "Rebar": 8.892000000000001,
        "Concrete": 17.784000000000002
    },
    {
        "Area": "Tank Form Arear",
        "Date": "26-Oct",
        "Excavation": 585,
        "FormWork": 292.5,
        "Rebar": 14.625,
        "Concrete": 29.25
    },
    {
        "Area": "Tank Form Arear",
        "Date": "27-Oct",
        "Excavation": 748.8,
        "FormWork": 374.4,
        "Rebar": 18.72,
        "Concrete": 37.44
    },
    {
        "Area": "Tank Form Arear",
        "Date": "28-Oct",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "29-Oct",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "30-Oct",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "31-Oct",
        "Excavation": 503.1,
        "FormWork": 251.55,
        "Rebar": 12.5775,
        "Concrete": 25.155
    },
    {
        "Area": "Tank Form Arear",
        "Date": "1-Nov",
        "Excavation": 79,
        "FormWork": 39.5,
        "Rebar": 1.975,
        "Concrete": 3.95
    },
    {
        "Area": "Tank Form Arear",
        "Date": "2-Nov",
        "Excavation": 158,
        "FormWork": 79,
        "Rebar": 3.95,
        "Concrete": 7.9
    },
    {
        "Area": "Tank Form Arear",
        "Date": "3-Nov",
        "Excavation": 197.5,
        "FormWork": 98.75,
        "Rebar": 4.9375,
        "Concrete": 9.875
    },
    {
        "Area": "Tank Form Arear",
        "Date": "4-Nov",
        "Excavation": 237,
        "FormWork": 118.5,
        "Rebar": 5.925000000000001,
        "Concrete": 11.850000000000001
    },
    {
        "Area": "Tank Form Arear",
        "Date": "5-Nov",
        "Excavation": 513.5,
        "FormWork": 256.75,
        "Rebar": 12.8375,
        "Concrete": 25.675
    },
    {
        "Area": "Tank Form Arear",
        "Date": "6-Nov",
        "Excavation": 181.7,
        "FormWork": 90.85,
        "Rebar": 4.5424999999999995,
        "Concrete": 9.084999999999999
    },
    {
        "Area": "Tank Form Arear",
        "Date": "7-Nov",
        "Excavation": 537.2,
        "FormWork": 268.6,
        "Rebar": 13.430000000000001,
        "Concrete": 26.860000000000003
    },
    {
        "Area": "Tank Form Arear",
        "Date": "8-Nov",
        "Excavation": 300.2,
        "FormWork": 150.1,
        "Rebar": 7.505,
        "Concrete": 15.01
    },
    {
        "Area": "Tank Form Arear",
        "Date": "9-Nov",
        "Excavation": 331.8,
        "FormWork": 165.9,
        "Rebar": 8.295,
        "Concrete": 16.59
    },
    {
        "Area": "Tank Form Arear",
        "Date": "10-Nov",
        "Excavation": 181.7,
        "FormWork": 90.85,
        "Rebar": 4.5424999999999995,
        "Concrete": 9.084999999999999
    },
    {
        "Area": "Tank Form Arear",
        "Date": "11-Nov",
        "Excavation": 671.5,
        "FormWork": 335.75,
        "Rebar": 16.7875,
        "Concrete": 33.575
    },
    {
        "Area": "Tank Form Arear",
        "Date": "12-Nov",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "13-Nov",
        "Excavation": 284.4,
        "FormWork": 142.2,
        "Rebar": 7.109999999999999,
        "Concrete": 14.219999999999999
    },
    {
        "Area": "Tank Form Arear",
        "Date": "14-Nov",
        "Excavation": 197.5,
        "FormWork": 98.75,
        "Rebar": 4.9375,
        "Concrete": 9.875
    },
    {
        "Area": "Tank Form Arear",
        "Date": "15-Nov",
        "Excavation": 189.6,
        "FormWork": 94.8,
        "Rebar": 4.74,
        "Concrete": 9.48
    },
    {
        "Area": "Tank Form Arear",
        "Date": "16-Nov",
        "Excavation": 94.8,
        "FormWork": 47.4,
        "Rebar": 2.37,
        "Concrete": 4.74
    },
    {
        "Area": "Tank Form Arear",
        "Date": "17-Nov",
        "Excavation": 284.4,
        "FormWork": 142.2,
        "Rebar": 7.109999999999999,
        "Concrete": 14.219999999999999
    },
    {
        "Area": "Tank Form Arear",
        "Date": "18-Nov",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "19-Nov",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "20-Nov",
        "Excavation": 379.2,
        "FormWork": 189.6,
        "Rebar": 9.48,
        "Concrete": 18.96
    },
    {
        "Area": "Tank Form Arear",
        "Date": "21-Nov",
        "Excavation": 181.7,
        "FormWork": 90.85,
        "Rebar": 4.5424999999999995,
        "Concrete": 9.084999999999999
    },
    {
        "Area": "Tank Form Arear",
        "Date": "22-Nov",
        "Excavation": 466.1,
        "FormWork": 233.05,
        "Rebar": 11.652500000000002,
        "Concrete": 23.305000000000003
    },
    {
        "Area": "Tank Form Arear",
        "Date": "23-Nov",
        "Excavation": 181.7,
        "FormWork": 90.85,
        "Rebar": 4.5424999999999995,
        "Concrete": 9.084999999999999
    },
    {
        "Area": "Tank Form Arear",
        "Date": "24-Nov",
        "Excavation": 360.24,
        "FormWork": 180.12,
        "Rebar": 9.006,
        "Concrete": 18.012
    },
    {
        "Area": "Tank Form Arear",
        "Date": "25-Nov",
        "Excavation": 592.5,
        "FormWork": 296.25,
        "Rebar": 14.8125,
        "Concrete": 29.625
    },
    {
        "Area": "Tank Form Arear",
        "Date": "26-Nov",
        "Excavation": 758.4,
        "FormWork": 379.2,
        "Rebar": 18.96,
        "Concrete": 37.92
    },
    {
        "Area": "Tank Form Arear",
        "Date": "27-Nov",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "28-Nov",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "29-Nov",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "30-Nov",
        "Excavation": 509.55,
        "FormWork": 254.775,
        "Rebar": 12.738750000000001,
        "Concrete": 25.477500000000003
    },
    {
        "Area": "Tank Form Arear",
        "Date": "1-Dec",
        "Excavation": 50,
        "FormWork": 25,
        "Rebar": 1.25,
        "Concrete": 2.5
    },
    {
        "Area": "Tank Form Arear",
        "Date": "2-Dec",
        "Excavation": 100,
        "FormWork": 50,
        "Rebar": 2.5,
        "Concrete": 5
    },
    {
        "Area": "Tank Form Arear",
        "Date": "3-Dec",
        "Excavation": 125,
        "FormWork": 62.5,
        "Rebar": 3.125,
        "Concrete": 6.25
    },
    {
        "Area": "Tank Form Arear",
        "Date": "4-Dec",
        "Excavation": 150,
        "FormWork": 75,
        "Rebar": 3.75,
        "Concrete": 7.5
    },
    {
        "Area": "Tank Form Arear",
        "Date": "5-Dec",
        "Excavation": 325,
        "FormWork": 162.5,
        "Rebar": 8.125,
        "Concrete": 16.25
    },
    {
        "Area": "Tank Form Arear",
        "Date": "6-Dec",
        "Excavation": 115,
        "FormWork": 57.5,
        "Rebar": 2.875,
        "Concrete": 5.75
    },
    {
        "Area": "Tank Form Arear",
        "Date": "7-Dec",
        "Excavation": 340,
        "FormWork": 170,
        "Rebar": 8.5,
        "Concrete": 17
    },
    {
        "Area": "Tank Form Arear",
        "Date": "8-Dec",
        "Excavation": 190,
        "FormWork": 95,
        "Rebar": 4.75,
        "Concrete": 9.5
    },
    {
        "Area": "Tank Form Arear",
        "Date": "9-Dec",
        "Excavation": 210,
        "FormWork": 105,
        "Rebar": 5.25,
        "Concrete": 10.5
    },
    {
        "Area": "Tank Form Arear",
        "Date": "10-Dec",
        "Excavation": 115,
        "FormWork": 57.5,
        "Rebar": 2.875,
        "Concrete": 5.75
    },
    {
        "Area": "Tank Form Arear",
        "Date": "11-Dec",
        "Excavation": 425,
        "FormWork": 212.5,
        "Rebar": 10.625,
        "Concrete": 21.25
    },
    {
        "Area": "Tank Form Arear",
        "Date": "12-Dec",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "13-Dec",
        "Excavation": 180,
        "FormWork": 90,
        "Rebar": 4.5,
        "Concrete": 9
    },
    {
        "Area": "Tank Form Arear",
        "Date": "14-Dec",
        "Excavation": 125,
        "FormWork": 62.5,
        "Rebar": 3.125,
        "Concrete": 6.25
    },
    {
        "Area": "Tank Form Arear",
        "Date": "15-Dec",
        "Excavation": 120,
        "FormWork": 60,
        "Rebar": 3,
        "Concrete": 6
    },
    {
        "Area": "Tank Form Arear",
        "Date": "16-Dec",
        "Excavation": 60,
        "FormWork": 30,
        "Rebar": 1.5,
        "Concrete": 3
    },
    {
        "Area": "Tank Form Arear",
        "Date": "17-Dec",
        "Excavation": 180,
        "FormWork": 90,
        "Rebar": 4.5,
        "Concrete": 9
    },
    {
        "Area": "Tank Form Arear",
        "Date": "18-Dec",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "19-Dec",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "20-Dec",
        "Excavation": 240,
        "FormWork": 120,
        "Rebar": 6,
        "Concrete": 12
    },
    {
        "Area": "Tank Form Arear",
        "Date": "21-Dec",
        "Excavation": 115,
        "FormWork": 57.5,
        "Rebar": 2.875,
        "Concrete": 5.75
    },
    {
        "Area": "Tank Form Arear",
        "Date": "22-Dec",
        "Excavation": 295,
        "FormWork": 147.5,
        "Rebar": 7.375,
        "Concrete": 14.75
    },
    {
        "Area": "Tank Form Arear",
        "Date": "23-Dec",
        "Excavation": 115,
        "FormWork": 57.5,
        "Rebar": 2.875,
        "Concrete": 5.75
    },
    {
        "Area": "Tank Form Arear",
        "Date": "24-Dec",
        "Excavation": 228,
        "FormWork": 114,
        "Rebar": 5.7,
        "Concrete": 11.4
    },
    {
        "Area": "Tank Form Arear",
        "Date": "25-Dec",
        "Excavation": 375,
        "FormWork": 187.5,
        "Rebar": 9.375,
        "Concrete": 18.75
    },
    {
        "Area": "Tank Form Arear",
        "Date": "26-Dec",
        "Excavation": 480,
        "FormWork": 240,
        "Rebar": 12,
        "Concrete": 24
    },
    {
        "Area": "Tank Form Arear",
        "Date": "27-Dec",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "28-Dec",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "29-Dec",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Tank Form Arear",
        "Date": "30-Dec",
        "Excavation": 322.5,
        "FormWork": 161.25,
        "Rebar": 8.0625,
        "Concrete": 16.125
    },
    {
        "Area": "Tank Form Arear",
        "Date": "31-Dec",
        "Excavation": 115,
        "FormWork": 57.5,
        "Rebar": 2.875,
        "Concrete": 5.75
    },
    {
        "Area": "Sleeper Area",
        "Date": "1-Apr",
        "Excavation": 105,
        "FormWork": 52.5,
        "Rebar": 2.625,
        "Concrete": 5.25
    },
    {
        "Area": "Sleeper Area",
        "Date": "2-Apr",
        "Excavation": 210,
        "FormWork": 105,
        "Rebar": 5.25,
        "Concrete": 10.5
    },
    {
        "Area": "Sleeper Area",
        "Date": "3-Apr",
        "Excavation": 262.5,
        "FormWork": 131.25,
        "Rebar": 6.5625,
        "Concrete": 13.125
    },
    {
        "Area": "Sleeper Area",
        "Date": "4-Apr",
        "Excavation": 315,
        "FormWork": 157.5,
        "Rebar": 7.875,
        "Concrete": 15.75
    },
    {
        "Area": "Sleeper Area",
        "Date": "5-Apr",
        "Excavation": 682.5,
        "FormWork": 341.25,
        "Rebar": 17.0625,
        "Concrete": 34.125
    },
    {
        "Area": "Sleeper Area",
        "Date": "6-Apr",
        "Excavation": 241.5,
        "FormWork": 120.75,
        "Rebar": 6.0375000000000005,
        "Concrete": 12.075000000000001
    },
    {
        "Area": "Sleeper Area",
        "Date": "7-Apr",
        "Excavation": 714,
        "FormWork": 357,
        "Rebar": 17.85,
        "Concrete": 35.7
    },
    {
        "Area": "Sleeper Area",
        "Date": "8-Apr",
        "Excavation": 399,
        "FormWork": 199.5,
        "Rebar": 9.975000000000001,
        "Concrete": 19.950000000000003
    },
    {
        "Area": "Sleeper Area",
        "Date": "9-Apr",
        "Excavation": 441,
        "FormWork": 220.5,
        "Rebar": 11.025,
        "Concrete": 22.05
    },
    {
        "Area": "Sleeper Area",
        "Date": "10-Apr",
        "Excavation": 241.5,
        "FormWork": 120.75,
        "Rebar": 6.0375000000000005,
        "Concrete": 12.075000000000001
    },
    {
        "Area": "Sleeper Area",
        "Date": "11-Apr",
        "Excavation": 892.5,
        "FormWork": 446.25,
        "Rebar": 22.3125,
        "Concrete": 44.625
    },
    {
        "Area": "Sleeper Area",
        "Date": "12-Apr",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "13-Apr",
        "Excavation": 378,
        "FormWork": 189,
        "Rebar": 9.450000000000001,
        "Concrete": 18.900000000000002
    },
    {
        "Area": "Sleeper Area",
        "Date": "14-Apr",
        "Excavation": 262.5,
        "FormWork": 131.25,
        "Rebar": 6.5625,
        "Concrete": 13.125
    },
    {
        "Area": "Sleeper Area",
        "Date": "15-Apr",
        "Excavation": 252,
        "FormWork": 126,
        "Rebar": 6.300000000000001,
        "Concrete": 12.600000000000001
    },
    {
        "Area": "Sleeper Area",
        "Date": "16-Apr",
        "Excavation": 126,
        "FormWork": 63,
        "Rebar": 3.1500000000000004,
        "Concrete": 6.300000000000001
    },
    {
        "Area": "Sleeper Area",
        "Date": "17-Apr",
        "Excavation": 378,
        "FormWork": 189,
        "Rebar": 9.450000000000001,
        "Concrete": 18.900000000000002
    },
    {
        "Area": "Sleeper Area",
        "Date": "18-Apr",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "19-Apr",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "20-Apr",
        "Excavation": 504,
        "FormWork": 252,
        "Rebar": 12.600000000000001,
        "Concrete": 25.200000000000003
    },
    {
        "Area": "Sleeper Area",
        "Date": "21-Apr",
        "Excavation": 241.5,
        "FormWork": 120.75,
        "Rebar": 6.0375000000000005,
        "Concrete": 12.075000000000001
    },
    {
        "Area": "Sleeper Area",
        "Date": "22-Apr",
        "Excavation": 619.5,
        "FormWork": 309.75,
        "Rebar": 15.4875,
        "Concrete": 30.975
    },
    {
        "Area": "Sleeper Area",
        "Date": "23-Apr",
        "Excavation": 241.5,
        "FormWork": 120.75,
        "Rebar": 6.0375000000000005,
        "Concrete": 12.075000000000001
    },
    {
        "Area": "Sleeper Area",
        "Date": "24-Apr",
        "Excavation": 478.8,
        "FormWork": 239.4,
        "Rebar": 11.97,
        "Concrete": 23.94
    },
    {
        "Area": "Sleeper Area",
        "Date": "25-Apr",
        "Excavation": 787.5,
        "FormWork": 393.75,
        "Rebar": 19.6875,
        "Concrete": 39.375
    },
    {
        "Area": "Sleeper Area",
        "Date": "26-Apr",
        "Excavation": 1008,
        "FormWork": 504,
        "Rebar": 25.200000000000003,
        "Concrete": 50.400000000000006
    },
    {
        "Area": "Sleeper Area",
        "Date": "27-Apr",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "28-Apr",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "29-Apr",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "30-Apr",
        "Excavation": 677.25,
        "FormWork": 338.625,
        "Rebar": 16.931250000000002,
        "Concrete": 33.862500000000004
    },
    {
        "Area": "Sleeper Area",
        "Date": "1-May",
        "Excavation": 120,
        "FormWork": 60,
        "Rebar": 3,
        "Concrete": 6
    },
    {
        "Area": "Sleeper Area",
        "Date": "2-May",
        "Excavation": 240,
        "FormWork": 120,
        "Rebar": 6,
        "Concrete": 12
    },
    {
        "Area": "Sleeper Area",
        "Date": "3-May",
        "Excavation": 300,
        "FormWork": 150,
        "Rebar": 7.5,
        "Concrete": 15
    },
    {
        "Area": "Sleeper Area",
        "Date": "4-May",
        "Excavation": 360,
        "FormWork": 180,
        "Rebar": 9,
        "Concrete": 18
    },
    {
        "Area": "Sleeper Area",
        "Date": "5-May",
        "Excavation": 780,
        "FormWork": 390,
        "Rebar": 19.5,
        "Concrete": 39
    },
    {
        "Area": "Sleeper Area",
        "Date": "6-May",
        "Excavation": 276,
        "FormWork": 138,
        "Rebar": 6.9,
        "Concrete": 13.8
    },
    {
        "Area": "Sleeper Area",
        "Date": "7-May",
        "Excavation": 816,
        "FormWork": 408,
        "Rebar": 20.400000000000002,
        "Concrete": 40.800000000000004
    },
    {
        "Area": "Sleeper Area",
        "Date": "8-May",
        "Excavation": 456,
        "FormWork": 228,
        "Rebar": 11.4,
        "Concrete": 22.8
    },
    {
        "Area": "Sleeper Area",
        "Date": "9-May",
        "Excavation": 504,
        "FormWork": 252,
        "Rebar": 12.600000000000001,
        "Concrete": 25.200000000000003
    },
    {
        "Area": "Sleeper Area",
        "Date": "10-May",
        "Excavation": 276,
        "FormWork": 138,
        "Rebar": 6.9,
        "Concrete": 13.8
    },
    {
        "Area": "Sleeper Area",
        "Date": "11-May",
        "Excavation": 1020,
        "FormWork": 510,
        "Rebar": 25.5,
        "Concrete": 51
    },
    {
        "Area": "Sleeper Area",
        "Date": "12-May",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "13-May",
        "Excavation": 432,
        "FormWork": 216,
        "Rebar": 10.8,
        "Concrete": 21.6
    },
    {
        "Area": "Sleeper Area",
        "Date": "14-May",
        "Excavation": 300,
        "FormWork": 150,
        "Rebar": 7.5,
        "Concrete": 15
    },
    {
        "Area": "Sleeper Area",
        "Date": "15-May",
        "Excavation": 288,
        "FormWork": 144,
        "Rebar": 7.2,
        "Concrete": 14.4
    },
    {
        "Area": "Sleeper Area",
        "Date": "16-May",
        "Excavation": 144,
        "FormWork": 72,
        "Rebar": 3.6,
        "Concrete": 7.2
    },
    {
        "Area": "Sleeper Area",
        "Date": "17-May",
        "Excavation": 432,
        "FormWork": 216,
        "Rebar": 10.8,
        "Concrete": 21.6
    },
    {
        "Area": "Sleeper Area",
        "Date": "18-May",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "19-May",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "20-May",
        "Excavation": 576,
        "FormWork": 288,
        "Rebar": 14.4,
        "Concrete": 28.8
    },
    {
        "Area": "Sleeper Area",
        "Date": "21-May",
        "Excavation": 276,
        "FormWork": 138,
        "Rebar": 6.9,
        "Concrete": 13.8
    },
    {
        "Area": "Sleeper Area",
        "Date": "22-May",
        "Excavation": 708,
        "FormWork": 354,
        "Rebar": 17.7,
        "Concrete": 35.4
    },
    {
        "Area": "Sleeper Area",
        "Date": "23-May",
        "Excavation": 276,
        "FormWork": 138,
        "Rebar": 6.9,
        "Concrete": 13.8
    },
    {
        "Area": "Sleeper Area",
        "Date": "24-May",
        "Excavation": 547.2,
        "FormWork": 273.6,
        "Rebar": 13.680000000000001,
        "Concrete": 27.360000000000003
    },
    {
        "Area": "Sleeper Area",
        "Date": "25-May",
        "Excavation": 900,
        "FormWork": 450,
        "Rebar": 22.5,
        "Concrete": 45
    },
    {
        "Area": "Sleeper Area",
        "Date": "26-May",
        "Excavation": 1152,
        "FormWork": 576,
        "Rebar": 28.8,
        "Concrete": 57.6
    },
    {
        "Area": "Sleeper Area",
        "Date": "27-May",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "28-May",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "29-May",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "30-May",
        "Excavation": 774,
        "FormWork": 387,
        "Rebar": 19.35,
        "Concrete": 38.7
    },
    {
        "Area": "Sleeper Area",
        "Date": "31-May",
        "Excavation": 276,
        "FormWork": 138,
        "Rebar": 6.9,
        "Concrete": 13.8
    },
    {
        "Area": "Sleeper Area",
        "Date": "1-Jun",
        "Excavation": 95,
        "FormWork": 47.5,
        "Rebar": 2.375,
        "Concrete": 4.75
    },
    {
        "Area": "Sleeper Area",
        "Date": "2-Jun",
        "Excavation": 190,
        "FormWork": 95,
        "Rebar": 4.75,
        "Concrete": 9.5
    },
    {
        "Area": "Sleeper Area",
        "Date": "3-Jun",
        "Excavation": 237.5,
        "FormWork": 118.75,
        "Rebar": 5.9375,
        "Concrete": 11.875
    },
    {
        "Area": "Sleeper Area",
        "Date": "4-Jun",
        "Excavation": 285,
        "FormWork": 142.5,
        "Rebar": 7.125,
        "Concrete": 14.25
    },
    {
        "Area": "Sleeper Area",
        "Date": "5-Jun",
        "Excavation": 617.5,
        "FormWork": 308.75,
        "Rebar": 15.4375,
        "Concrete": 30.875
    },
    {
        "Area": "Sleeper Area",
        "Date": "6-Jun",
        "Excavation": 218.5,
        "FormWork": 109.25,
        "Rebar": 5.4625,
        "Concrete": 10.925
    },
    {
        "Area": "Sleeper Area",
        "Date": "7-Jun",
        "Excavation": 646,
        "FormWork": 323,
        "Rebar": 16.150000000000002,
        "Concrete": 32.300000000000004
    },
    {
        "Area": "Sleeper Area",
        "Date": "8-Jun",
        "Excavation": 361,
        "FormWork": 180.5,
        "Rebar": 9.025,
        "Concrete": 18.05
    },
    {
        "Area": "Sleeper Area",
        "Date": "9-Jun",
        "Excavation": 399,
        "FormWork": 199.5,
        "Rebar": 9.975000000000001,
        "Concrete": 19.950000000000003
    },
    {
        "Area": "Sleeper Area",
        "Date": "10-Jun",
        "Excavation": 218.5,
        "FormWork": 109.25,
        "Rebar": 5.4625,
        "Concrete": 10.925
    },
    {
        "Area": "Sleeper Area",
        "Date": "11-Jun",
        "Excavation": 807.5,
        "FormWork": 403.75,
        "Rebar": 20.1875,
        "Concrete": 40.375
    },
    {
        "Area": "Sleeper Area",
        "Date": "12-Jun",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "13-Jun",
        "Excavation": 342,
        "FormWork": 171,
        "Rebar": 8.55,
        "Concrete": 17.1
    },
    {
        "Area": "Sleeper Area",
        "Date": "14-Jun",
        "Excavation": 237.5,
        "FormWork": 118.75,
        "Rebar": 5.9375,
        "Concrete": 11.875
    },
    {
        "Area": "Sleeper Area",
        "Date": "15-Jun",
        "Excavation": 228,
        "FormWork": 114,
        "Rebar": 5.7,
        "Concrete": 11.4
    },
    {
        "Area": "Sleeper Area",
        "Date": "16-Jun",
        "Excavation": 114,
        "FormWork": 57,
        "Rebar": 2.85,
        "Concrete": 5.7
    },
    {
        "Area": "Sleeper Area",
        "Date": "17-Jun",
        "Excavation": 342,
        "FormWork": 171,
        "Rebar": 8.55,
        "Concrete": 17.1
    },
    {
        "Area": "Sleeper Area",
        "Date": "18-Jun",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "19-Jun",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "20-Jun",
        "Excavation": 456,
        "FormWork": 228,
        "Rebar": 11.4,
        "Concrete": 22.8
    },
    {
        "Area": "Sleeper Area",
        "Date": "21-Jun",
        "Excavation": 218.5,
        "FormWork": 109.25,
        "Rebar": 5.4625,
        "Concrete": 10.925
    },
    {
        "Area": "Sleeper Area",
        "Date": "22-Jun",
        "Excavation": 560.5,
        "FormWork": 280.25,
        "Rebar": 14.012500000000001,
        "Concrete": 28.025000000000002
    },
    {
        "Area": "Sleeper Area",
        "Date": "23-Jun",
        "Excavation": 218.5,
        "FormWork": 109.25,
        "Rebar": 5.4625,
        "Concrete": 10.925
    },
    {
        "Area": "Sleeper Area",
        "Date": "24-Jun",
        "Excavation": 433.2,
        "FormWork": 216.6,
        "Rebar": 10.83,
        "Concrete": 21.66
    },
    {
        "Area": "Sleeper Area",
        "Date": "25-Jun",
        "Excavation": 712.5,
        "FormWork": 356.25,
        "Rebar": 17.8125,
        "Concrete": 35.625
    },
    {
        "Area": "Sleeper Area",
        "Date": "26-Jun",
        "Excavation": 912,
        "FormWork": 456,
        "Rebar": 22.8,
        "Concrete": 45.6
    },
    {
        "Area": "Sleeper Area",
        "Date": "27-Jun",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "28-Jun",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "29-Jun",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "30-Jun",
        "Excavation": 612.75,
        "FormWork": 306.375,
        "Rebar": 15.318750000000001,
        "Concrete": 30.637500000000003
    },
    {
        "Area": "Sleeper Area",
        "Date": "1-Jul",
        "Excavation": 90,
        "FormWork": 45,
        "Rebar": 2.25,
        "Concrete": 4.5
    },
    {
        "Area": "Sleeper Area",
        "Date": "2-Jul",
        "Excavation": 180,
        "FormWork": 90,
        "Rebar": 4.5,
        "Concrete": 9
    },
    {
        "Area": "Sleeper Area",
        "Date": "3-Jul",
        "Excavation": 225,
        "FormWork": 112.5,
        "Rebar": 5.625,
        "Concrete": 11.25
    },
    {
        "Area": "Sleeper Area",
        "Date": "4-Jul",
        "Excavation": 270,
        "FormWork": 135,
        "Rebar": 6.75,
        "Concrete": 13.5
    },
    {
        "Area": "Sleeper Area",
        "Date": "5-Jul",
        "Excavation": 585,
        "FormWork": 292.5,
        "Rebar": 14.625,
        "Concrete": 29.25
    },
    {
        "Area": "Sleeper Area",
        "Date": "6-Jul",
        "Excavation": 207,
        "FormWork": 103.5,
        "Rebar": 5.175000000000001,
        "Concrete": 10.350000000000001
    },
    {
        "Area": "Sleeper Area",
        "Date": "7-Jul",
        "Excavation": 612,
        "FormWork": 306,
        "Rebar": 15.3,
        "Concrete": 30.6
    },
    {
        "Area": "Sleeper Area",
        "Date": "8-Jul",
        "Excavation": 342,
        "FormWork": 171,
        "Rebar": 8.55,
        "Concrete": 17.1
    },
    {
        "Area": "Sleeper Area",
        "Date": "9-Jul",
        "Excavation": 378,
        "FormWork": 189,
        "Rebar": 9.450000000000001,
        "Concrete": 18.900000000000002
    },
    {
        "Area": "Sleeper Area",
        "Date": "10-Jul",
        "Excavation": 207,
        "FormWork": 103.5,
        "Rebar": 5.175000000000001,
        "Concrete": 10.350000000000001
    },
    {
        "Area": "Sleeper Area",
        "Date": "11-Jul",
        "Excavation": 765,
        "FormWork": 382.5,
        "Rebar": 19.125,
        "Concrete": 38.25
    },
    {
        "Area": "Sleeper Area",
        "Date": "12-Jul",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "13-Jul",
        "Excavation": 324,
        "FormWork": 162,
        "Rebar": 8.1,
        "Concrete": 16.2
    },
    {
        "Area": "Sleeper Area",
        "Date": "14-Jul",
        "Excavation": 225,
        "FormWork": 112.5,
        "Rebar": 5.625,
        "Concrete": 11.25
    },
    {
        "Area": "Sleeper Area",
        "Date": "15-Jul",
        "Excavation": 216,
        "FormWork": 108,
        "Rebar": 5.4,
        "Concrete": 10.8
    },
    {
        "Area": "Sleeper Area",
        "Date": "16-Jul",
        "Excavation": 108,
        "FormWork": 54,
        "Rebar": 2.7,
        "Concrete": 5.4
    },
    {
        "Area": "Sleeper Area",
        "Date": "17-Jul",
        "Excavation": 324,
        "FormWork": 162,
        "Rebar": 8.1,
        "Concrete": 16.2
    },
    {
        "Area": "Sleeper Area",
        "Date": "18-Jul",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "19-Jul",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "20-Jul",
        "Excavation": 432,
        "FormWork": 216,
        "Rebar": 10.8,
        "Concrete": 21.6
    },
    {
        "Area": "Sleeper Area",
        "Date": "21-Jul",
        "Excavation": 207,
        "FormWork": 103.5,
        "Rebar": 5.175000000000001,
        "Concrete": 10.350000000000001
    },
    {
        "Area": "Sleeper Area",
        "Date": "22-Jul",
        "Excavation": 531,
        "FormWork": 265.5,
        "Rebar": 13.275,
        "Concrete": 26.55
    },
    {
        "Area": "Sleeper Area",
        "Date": "23-Jul",
        "Excavation": 207,
        "FormWork": 103.5,
        "Rebar": 5.175000000000001,
        "Concrete": 10.350000000000001
    },
    {
        "Area": "Sleeper Area",
        "Date": "24-Jul",
        "Excavation": 410.4,
        "FormWork": 205.2,
        "Rebar": 10.26,
        "Concrete": 20.52
    },
    {
        "Area": "Sleeper Area",
        "Date": "25-Jul",
        "Excavation": 675,
        "FormWork": 337.5,
        "Rebar": 16.875,
        "Concrete": 33.75
    },
    {
        "Area": "Sleeper Area",
        "Date": "26-Jul",
        "Excavation": 864,
        "FormWork": 432,
        "Rebar": 21.6,
        "Concrete": 43.2
    },
    {
        "Area": "Sleeper Area",
        "Date": "27-Jul",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "28-Jul",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "29-Jul",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "30-Jul",
        "Excavation": 580.5,
        "FormWork": 290.25,
        "Rebar": 14.512500000000001,
        "Concrete": 29.025000000000002
    },
    {
        "Area": "Sleeper Area",
        "Date": "31-Jul",
        "Excavation": 207,
        "FormWork": 103.5,
        "Rebar": 5.175000000000001,
        "Concrete": 10.350000000000001
    },
    {
        "Area": "Sleeper Area",
        "Date": "1-Aug",
        "Excavation": 85,
        "FormWork": 42.5,
        "Rebar": 2.125,
        "Concrete": 4.25
    },
    {
        "Area": "Sleeper Area",
        "Date": "2-Aug",
        "Excavation": 170,
        "FormWork": 85,
        "Rebar": 4.25,
        "Concrete": 8.5
    },
    {
        "Area": "Sleeper Area",
        "Date": "3-Aug",
        "Excavation": 212.5,
        "FormWork": 106.25,
        "Rebar": 5.3125,
        "Concrete": 10.625
    },
    {
        "Area": "Sleeper Area",
        "Date": "4-Aug",
        "Excavation": 255,
        "FormWork": 127.5,
        "Rebar": 6.375,
        "Concrete": 12.75
    },
    {
        "Area": "Sleeper Area",
        "Date": "5-Aug",
        "Excavation": 552.5,
        "FormWork": 276.25,
        "Rebar": 13.8125,
        "Concrete": 27.625
    },
    {
        "Area": "Sleeper Area",
        "Date": "6-Aug",
        "Excavation": 195.5,
        "FormWork": 97.75,
        "Rebar": 4.8875,
        "Concrete": 9.775
    },
    {
        "Area": "Sleeper Area",
        "Date": "7-Aug",
        "Excavation": 578,
        "FormWork": 289,
        "Rebar": 14.450000000000001,
        "Concrete": 28.900000000000002
    },
    {
        "Area": "Sleeper Area",
        "Date": "8-Aug",
        "Excavation": 323,
        "FormWork": 161.5,
        "Rebar": 8.075000000000001,
        "Concrete": 16.150000000000002
    },
    {
        "Area": "Sleeper Area",
        "Date": "9-Aug",
        "Excavation": 357,
        "FormWork": 178.5,
        "Rebar": 8.925,
        "Concrete": 17.85
    },
    {
        "Area": "Sleeper Area",
        "Date": "10-Aug",
        "Excavation": 195.5,
        "FormWork": 97.75,
        "Rebar": 4.8875,
        "Concrete": 9.775
    },
    {
        "Area": "Sleeper Area",
        "Date": "11-Aug",
        "Excavation": 722.5,
        "FormWork": 361.25,
        "Rebar": 18.0625,
        "Concrete": 36.125
    },
    {
        "Area": "Sleeper Area",
        "Date": "12-Aug",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "13-Aug",
        "Excavation": 306,
        "FormWork": 153,
        "Rebar": 7.65,
        "Concrete": 15.3
    },
    {
        "Area": "Sleeper Area",
        "Date": "14-Aug",
        "Excavation": 212.5,
        "FormWork": 106.25,
        "Rebar": 5.3125,
        "Concrete": 10.625
    },
    {
        "Area": "Sleeper Area",
        "Date": "15-Aug",
        "Excavation": 204,
        "FormWork": 102,
        "Rebar": 5.1000000000000005,
        "Concrete": 10.200000000000001
    },
    {
        "Area": "Sleeper Area",
        "Date": "16-Aug",
        "Excavation": 102,
        "FormWork": 51,
        "Rebar": 2.5500000000000003,
        "Concrete": 5.1000000000000005
    },
    {
        "Area": "Sleeper Area",
        "Date": "17-Aug",
        "Excavation": 306,
        "FormWork": 153,
        "Rebar": 7.65,
        "Concrete": 15.3
    },
    {
        "Area": "Sleeper Area",
        "Date": "18-Aug",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "19-Aug",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "20-Aug",
        "Excavation": 408,
        "FormWork": 204,
        "Rebar": 10.200000000000001,
        "Concrete": 20.400000000000002
    },
    {
        "Area": "Sleeper Area",
        "Date": "21-Aug",
        "Excavation": 195.5,
        "FormWork": 97.75,
        "Rebar": 4.8875,
        "Concrete": 9.775
    },
    {
        "Area": "Sleeper Area",
        "Date": "22-Aug",
        "Excavation": 501.5,
        "FormWork": 250.75,
        "Rebar": 12.537500000000001,
        "Concrete": 25.075000000000003
    },
    {
        "Area": "Sleeper Area",
        "Date": "23-Aug",
        "Excavation": 195.5,
        "FormWork": 97.75,
        "Rebar": 4.8875,
        "Concrete": 9.775
    },
    {
        "Area": "Sleeper Area",
        "Date": "24-Aug",
        "Excavation": 387.6,
        "FormWork": 193.8,
        "Rebar": 9.690000000000001,
        "Concrete": 19.380000000000003
    },
    {
        "Area": "Sleeper Area",
        "Date": "25-Aug",
        "Excavation": 637.5,
        "FormWork": 318.75,
        "Rebar": 15.9375,
        "Concrete": 31.875
    },
    {
        "Area": "Sleeper Area",
        "Date": "26-Aug",
        "Excavation": 816,
        "FormWork": 408,
        "Rebar": 20.400000000000002,
        "Concrete": 40.800000000000004
    },
    {
        "Area": "Sleeper Area",
        "Date": "27-Aug",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "28-Aug",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "29-Aug",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "30-Aug",
        "Excavation": 548.25,
        "FormWork": 274.125,
        "Rebar": 13.70625,
        "Concrete": 27.4125
    },
    {
        "Area": "Sleeper Area",
        "Date": "31-Aug",
        "Excavation": 195.5,
        "FormWork": 97.75,
        "Rebar": 4.8875,
        "Concrete": 9.775
    },
    {
        "Area": "Sleeper Area",
        "Date": "1-Sep",
        "Excavation": 80,
        "FormWork": 40,
        "Rebar": 2,
        "Concrete": 4
    },
    {
        "Area": "Sleeper Area",
        "Date": "2-Sep",
        "Excavation": 160,
        "FormWork": 80,
        "Rebar": 4,
        "Concrete": 8
    },
    {
        "Area": "Sleeper Area",
        "Date": "3-Sep",
        "Excavation": 200,
        "FormWork": 100,
        "Rebar": 5,
        "Concrete": 10
    },
    {
        "Area": "Sleeper Area",
        "Date": "4-Sep",
        "Excavation": 240,
        "FormWork": 120,
        "Rebar": 6,
        "Concrete": 12
    },
    {
        "Area": "Sleeper Area",
        "Date": "5-Sep",
        "Excavation": 520,
        "FormWork": 260,
        "Rebar": 13,
        "Concrete": 26
    },
    {
        "Area": "Sleeper Area",
        "Date": "6-Sep",
        "Excavation": 184,
        "FormWork": 92,
        "Rebar": 4.6000000000000005,
        "Concrete": 9.200000000000001
    },
    {
        "Area": "Sleeper Area",
        "Date": "7-Sep",
        "Excavation": 544,
        "FormWork": 272,
        "Rebar": 13.600000000000001,
        "Concrete": 27.200000000000003
    },
    {
        "Area": "Sleeper Area",
        "Date": "8-Sep",
        "Excavation": 304,
        "FormWork": 152,
        "Rebar": 7.6000000000000005,
        "Concrete": 15.200000000000001
    },
    {
        "Area": "Sleeper Area",
        "Date": "9-Sep",
        "Excavation": 336,
        "FormWork": 168,
        "Rebar": 8.4,
        "Concrete": 16.8
    },
    {
        "Area": "Sleeper Area",
        "Date": "10-Sep",
        "Excavation": 184,
        "FormWork": 92,
        "Rebar": 4.6000000000000005,
        "Concrete": 9.200000000000001
    },
    {
        "Area": "Sleeper Area",
        "Date": "11-Sep",
        "Excavation": 680,
        "FormWork": 340,
        "Rebar": 17,
        "Concrete": 34
    },
    {
        "Area": "Sleeper Area",
        "Date": "12-Sep",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "13-Sep",
        "Excavation": 288,
        "FormWork": 144,
        "Rebar": 7.2,
        "Concrete": 14.4
    },
    {
        "Area": "Sleeper Area",
        "Date": "14-Sep",
        "Excavation": 200,
        "FormWork": 100,
        "Rebar": 5,
        "Concrete": 10
    },
    {
        "Area": "Sleeper Area",
        "Date": "15-Sep",
        "Excavation": 192,
        "FormWork": 96,
        "Rebar": 4.800000000000001,
        "Concrete": 9.600000000000001
    },
    {
        "Area": "Sleeper Area",
        "Date": "16-Sep",
        "Excavation": 96,
        "FormWork": 48,
        "Rebar": 2.4000000000000004,
        "Concrete": 4.800000000000001
    },
    {
        "Area": "Sleeper Area",
        "Date": "17-Sep",
        "Excavation": 288,
        "FormWork": 144,
        "Rebar": 7.2,
        "Concrete": 14.4
    },
    {
        "Area": "Sleeper Area",
        "Date": "18-Sep",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "19-Sep",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "20-Sep",
        "Excavation": 384,
        "FormWork": 192,
        "Rebar": 9.600000000000001,
        "Concrete": 19.200000000000003
    },
    {
        "Area": "Sleeper Area",
        "Date": "21-Sep",
        "Excavation": 184,
        "FormWork": 92,
        "Rebar": 4.6000000000000005,
        "Concrete": 9.200000000000001
    },
    {
        "Area": "Sleeper Area",
        "Date": "22-Sep",
        "Excavation": 472,
        "FormWork": 236,
        "Rebar": 11.8,
        "Concrete": 23.6
    },
    {
        "Area": "Sleeper Area",
        "Date": "23-Sep",
        "Excavation": 184,
        "FormWork": 92,
        "Rebar": 4.6000000000000005,
        "Concrete": 9.200000000000001
    },
    {
        "Area": "Sleeper Area",
        "Date": "24-Sep",
        "Excavation": 364.8,
        "FormWork": 182.4,
        "Rebar": 9.120000000000001,
        "Concrete": 18.240000000000002
    },
    {
        "Area": "Sleeper Area",
        "Date": "25-Sep",
        "Excavation": 600,
        "FormWork": 300,
        "Rebar": 15,
        "Concrete": 30
    },
    {
        "Area": "Sleeper Area",
        "Date": "26-Sep",
        "Excavation": 768,
        "FormWork": 384,
        "Rebar": 19.200000000000003,
        "Concrete": 38.400000000000006
    },
    {
        "Area": "Sleeper Area",
        "Date": "27-Sep",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "28-Sep",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "29-Sep",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "30-Sep",
        "Excavation": 516,
        "FormWork": 258,
        "Rebar": 12.9,
        "Concrete": 25.8
    },
    {
        "Area": "Sleeper Area",
        "Date": "1-Oct",
        "Excavation": 184,
        "FormWork": 92,
        "Rebar": 4.6000000000000005,
        "Concrete": 9.200000000000001
    },
    {
        "Area": "Sleeper Area",
        "Date": "2-Oct",
        "Excavation": 78,
        "FormWork": 39,
        "Rebar": 1.9500000000000002,
        "Concrete": 3.9000000000000004
    },
    {
        "Area": "Sleeper Area",
        "Date": "3-Oct",
        "Excavation": 156,
        "FormWork": 78,
        "Rebar": 3.9000000000000004,
        "Concrete": 7.800000000000001
    },
    {
        "Area": "Sleeper Area",
        "Date": "4-Oct",
        "Excavation": 195,
        "FormWork": 97.5,
        "Rebar": 4.875,
        "Concrete": 9.75
    },
    {
        "Area": "Sleeper Area",
        "Date": "5-Oct",
        "Excavation": 234,
        "FormWork": 117,
        "Rebar": 5.8500000000000005,
        "Concrete": 11.700000000000001
    },
    {
        "Area": "Sleeper Area",
        "Date": "6-Oct",
        "Excavation": 507,
        "FormWork": 253.5,
        "Rebar": 12.675,
        "Concrete": 25.35
    },
    {
        "Area": "Sleeper Area",
        "Date": "7-Oct",
        "Excavation": 179.4,
        "FormWork": 89.7,
        "Rebar": 4.485,
        "Concrete": 8.97
    },
    {
        "Area": "Sleeper Area",
        "Date": "8-Oct",
        "Excavation": 530.4,
        "FormWork": 265.2,
        "Rebar": 13.26,
        "Concrete": 26.52
    },
    {
        "Area": "Sleeper Area",
        "Date": "9-Oct",
        "Excavation": 296.4,
        "FormWork": 148.2,
        "Rebar": 7.41,
        "Concrete": 14.82
    },
    {
        "Area": "Sleeper Area",
        "Date": "10-Oct",
        "Excavation": 327.6,
        "FormWork": 163.8,
        "Rebar": 8.190000000000001,
        "Concrete": 16.380000000000003
    },
    {
        "Area": "Sleeper Area",
        "Date": "11-Oct",
        "Excavation": 179.4,
        "FormWork": 89.7,
        "Rebar": 4.485,
        "Concrete": 8.97
    },
    {
        "Area": "Sleeper Area",
        "Date": "12-Oct",
        "Excavation": 663,
        "FormWork": 331.5,
        "Rebar": 16.575,
        "Concrete": 33.15
    },
    {
        "Area": "Sleeper Area",
        "Date": "13-Oct",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "14-Oct",
        "Excavation": 280.8,
        "FormWork": 140.4,
        "Rebar": 7.0200000000000005,
        "Concrete": 14.040000000000001
    },
    {
        "Area": "Sleeper Area",
        "Date": "15-Oct",
        "Excavation": 195,
        "FormWork": 97.5,
        "Rebar": 4.875,
        "Concrete": 9.75
    },
    {
        "Area": "Sleeper Area",
        "Date": "16-Oct",
        "Excavation": 187.2,
        "FormWork": 93.6,
        "Rebar": 4.68,
        "Concrete": 9.36
    },
    {
        "Area": "Sleeper Area",
        "Date": "17-Oct",
        "Excavation": 93.6,
        "FormWork": 46.8,
        "Rebar": 2.34,
        "Concrete": 4.68
    },
    {
        "Area": "Sleeper Area",
        "Date": "18-Oct",
        "Excavation": 280.8,
        "FormWork": 140.4,
        "Rebar": 7.0200000000000005,
        "Concrete": 14.040000000000001
    },
    {
        "Area": "Sleeper Area",
        "Date": "19-Oct",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "20-Oct",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "21-Oct",
        "Excavation": 374.4,
        "FormWork": 187.2,
        "Rebar": 9.36,
        "Concrete": 18.72
    },
    {
        "Area": "Sleeper Area",
        "Date": "22-Oct",
        "Excavation": 179.4,
        "FormWork": 89.7,
        "Rebar": 4.485,
        "Concrete": 8.97
    },
    {
        "Area": "Sleeper Area",
        "Date": "23-Oct",
        "Excavation": 460.2,
        "FormWork": 230.1,
        "Rebar": 11.505,
        "Concrete": 23.01
    },
    {
        "Area": "Sleeper Area",
        "Date": "24-Oct",
        "Excavation": 179.4,
        "FormWork": 89.7,
        "Rebar": 4.485,
        "Concrete": 8.97
    },
    {
        "Area": "Sleeper Area",
        "Date": "25-Oct",
        "Excavation": 355.68,
        "FormWork": 177.84,
        "Rebar": 8.892000000000001,
        "Concrete": 17.784000000000002
    },
    {
        "Area": "Sleeper Area",
        "Date": "26-Oct",
        "Excavation": 585,
        "FormWork": 292.5,
        "Rebar": 14.625,
        "Concrete": 29.25
    },
    {
        "Area": "Sleeper Area",
        "Date": "27-Oct",
        "Excavation": 748.8,
        "FormWork": 374.4,
        "Rebar": 18.72,
        "Concrete": 37.44
    },
    {
        "Area": "Sleeper Area",
        "Date": "28-Oct",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "29-Oct",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "30-Oct",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "31-Oct",
        "Excavation": 503.1,
        "FormWork": 251.55,
        "Rebar": 12.5775,
        "Concrete": 25.155
    },
    {
        "Area": "Sleeper Area",
        "Date": "1-Nov",
        "Excavation": 79,
        "FormWork": 39.5,
        "Rebar": 1.975,
        "Concrete": 3.95
    },
    {
        "Area": "Sleeper Area",
        "Date": "2-Nov",
        "Excavation": 158,
        "FormWork": 79,
        "Rebar": 3.95,
        "Concrete": 7.9
    },
    {
        "Area": "Sleeper Area",
        "Date": "3-Nov",
        "Excavation": 197.5,
        "FormWork": 98.75,
        "Rebar": 4.9375,
        "Concrete": 9.875
    },
    {
        "Area": "Sleeper Area",
        "Date": "4-Nov",
        "Excavation": 237,
        "FormWork": 118.5,
        "Rebar": 5.925000000000001,
        "Concrete": 11.850000000000001
    },
    {
        "Area": "Sleeper Area",
        "Date": "5-Nov",
        "Excavation": 513.5,
        "FormWork": 256.75,
        "Rebar": 12.8375,
        "Concrete": 25.675
    },
    {
        "Area": "Sleeper Area",
        "Date": "6-Nov",
        "Excavation": 181.7,
        "FormWork": 90.85,
        "Rebar": 4.5424999999999995,
        "Concrete": 9.084999999999999
    },
    {
        "Area": "Sleeper Area",
        "Date": "7-Nov",
        "Excavation": 537.2,
        "FormWork": 268.6,
        "Rebar": 13.430000000000001,
        "Concrete": 26.860000000000003
    },
    {
        "Area": "Sleeper Area",
        "Date": "8-Nov",
        "Excavation": 300.2,
        "FormWork": 150.1,
        "Rebar": 7.505,
        "Concrete": 15.01
    },
    {
        "Area": "Sleeper Area",
        "Date": "9-Nov",
        "Excavation": 331.8,
        "FormWork": 165.9,
        "Rebar": 8.295,
        "Concrete": 16.59
    },
    {
        "Area": "Sleeper Area",
        "Date": "10-Nov",
        "Excavation": 181.7,
        "FormWork": 90.85,
        "Rebar": 4.5424999999999995,
        "Concrete": 9.084999999999999
    },
    {
        "Area": "Sleeper Area",
        "Date": "11-Nov",
        "Excavation": 671.5,
        "FormWork": 335.75,
        "Rebar": 16.7875,
        "Concrete": 33.575
    },
    {
        "Area": "Sleeper Area",
        "Date": "12-Nov",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "13-Nov",
        "Excavation": 284.4,
        "FormWork": 142.2,
        "Rebar": 7.109999999999999,
        "Concrete": 14.219999999999999
    },
    {
        "Area": "Sleeper Area",
        "Date": "14-Nov",
        "Excavation": 197.5,
        "FormWork": 98.75,
        "Rebar": 4.9375,
        "Concrete": 9.875
    },
    {
        "Area": "Sleeper Area",
        "Date": "15-Nov",
        "Excavation": 189.6,
        "FormWork": 94.8,
        "Rebar": 4.74,
        "Concrete": 9.48
    },
    {
        "Area": "Sleeper Area",
        "Date": "16-Nov",
        "Excavation": 94.8,
        "FormWork": 47.4,
        "Rebar": 2.37,
        "Concrete": 4.74
    },
    {
        "Area": "Sleeper Area",
        "Date": "17-Nov",
        "Excavation": 284.4,
        "FormWork": 142.2,
        "Rebar": 7.109999999999999,
        "Concrete": 14.219999999999999
    },
    {
        "Area": "Sleeper Area",
        "Date": "18-Nov",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "19-Nov",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "20-Nov",
        "Excavation": 379.2,
        "FormWork": 189.6,
        "Rebar": 9.48,
        "Concrete": 18.96
    },
    {
        "Area": "Sleeper Area",
        "Date": "21-Nov",
        "Excavation": 181.7,
        "FormWork": 90.85,
        "Rebar": 4.5424999999999995,
        "Concrete": 9.084999999999999
    },
    {
        "Area": "Sleeper Area",
        "Date": "22-Nov",
        "Excavation": 466.1,
        "FormWork": 233.05,
        "Rebar": 11.652500000000002,
        "Concrete": 23.305000000000003
    },
    {
        "Area": "Sleeper Area",
        "Date": "23-Nov",
        "Excavation": 181.7,
        "FormWork": 90.85,
        "Rebar": 4.5424999999999995,
        "Concrete": 9.084999999999999
    },
    {
        "Area": "Sleeper Area",
        "Date": "24-Nov",
        "Excavation": 360.24,
        "FormWork": 180.12,
        "Rebar": 9.006,
        "Concrete": 18.012
    },
    {
        "Area": "Sleeper Area",
        "Date": "25-Nov",
        "Excavation": 592.5,
        "FormWork": 296.25,
        "Rebar": 14.8125,
        "Concrete": 29.625
    },
    {
        "Area": "Sleeper Area",
        "Date": "26-Nov",
        "Excavation": 758.4,
        "FormWork": 379.2,
        "Rebar": 18.96,
        "Concrete": 37.92
    },
    {
        "Area": "Sleeper Area",
        "Date": "27-Nov",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "28-Nov",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "29-Nov",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "30-Nov",
        "Excavation": 509.55,
        "FormWork": 254.775,
        "Rebar": 12.738750000000001,
        "Concrete": 25.477500000000003
    },
    {
        "Area": "Sleeper Area",
        "Date": "1-Dec",
        "Excavation": 50,
        "FormWork": 25,
        "Rebar": 1.25,
        "Concrete": 2.5
    },
    {
        "Area": "Sleeper Area",
        "Date": "2-Dec",
        "Excavation": 100,
        "FormWork": 50,
        "Rebar": 2.5,
        "Concrete": 5
    },
    {
        "Area": "Sleeper Area",
        "Date": "3-Dec",
        "Excavation": 125,
        "FormWork": 62.5,
        "Rebar": 3.125,
        "Concrete": 6.25
    },
    {
        "Area": "Sleeper Area",
        "Date": "4-Dec",
        "Excavation": 150,
        "FormWork": 75,
        "Rebar": 3.75,
        "Concrete": 7.5
    },
    {
        "Area": "Sleeper Area",
        "Date": "5-Dec",
        "Excavation": 325,
        "FormWork": 162.5,
        "Rebar": 8.125,
        "Concrete": 16.25
    },
    {
        "Area": "Sleeper Area",
        "Date": "6-Dec",
        "Excavation": 115,
        "FormWork": 57.5,
        "Rebar": 2.875,
        "Concrete": 5.75
    },
    {
        "Area": "Sleeper Area",
        "Date": "7-Dec",
        "Excavation": 340,
        "FormWork": 170,
        "Rebar": 8.5,
        "Concrete": 17
    },
    {
        "Area": "Sleeper Area",
        "Date": "8-Dec",
        "Excavation": 190,
        "FormWork": 95,
        "Rebar": 4.75,
        "Concrete": 9.5
    },
    {
        "Area": "Sleeper Area",
        "Date": "9-Dec",
        "Excavation": 210,
        "FormWork": 105,
        "Rebar": 5.25,
        "Concrete": 10.5
    },
    {
        "Area": "Sleeper Area",
        "Date": "10-Dec",
        "Excavation": 115,
        "FormWork": 57.5,
        "Rebar": 2.875,
        "Concrete": 5.75
    },
    {
        "Area": "Sleeper Area",
        "Date": "11-Dec",
        "Excavation": 425,
        "FormWork": 212.5,
        "Rebar": 10.625,
        "Concrete": 21.25
    },
    {
        "Area": "Sleeper Area",
        "Date": "12-Dec",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "13-Dec",
        "Excavation": 180,
        "FormWork": 90,
        "Rebar": 4.5,
        "Concrete": 9
    },
    {
        "Area": "Sleeper Area",
        "Date": "14-Dec",
        "Excavation": 125,
        "FormWork": 62.5,
        "Rebar": 3.125,
        "Concrete": 6.25
    },
    {
        "Area": "Sleeper Area",
        "Date": "15-Dec",
        "Excavation": 120,
        "FormWork": 60,
        "Rebar": 3,
        "Concrete": 6
    },
    {
        "Area": "Sleeper Area",
        "Date": "16-Dec",
        "Excavation": 60,
        "FormWork": 30,
        "Rebar": 1.5,
        "Concrete": 3
    },
    {
        "Area": "Sleeper Area",
        "Date": "17-Dec",
        "Excavation": 180,
        "FormWork": 90,
        "Rebar": 4.5,
        "Concrete": 9
    },
    {
        "Area": "Sleeper Area",
        "Date": "18-Dec",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "19-Dec",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "20-Dec",
        "Excavation": 240,
        "FormWork": 120,
        "Rebar": 6,
        "Concrete": 12
    },
    {
        "Area": "Sleeper Area",
        "Date": "21-Dec",
        "Excavation": 115,
        "FormWork": 57.5,
        "Rebar": 2.875,
        "Concrete": 5.75
    },
    {
        "Area": "Sleeper Area",
        "Date": "22-Dec",
        "Excavation": 295,
        "FormWork": 147.5,
        "Rebar": 7.375,
        "Concrete": 14.75
    },
    {
        "Area": "Sleeper Area",
        "Date": "23-Dec",
        "Excavation": 115,
        "FormWork": 57.5,
        "Rebar": 2.875,
        "Concrete": 5.75
    },
    {
        "Area": "Sleeper Area",
        "Date": "24-Dec",
        "Excavation": 228,
        "FormWork": 114,
        "Rebar": 5.7,
        "Concrete": 11.4
    },
    {
        "Area": "Sleeper Area",
        "Date": "25-Dec",
        "Excavation": 375,
        "FormWork": 187.5,
        "Rebar": 9.375,
        "Concrete": 18.75
    },
    {
        "Area": "Sleeper Area",
        "Date": "26-Dec",
        "Excavation": 480,
        "FormWork": 240,
        "Rebar": 12,
        "Concrete": 24
    },
    {
        "Area": "Sleeper Area",
        "Date": "27-Dec",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "28-Dec",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "29-Dec",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Sleeper Area",
        "Date": "30-Dec",
        "Excavation": 322.5,
        "FormWork": 161.25,
        "Rebar": 8.0625,
        "Concrete": 16.125
    },
    {
        "Area": "Sleeper Area",
        "Date": "31-Dec",
        "Excavation": 115,
        "FormWork": 57.5,
        "Rebar": 2.875,
        "Concrete": 5.75
    },
    {
        "Area": "Building Area",
        "Date": "1-Jun",
        "Excavation": 95,
        "FormWork": 47.5,
        "Rebar": 2.375,
        "Concrete": 4.75
    },
    {
        "Area": "Building Area",
        "Date": "2-Jun",
        "Excavation": 190,
        "FormWork": 95,
        "Rebar": 4.75,
        "Concrete": 9.5
    },
    {
        "Area": "Building Area",
        "Date": "3-Jun",
        "Excavation": 237.5,
        "FormWork": 118.75,
        "Rebar": 5.9375,
        "Concrete": 11.875
    },
    {
        "Area": "Building Area",
        "Date": "4-Jun",
        "Excavation": 285,
        "FormWork": 142.5,
        "Rebar": 7.125,
        "Concrete": 14.25
    },
    {
        "Area": "Building Area",
        "Date": "5-Jun",
        "Excavation": 617.5,
        "FormWork": 308.75,
        "Rebar": 15.4375,
        "Concrete": 30.875
    },
    {
        "Area": "Building Area",
        "Date": "6-Jun",
        "Excavation": 218.5,
        "FormWork": 109.25,
        "Rebar": 5.4625,
        "Concrete": 10.925
    },
    {
        "Area": "Building Area",
        "Date": "7-Jun",
        "Excavation": 646,
        "FormWork": 323,
        "Rebar": 16.150000000000002,
        "Concrete": 32.300000000000004
    },
    {
        "Area": "Building Area",
        "Date": "8-Jun",
        "Excavation": 361,
        "FormWork": 180.5,
        "Rebar": 9.025,
        "Concrete": 18.05
    },
    {
        "Area": "Building Area",
        "Date": "9-Jun",
        "Excavation": 399,
        "FormWork": 199.5,
        "Rebar": 9.975000000000001,
        "Concrete": 19.950000000000003
    },
    {
        "Area": "Building Area",
        "Date": "10-Jun",
        "Excavation": 218.5,
        "FormWork": 109.25,
        "Rebar": 5.4625,
        "Concrete": 10.925
    },
    {
        "Area": "Building Area",
        "Date": "11-Jun",
        "Excavation": 807.5,
        "FormWork": 403.75,
        "Rebar": 20.1875,
        "Concrete": 40.375
    },
    {
        "Area": "Building Area",
        "Date": "12-Jun",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "13-Jun",
        "Excavation": 342,
        "FormWork": 171,
        "Rebar": 8.55,
        "Concrete": 17.1
    },
    {
        "Area": "Building Area",
        "Date": "14-Jun",
        "Excavation": 237.5,
        "FormWork": 118.75,
        "Rebar": 5.9375,
        "Concrete": 11.875
    },
    {
        "Area": "Building Area",
        "Date": "15-Jun",
        "Excavation": 228,
        "FormWork": 114,
        "Rebar": 5.7,
        "Concrete": 11.4
    },
    {
        "Area": "Building Area",
        "Date": "16-Jun",
        "Excavation": 114,
        "FormWork": 57,
        "Rebar": 2.85,
        "Concrete": 5.7
    },
    {
        "Area": "Building Area",
        "Date": "17-Jun",
        "Excavation": 342,
        "FormWork": 171,
        "Rebar": 8.55,
        "Concrete": 17.1
    },
    {
        "Area": "Building Area",
        "Date": "18-Jun",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "19-Jun",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "20-Jun",
        "Excavation": 456,
        "FormWork": 228,
        "Rebar": 11.4,
        "Concrete": 22.8
    },
    {
        "Area": "Building Area",
        "Date": "21-Jun",
        "Excavation": 218.5,
        "FormWork": 109.25,
        "Rebar": 5.4625,
        "Concrete": 10.925
    },
    {
        "Area": "Building Area",
        "Date": "22-Jun",
        "Excavation": 560.5,
        "FormWork": 280.25,
        "Rebar": 14.012500000000001,
        "Concrete": 28.025000000000002
    },
    {
        "Area": "Building Area",
        "Date": "23-Jun",
        "Excavation": 218.5,
        "FormWork": 109.25,
        "Rebar": 5.4625,
        "Concrete": 10.925
    },
    {
        "Area": "Building Area",
        "Date": "24-Jun",
        "Excavation": 433.2,
        "FormWork": 216.6,
        "Rebar": 10.83,
        "Concrete": 21.66
    },
    {
        "Area": "Building Area",
        "Date": "25-Jun",
        "Excavation": 712.5,
        "FormWork": 356.25,
        "Rebar": 17.8125,
        "Concrete": 35.625
    },
    {
        "Area": "Building Area",
        "Date": "26-Jun",
        "Excavation": 912,
        "FormWork": 456,
        "Rebar": 22.8,
        "Concrete": 45.6
    },
    {
        "Area": "Building Area",
        "Date": "27-Jun",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "28-Jun",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "29-Jun",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "30-Jun",
        "Excavation": 612.75,
        "FormWork": 306.375,
        "Rebar": 15.318750000000001,
        "Concrete": 30.637500000000003
    },
    {
        "Area": "Building Area",
        "Date": "1-Jul",
        "Excavation": 90,
        "FormWork": 45,
        "Rebar": 2.25,
        "Concrete": 4.5
    },
    {
        "Area": "Building Area",
        "Date": "2-Jul",
        "Excavation": 180,
        "FormWork": 90,
        "Rebar": 4.5,
        "Concrete": 9
    },
    {
        "Area": "Building Area",
        "Date": "3-Jul",
        "Excavation": 225,
        "FormWork": 112.5,
        "Rebar": 5.625,
        "Concrete": 11.25
    },
    {
        "Area": "Building Area",
        "Date": "4-Jul",
        "Excavation": 270,
        "FormWork": 135,
        "Rebar": 6.75,
        "Concrete": 13.5
    },
    {
        "Area": "Building Area",
        "Date": "5-Jul",
        "Excavation": 585,
        "FormWork": 292.5,
        "Rebar": 14.625,
        "Concrete": 29.25
    },
    {
        "Area": "Building Area",
        "Date": "6-Jul",
        "Excavation": 207,
        "FormWork": 103.5,
        "Rebar": 5.175000000000001,
        "Concrete": 10.350000000000001
    },
    {
        "Area": "Building Area",
        "Date": "7-Jul",
        "Excavation": 612,
        "FormWork": 306,
        "Rebar": 15.3,
        "Concrete": 30.6
    },
    {
        "Area": "Building Area",
        "Date": "8-Jul",
        "Excavation": 342,
        "FormWork": 171,
        "Rebar": 8.55,
        "Concrete": 17.1
    },
    {
        "Area": "Building Area",
        "Date": "9-Jul",
        "Excavation": 378,
        "FormWork": 189,
        "Rebar": 9.450000000000001,
        "Concrete": 18.900000000000002
    },
    {
        "Area": "Building Area",
        "Date": "10-Jul",
        "Excavation": 207,
        "FormWork": 103.5,
        "Rebar": 5.175000000000001,
        "Concrete": 10.350000000000001
    },
    {
        "Area": "Building Area",
        "Date": "11-Jul",
        "Excavation": 765,
        "FormWork": 382.5,
        "Rebar": 19.125,
        "Concrete": 38.25
    },
    {
        "Area": "Building Area",
        "Date": "12-Jul",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "13-Jul",
        "Excavation": 324,
        "FormWork": 162,
        "Rebar": 8.1,
        "Concrete": 16.2
    },
    {
        "Area": "Building Area",
        "Date": "14-Jul",
        "Excavation": 225,
        "FormWork": 112.5,
        "Rebar": 5.625,
        "Concrete": 11.25
    },
    {
        "Area": "Building Area",
        "Date": "15-Jul",
        "Excavation": 216,
        "FormWork": 108,
        "Rebar": 5.4,
        "Concrete": 10.8
    },
    {
        "Area": "Building Area",
        "Date": "16-Jul",
        "Excavation": 108,
        "FormWork": 54,
        "Rebar": 2.7,
        "Concrete": 5.4
    },
    {
        "Area": "Building Area",
        "Date": "17-Jul",
        "Excavation": 324,
        "FormWork": 162,
        "Rebar": 8.1,
        "Concrete": 16.2
    },
    {
        "Area": "Building Area",
        "Date": "18-Jul",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "19-Jul",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "20-Jul",
        "Excavation": 432,
        "FormWork": 216,
        "Rebar": 10.8,
        "Concrete": 21.6
    },
    {
        "Area": "Building Area",
        "Date": "21-Jul",
        "Excavation": 207,
        "FormWork": 103.5,
        "Rebar": 5.175000000000001,
        "Concrete": 10.350000000000001
    },
    {
        "Area": "Building Area",
        "Date": "22-Jul",
        "Excavation": 531,
        "FormWork": 265.5,
        "Rebar": 13.275,
        "Concrete": 26.55
    },
    {
        "Area": "Building Area",
        "Date": "23-Jul",
        "Excavation": 207,
        "FormWork": 103.5,
        "Rebar": 5.175000000000001,
        "Concrete": 10.350000000000001
    },
    {
        "Area": "Building Area",
        "Date": "24-Jul",
        "Excavation": 410.4,
        "FormWork": 205.2,
        "Rebar": 10.26,
        "Concrete": 20.52
    },
    {
        "Area": "Building Area",
        "Date": "25-Jul",
        "Excavation": 675,
        "FormWork": 337.5,
        "Rebar": 16.875,
        "Concrete": 33.75
    },
    {
        "Area": "Building Area",
        "Date": "26-Jul",
        "Excavation": 864,
        "FormWork": 432,
        "Rebar": 21.6,
        "Concrete": 43.2
    },
    {
        "Area": "Building Area",
        "Date": "27-Jul",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "28-Jul",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "29-Jul",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "30-Jul",
        "Excavation": 580.5,
        "FormWork": 290.25,
        "Rebar": 14.512500000000001,
        "Concrete": 29.025000000000002
    },
    {
        "Area": "Building Area",
        "Date": "31-Jul",
        "Excavation": 207,
        "FormWork": 103.5,
        "Rebar": 5.175000000000001,
        "Concrete": 10.350000000000001
    },
    {
        "Area": "Building Area",
        "Date": "1-Aug",
        "Excavation": 85,
        "FormWork": 42.5,
        "Rebar": 2.125,
        "Concrete": 4.25
    },
    {
        "Area": "Building Area",
        "Date": "2-Aug",
        "Excavation": 170,
        "FormWork": 85,
        "Rebar": 4.25,
        "Concrete": 8.5
    },
    {
        "Area": "Building Area",
        "Date": "3-Aug",
        "Excavation": 212.5,
        "FormWork": 106.25,
        "Rebar": 5.3125,
        "Concrete": 10.625
    },
    {
        "Area": "Building Area",
        "Date": "4-Aug",
        "Excavation": 255,
        "FormWork": 127.5,
        "Rebar": 6.375,
        "Concrete": 12.75
    },
    {
        "Area": "Building Area",
        "Date": "5-Aug",
        "Excavation": 552.5,
        "FormWork": 276.25,
        "Rebar": 13.8125,
        "Concrete": 27.625
    },
    {
        "Area": "Building Area",
        "Date": "6-Aug",
        "Excavation": 195.5,
        "FormWork": 97.75,
        "Rebar": 4.8875,
        "Concrete": 9.775
    },
    {
        "Area": "Building Area",
        "Date": "7-Aug",
        "Excavation": 578,
        "FormWork": 289,
        "Rebar": 14.450000000000001,
        "Concrete": 28.900000000000002
    },
    {
        "Area": "Building Area",
        "Date": "8-Aug",
        "Excavation": 323,
        "FormWork": 161.5,
        "Rebar": 8.075000000000001,
        "Concrete": 16.150000000000002
    },
    {
        "Area": "Building Area",
        "Date": "9-Aug",
        "Excavation": 357,
        "FormWork": 178.5,
        "Rebar": 8.925,
        "Concrete": 17.85
    },
    {
        "Area": "Building Area",
        "Date": "10-Aug",
        "Excavation": 195.5,
        "FormWork": 97.75,
        "Rebar": 4.8875,
        "Concrete": 9.775
    },
    {
        "Area": "Building Area",
        "Date": "11-Aug",
        "Excavation": 722.5,
        "FormWork": 361.25,
        "Rebar": 18.0625,
        "Concrete": 36.125
    },
    {
        "Area": "Building Area",
        "Date": "12-Aug",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "13-Aug",
        "Excavation": 306,
        "FormWork": 153,
        "Rebar": 7.65,
        "Concrete": 15.3
    },
    {
        "Area": "Building Area",
        "Date": "14-Aug",
        "Excavation": 212.5,
        "FormWork": 106.25,
        "Rebar": 5.3125,
        "Concrete": 10.625
    },
    {
        "Area": "Building Area",
        "Date": "15-Aug",
        "Excavation": 204,
        "FormWork": 102,
        "Rebar": 5.1000000000000005,
        "Concrete": 10.200000000000001
    },
    {
        "Area": "Building Area",
        "Date": "16-Aug",
        "Excavation": 102,
        "FormWork": 51,
        "Rebar": 2.5500000000000003,
        "Concrete": 5.1000000000000005
    },
    {
        "Area": "Building Area",
        "Date": "17-Aug",
        "Excavation": 306,
        "FormWork": 153,
        "Rebar": 7.65,
        "Concrete": 15.3
    },
    {
        "Area": "Building Area",
        "Date": "18-Aug",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "19-Aug",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "20-Aug",
        "Excavation": 408,
        "FormWork": 204,
        "Rebar": 10.200000000000001,
        "Concrete": 20.400000000000002
    },
    {
        "Area": "Building Area",
        "Date": "21-Aug",
        "Excavation": 195.5,
        "FormWork": 97.75,
        "Rebar": 4.8875,
        "Concrete": 9.775
    },
    {
        "Area": "Building Area",
        "Date": "22-Aug",
        "Excavation": 501.5,
        "FormWork": 250.75,
        "Rebar": 12.537500000000001,
        "Concrete": 25.075000000000003
    },
    {
        "Area": "Building Area",
        "Date": "23-Aug",
        "Excavation": 195.5,
        "FormWork": 97.75,
        "Rebar": 4.8875,
        "Concrete": 9.775
    },
    {
        "Area": "Building Area",
        "Date": "24-Aug",
        "Excavation": 387.6,
        "FormWork": 193.8,
        "Rebar": 9.690000000000001,
        "Concrete": 19.380000000000003
    },
    {
        "Area": "Building Area",
        "Date": "25-Aug",
        "Excavation": 637.5,
        "FormWork": 318.75,
        "Rebar": 15.9375,
        "Concrete": 31.875
    },
    {
        "Area": "Building Area",
        "Date": "26-Aug",
        "Excavation": 816,
        "FormWork": 408,
        "Rebar": 20.400000000000002,
        "Concrete": 40.800000000000004
    },
    {
        "Area": "Building Area",
        "Date": "27-Aug",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "28-Aug",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "29-Aug",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "30-Aug",
        "Excavation": 548.25,
        "FormWork": 274.125,
        "Rebar": 13.70625,
        "Concrete": 27.4125
    },
    {
        "Area": "Building Area",
        "Date": "31-Aug",
        "Excavation": 195.5,
        "FormWork": 97.75,
        "Rebar": 4.8875,
        "Concrete": 9.775
    },
    {
        "Area": "Building Area",
        "Date": "1-Sep",
        "Excavation": 80,
        "FormWork": 40,
        "Rebar": 2,
        "Concrete": 4
    },
    {
        "Area": "Building Area",
        "Date": "2-Sep",
        "Excavation": 160,
        "FormWork": 80,
        "Rebar": 4,
        "Concrete": 8
    },
    {
        "Area": "Building Area",
        "Date": "3-Sep",
        "Excavation": 200,
        "FormWork": 100,
        "Rebar": 5,
        "Concrete": 10
    },
    {
        "Area": "Building Area",
        "Date": "4-Sep",
        "Excavation": 240,
        "FormWork": 120,
        "Rebar": 6,
        "Concrete": 12
    },
    {
        "Area": "Building Area",
        "Date": "5-Sep",
        "Excavation": 520,
        "FormWork": 260,
        "Rebar": 13,
        "Concrete": 26
    },
    {
        "Area": "Building Area",
        "Date": "6-Sep",
        "Excavation": 184,
        "FormWork": 92,
        "Rebar": 4.6000000000000005,
        "Concrete": 9.200000000000001
    },
    {
        "Area": "Building Area",
        "Date": "7-Sep",
        "Excavation": 544,
        "FormWork": 272,
        "Rebar": 13.600000000000001,
        "Concrete": 27.200000000000003
    },
    {
        "Area": "Building Area",
        "Date": "8-Sep",
        "Excavation": 304,
        "FormWork": 152,
        "Rebar": 7.6000000000000005,
        "Concrete": 15.200000000000001
    },
    {
        "Area": "Building Area",
        "Date": "9-Sep",
        "Excavation": 336,
        "FormWork": 168,
        "Rebar": 8.4,
        "Concrete": 16.8
    },
    {
        "Area": "Building Area",
        "Date": "10-Sep",
        "Excavation": 184,
        "FormWork": 92,
        "Rebar": 4.6000000000000005,
        "Concrete": 9.200000000000001
    },
    {
        "Area": "Building Area",
        "Date": "11-Sep",
        "Excavation": 680,
        "FormWork": 340,
        "Rebar": 17,
        "Concrete": 34
    },
    {
        "Area": "Building Area",
        "Date": "12-Sep",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "13-Sep",
        "Excavation": 288,
        "FormWork": 144,
        "Rebar": 7.2,
        "Concrete": 14.4
    },
    {
        "Area": "Building Area",
        "Date": "14-Sep",
        "Excavation": 200,
        "FormWork": 100,
        "Rebar": 5,
        "Concrete": 10
    },
    {
        "Area": "Building Area",
        "Date": "15-Sep",
        "Excavation": 192,
        "FormWork": 96,
        "Rebar": 4.800000000000001,
        "Concrete": 9.600000000000001
    },
    {
        "Area": "Building Area",
        "Date": "16-Sep",
        "Excavation": 96,
        "FormWork": 48,
        "Rebar": 2.4000000000000004,
        "Concrete": 4.800000000000001
    },
    {
        "Area": "Building Area",
        "Date": "17-Sep",
        "Excavation": 288,
        "FormWork": 144,
        "Rebar": 7.2,
        "Concrete": 14.4
    },
    {
        "Area": "Building Area",
        "Date": "18-Sep",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "19-Sep",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "20-Sep",
        "Excavation": 384,
        "FormWork": 192,
        "Rebar": 9.600000000000001,
        "Concrete": 19.200000000000003
    },
    {
        "Area": "Building Area",
        "Date": "21-Sep",
        "Excavation": 184,
        "FormWork": 92,
        "Rebar": 4.6000000000000005,
        "Concrete": 9.200000000000001
    },
    {
        "Area": "Building Area",
        "Date": "22-Sep",
        "Excavation": 472,
        "FormWork": 236,
        "Rebar": 11.8,
        "Concrete": 23.6
    },
    {
        "Area": "Building Area",
        "Date": "23-Sep",
        "Excavation": 184,
        "FormWork": 92,
        "Rebar": 4.6000000000000005,
        "Concrete": 9.200000000000001
    },
    {
        "Area": "Building Area",
        "Date": "24-Sep",
        "Excavation": 364.8,
        "FormWork": 182.4,
        "Rebar": 9.120000000000001,
        "Concrete": 18.240000000000002
    },
    {
        "Area": "Building Area",
        "Date": "25-Sep",
        "Excavation": 600,
        "FormWork": 300,
        "Rebar": 15,
        "Concrete": 30
    },
    {
        "Area": "Building Area",
        "Date": "26-Sep",
        "Excavation": 768,
        "FormWork": 384,
        "Rebar": 19.200000000000003,
        "Concrete": 38.400000000000006
    },
    {
        "Area": "Building Area",
        "Date": "27-Sep",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "28-Sep",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "29-Sep",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "30-Sep",
        "Excavation": 516,
        "FormWork": 258,
        "Rebar": 12.9,
        "Concrete": 25.8
    },
    {
        "Area": "Building Area",
        "Date": "1-Oct",
        "Excavation": 184,
        "FormWork": 92,
        "Rebar": 4.6000000000000005,
        "Concrete": 9.200000000000001
    },
    {
        "Area": "Building Area",
        "Date": "2-Oct",
        "Excavation": 78,
        "FormWork": 39,
        "Rebar": 1.9500000000000002,
        "Concrete": 3.9000000000000004
    },
    {
        "Area": "Building Area",
        "Date": "3-Oct",
        "Excavation": 156,
        "FormWork": 78,
        "Rebar": 3.9000000000000004,
        "Concrete": 7.800000000000001
    },
    {
        "Area": "Building Area",
        "Date": "4-Oct",
        "Excavation": 195,
        "FormWork": 97.5,
        "Rebar": 4.875,
        "Concrete": 9.75
    },
    {
        "Area": "Building Area",
        "Date": "5-Oct",
        "Excavation": 234,
        "FormWork": 117,
        "Rebar": 5.8500000000000005,
        "Concrete": 11.700000000000001
    },
    {
        "Area": "Building Area",
        "Date": "6-Oct",
        "Excavation": 507,
        "FormWork": 253.5,
        "Rebar": 12.675,
        "Concrete": 25.35
    },
    {
        "Area": "Building Area",
        "Date": "7-Oct",
        "Excavation": 179.4,
        "FormWork": 89.7,
        "Rebar": 4.485,
        "Concrete": 8.97
    },
    {
        "Area": "Building Area",
        "Date": "8-Oct",
        "Excavation": 530.4,
        "FormWork": 265.2,
        "Rebar": 13.26,
        "Concrete": 26.52
    },
    {
        "Area": "Building Area",
        "Date": "9-Oct",
        "Excavation": 296.4,
        "FormWork": 148.2,
        "Rebar": 7.41,
        "Concrete": 14.82
    },
    {
        "Area": "Building Area",
        "Date": "10-Oct",
        "Excavation": 327.6,
        "FormWork": 163.8,
        "Rebar": 8.190000000000001,
        "Concrete": 16.380000000000003
    },
    {
        "Area": "Building Area",
        "Date": "11-Oct",
        "Excavation": 179.4,
        "FormWork": 89.7,
        "Rebar": 4.485,
        "Concrete": 8.97
    },
    {
        "Area": "Building Area",
        "Date": "12-Oct",
        "Excavation": 663,
        "FormWork": 331.5,
        "Rebar": 16.575,
        "Concrete": 33.15
    },
    {
        "Area": "Building Area",
        "Date": "13-Oct",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "14-Oct",
        "Excavation": 280.8,
        "FormWork": 140.4,
        "Rebar": 7.0200000000000005,
        "Concrete": 14.040000000000001
    },
    {
        "Area": "Building Area",
        "Date": "15-Oct",
        "Excavation": 195,
        "FormWork": 97.5,
        "Rebar": 4.875,
        "Concrete": 9.75
    },
    {
        "Area": "Building Area",
        "Date": "16-Oct",
        "Excavation": 187.2,
        "FormWork": 93.6,
        "Rebar": 4.68,
        "Concrete": 9.36
    },
    {
        "Area": "Building Area",
        "Date": "17-Oct",
        "Excavation": 93.6,
        "FormWork": 46.8,
        "Rebar": 2.34,
        "Concrete": 4.68
    },
    {
        "Area": "Building Area",
        "Date": "18-Oct",
        "Excavation": 280.8,
        "FormWork": 140.4,
        "Rebar": 7.0200000000000005,
        "Concrete": 14.040000000000001
    },
    {
        "Area": "Building Area",
        "Date": "19-Oct",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "20-Oct",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "21-Oct",
        "Excavation": 374.4,
        "FormWork": 187.2,
        "Rebar": 9.36,
        "Concrete": 18.72
    },
    {
        "Area": "Building Area",
        "Date": "22-Oct",
        "Excavation": 179.4,
        "FormWork": 89.7,
        "Rebar": 4.485,
        "Concrete": 8.97
    },
    {
        "Area": "Building Area",
        "Date": "23-Oct",
        "Excavation": 460.2,
        "FormWork": 230.1,
        "Rebar": 11.505,
        "Concrete": 23.01
    },
    {
        "Area": "Building Area",
        "Date": "24-Oct",
        "Excavation": 179.4,
        "FormWork": 89.7,
        "Rebar": 4.485,
        "Concrete": 8.97
    },
    {
        "Area": "Building Area",
        "Date": "25-Oct",
        "Excavation": 355.68,
        "FormWork": 177.84,
        "Rebar": 8.892000000000001,
        "Concrete": 17.784000000000002
    },
    {
        "Area": "Building Area",
        "Date": "26-Oct",
        "Excavation": 585,
        "FormWork": 292.5,
        "Rebar": 14.625,
        "Concrete": 29.25
    },
    {
        "Area": "Building Area",
        "Date": "27-Oct",
        "Excavation": 748.8,
        "FormWork": 374.4,
        "Rebar": 18.72,
        "Concrete": 37.44
    },
    {
        "Area": "Building Area",
        "Date": "28-Oct",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "29-Oct",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "30-Oct",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "31-Oct",
        "Excavation": 503.1,
        "FormWork": 251.55,
        "Rebar": 12.5775,
        "Concrete": 25.155
    },
    {
        "Area": "Building Area",
        "Date": "1-Nov",
        "Excavation": 79,
        "FormWork": 39.5,
        "Rebar": 1.975,
        "Concrete": 3.95
    },
    {
        "Area": "Building Area",
        "Date": "2-Nov",
        "Excavation": 158,
        "FormWork": 79,
        "Rebar": 3.95,
        "Concrete": 7.9
    },
    {
        "Area": "Building Area",
        "Date": "3-Nov",
        "Excavation": 197.5,
        "FormWork": 98.75,
        "Rebar": 4.9375,
        "Concrete": 9.875
    },
    {
        "Area": "Building Area",
        "Date": "4-Nov",
        "Excavation": 237,
        "FormWork": 118.5,
        "Rebar": 5.925000000000001,
        "Concrete": 11.850000000000001
    },
    {
        "Area": "Building Area",
        "Date": "5-Nov",
        "Excavation": 513.5,
        "FormWork": 256.75,
        "Rebar": 12.8375,
        "Concrete": 25.675
    },
    {
        "Area": "Building Area",
        "Date": "6-Nov",
        "Excavation": 181.7,
        "FormWork": 90.85,
        "Rebar": 4.5424999999999995,
        "Concrete": 9.084999999999999
    },
    {
        "Area": "Building Area",
        "Date": "7-Nov",
        "Excavation": 537.2,
        "FormWork": 268.6,
        "Rebar": 13.430000000000001,
        "Concrete": 26.860000000000003
    },
    {
        "Area": "Building Area",
        "Date": "8-Nov",
        "Excavation": 300.2,
        "FormWork": 150.1,
        "Rebar": 7.505,
        "Concrete": 15.01
    },
    {
        "Area": "Building Area",
        "Date": "9-Nov",
        "Excavation": 331.8,
        "FormWork": 165.9,
        "Rebar": 8.295,
        "Concrete": 16.59
    },
    {
        "Area": "Building Area",
        "Date": "10-Nov",
        "Excavation": 181.7,
        "FormWork": 90.85,
        "Rebar": 4.5424999999999995,
        "Concrete": 9.084999999999999
    },
    {
        "Area": "Building Area",
        "Date": "11-Nov",
        "Excavation": 671.5,
        "FormWork": 335.75,
        "Rebar": 16.7875,
        "Concrete": 33.575
    },
    {
        "Area": "Building Area",
        "Date": "12-Nov",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "13-Nov",
        "Excavation": 284.4,
        "FormWork": 142.2,
        "Rebar": 7.109999999999999,
        "Concrete": 14.219999999999999
    },
    {
        "Area": "Building Area",
        "Date": "14-Nov",
        "Excavation": 197.5,
        "FormWork": 98.75,
        "Rebar": 4.9375,
        "Concrete": 9.875
    },
    {
        "Area": "Building Area",
        "Date": "15-Nov",
        "Excavation": 189.6,
        "FormWork": 94.8,
        "Rebar": 4.74,
        "Concrete": 9.48
    },
    {
        "Area": "Building Area",
        "Date": "16-Nov",
        "Excavation": 94.8,
        "FormWork": 47.4,
        "Rebar": 2.37,
        "Concrete": 4.74
    },
    {
        "Area": "Building Area",
        "Date": "17-Nov",
        "Excavation": 284.4,
        "FormWork": 142.2,
        "Rebar": 7.109999999999999,
        "Concrete": 14.219999999999999
    },
    {
        "Area": "Building Area",
        "Date": "18-Nov",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "19-Nov",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "20-Nov",
        "Excavation": 379.2,
        "FormWork": 189.6,
        "Rebar": 9.48,
        "Concrete": 18.96
    },
    {
        "Area": "Building Area",
        "Date": "21-Nov",
        "Excavation": 181.7,
        "FormWork": 90.85,
        "Rebar": 4.5424999999999995,
        "Concrete": 9.084999999999999
    },
    {
        "Area": "Building Area",
        "Date": "22-Nov",
        "Excavation": 466.1,
        "FormWork": 233.05,
        "Rebar": 11.652500000000002,
        "Concrete": 23.305000000000003
    },
    {
        "Area": "Building Area",
        "Date": "23-Nov",
        "Excavation": 181.7,
        "FormWork": 90.85,
        "Rebar": 4.5424999999999995,
        "Concrete": 9.084999999999999
    },
    {
        "Area": "Building Area",
        "Date": "24-Nov",
        "Excavation": 360.24,
        "FormWork": 180.12,
        "Rebar": 9.006,
        "Concrete": 18.012
    },
    {
        "Area": "Building Area",
        "Date": "25-Nov",
        "Excavation": 592.5,
        "FormWork": 296.25,
        "Rebar": 14.8125,
        "Concrete": 29.625
    },
    {
        "Area": "Building Area",
        "Date": "26-Nov",
        "Excavation": 758.4,
        "FormWork": 379.2,
        "Rebar": 18.96,
        "Concrete": 37.92
    },
    {
        "Area": "Building Area",
        "Date": "27-Nov",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "28-Nov",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "29-Nov",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "30-Nov",
        "Excavation": 509.55,
        "FormWork": 254.775,
        "Rebar": 12.738750000000001,
        "Concrete": 25.477500000000003
    },
    {
        "Area": "Building Area",
        "Date": "1-Dec",
        "Excavation": 50,
        "FormWork": 25,
        "Rebar": 1.25,
        "Concrete": 2.5
    },
    {
        "Area": "Building Area",
        "Date": "2-Dec",
        "Excavation": 100,
        "FormWork": 50,
        "Rebar": 2.5,
        "Concrete": 5
    },
    {
        "Area": "Building Area",
        "Date": "3-Dec",
        "Excavation": 125,
        "FormWork": 62.5,
        "Rebar": 3.125,
        "Concrete": 6.25
    },
    {
        "Area": "Building Area",
        "Date": "4-Dec",
        "Excavation": 150,
        "FormWork": 75,
        "Rebar": 3.75,
        "Concrete": 7.5
    },
    {
        "Area": "Building Area",
        "Date": "5-Dec",
        "Excavation": 325,
        "FormWork": 162.5,
        "Rebar": 8.125,
        "Concrete": 16.25
    },
    {
        "Area": "Building Area",
        "Date": "6-Dec",
        "Excavation": 115,
        "FormWork": 57.5,
        "Rebar": 2.875,
        "Concrete": 5.75
    },
    {
        "Area": "Building Area",
        "Date": "7-Dec",
        "Excavation": 340,
        "FormWork": 170,
        "Rebar": 8.5,
        "Concrete": 17
    },
    {
        "Area": "Building Area",
        "Date": "8-Dec",
        "Excavation": 190,
        "FormWork": 95,
        "Rebar": 4.75,
        "Concrete": 9.5
    },
    {
        "Area": "Building Area",
        "Date": "9-Dec",
        "Excavation": 210,
        "FormWork": 105,
        "Rebar": 5.25,
        "Concrete": 10.5
    },
    {
        "Area": "Building Area",
        "Date": "10-Dec",
        "Excavation": 115,
        "FormWork": 57.5,
        "Rebar": 2.875,
        "Concrete": 5.75
    },
    {
        "Area": "Building Area",
        "Date": "11-Dec",
        "Excavation": 425,
        "FormWork": 212.5,
        "Rebar": 10.625,
        "Concrete": 21.25
    },
    {
        "Area": "Building Area",
        "Date": "12-Dec",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "13-Dec",
        "Excavation": 180,
        "FormWork": 90,
        "Rebar": 4.5,
        "Concrete": 9
    },
    {
        "Area": "Building Area",
        "Date": "14-Dec",
        "Excavation": 125,
        "FormWork": 62.5,
        "Rebar": 3.125,
        "Concrete": 6.25
    },
    {
        "Area": "Building Area",
        "Date": "15-Dec",
        "Excavation": 120,
        "FormWork": 60,
        "Rebar": 3,
        "Concrete": 6
    },
    {
        "Area": "Building Area",
        "Date": "16-Dec",
        "Excavation": 60,
        "FormWork": 30,
        "Rebar": 1.5,
        "Concrete": 3
    },
    {
        "Area": "Building Area",
        "Date": "17-Dec",
        "Excavation": 180,
        "FormWork": 90,
        "Rebar": 4.5,
        "Concrete": 9
    },
    {
        "Area": "Building Area",
        "Date": "18-Dec",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "19-Dec",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "20-Dec",
        "Excavation": 240,
        "FormWork": 120,
        "Rebar": 6,
        "Concrete": 12
    },
    {
        "Area": "Building Area",
        "Date": "21-Dec",
        "Excavation": 115,
        "FormWork": 57.5,
        "Rebar": 2.875,
        "Concrete": 5.75
    },
    {
        "Area": "Building Area",
        "Date": "22-Dec",
        "Excavation": 295,
        "FormWork": 147.5,
        "Rebar": 7.375,
        "Concrete": 14.75
    },
    {
        "Area": "Building Area",
        "Date": "23-Dec",
        "Excavation": 115,
        "FormWork": 57.5,
        "Rebar": 2.875,
        "Concrete": 5.75
    },
    {
        "Area": "Building Area",
        "Date": "24-Dec",
        "Excavation": 228,
        "FormWork": 114,
        "Rebar": 5.7,
        "Concrete": 11.4
    },
    {
        "Area": "Building Area",
        "Date": "25-Dec",
        "Excavation": 375,
        "FormWork": 187.5,
        "Rebar": 9.375,
        "Concrete": 18.75
    },
    {
        "Area": "Building Area",
        "Date": "26-Dec",
        "Excavation": 480,
        "FormWork": 240,
        "Rebar": 12,
        "Concrete": 24
    },
    {
        "Area": "Building Area",
        "Date": "27-Dec",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "28-Dec",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "29-Dec",
        "Excavation": 0,
        "FormWork": 0,
        "Rebar": 0,
        "Concrete": 0
    },
    {
        "Area": "Building Area",
        "Date": "30-Dec",
        "Excavation": 322.5,
        "FormWork": 161.25,
        "Rebar": 8.0625,
        "Concrete": 16.125
    },
    {
        "Area": "Building Area",
        "Date": "31-Dec",
        "Excavation": 115,
        "FormWork": 57.5,
        "Rebar": 2.875,
        "Concrete": 5.75
    }
]