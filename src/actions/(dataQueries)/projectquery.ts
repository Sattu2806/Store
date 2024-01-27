import prisma from "@/lib/prismadb";


const GetProjectTotal = async () => {
    try {
    const totalValues = await prisma.project.aggregate({
        _sum:{
          FormWork:true,
          Concrete:true,
          Excavation:true,
          Rebar:true
        },
    
    });
    const totalScopeQt = await prisma.totalScope.aggregate({
        _sum:{
          totalFoundations:true,
          concreteQty:true,
          excavationQty:true,
          rebarQty:true
        },
    
      });

      return {success: {totalValues, totalScopeQt}}
  } catch (error) {
    console.error(error);
    return {error: 'Error getting total of totalScope and project'}
  }
}
