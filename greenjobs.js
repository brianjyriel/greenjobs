/**
 *
 *WODfor9/29/15
 *Createdbybrianjyrielon9/29/15.
 */

console.log("Runninggreenjobs.js");
console.log("");

//variabledeclaration
vartestdata=greenjobs;


console.log(listIndustries(testdata));
console.log(countyGreenJobs(testdata));
console.log(testdata,'PV');

/**
 *listIndustries(data).Thisfunctioncanbepassedgreenjobsandreturnsanarrayofstrings
 *indicatingalltheindustriesinthedataset(noduplicates).
 *
 *@paramdata
 */

functionlistIndustries(data)
{
  console.log("CalledlistIndustries");
  varindustry=_.pluck(data,'Industry');
  return_.uniq(industry);
}

/**
 *countyGreenJobs(data).Thisfunctioncanbepassedgreenjobsandreturnsanobjectwherethekeys
 *areCountynamesandthevaluesarethenumberofGreenJobslistedinthatCounty.Forexample:
 *
 *@paramdata
 *
 */

functioncountyGreenJobs(data)
{
  console.log("CalledcountryGreenJobs");
  varcounty=_.pluck(data,'County');
  varcountyName=_.uniq(county);

  returncountyName;


}

/**
 *ThisfunctioncanbepassedgreenjobsandastringandreturnsalistofJobTitlescontaining
 *thepassedstring.Forexample,jobsWithKeyword(greenjobs,“PV”)shouldreturn["Electrician
 *(PV)","PVSystemDesigns","PVTechnician","PV"].
 *
 *@paramdata
 */

functionjobswithKeyword(data,keyword)
{
  console.log("CalledjobswithKeyword");
  varjobs=_.filter(data,function(num)
  {
    returnnum['JobTitle'].indexOf(keyword)!=-1;
  });

  return_.pluck(jobs,'JobTitle')
}

/**
 *Thisfunctioncanbepassedgreenjobsandreturnsanarraycontainingobjectswithkeys“industry”and
 *“jobs”.Thevalueoftheindustrykeyisanindustryname,andthevalueofjobsisthenumberofjobsassociatedwith
 *thatindustry.
 *
 *@paramdata
 */

functionindustryJobs(data)
{
  console.log("CalledindustryJobs");

}

/**
 *ThisfunctioncanbepassedgreenjobsandreturnstheobjectfromthearrayreturnedbyindustryJobswiththelargest
 *valueforjobs.Forexample:{industry:"Construction",jobs:175}.
 *
 *@paramdata
 */

functionmaxIndustryJobs(data)
{
  console.log("CalledmaxIndustryJobs");

}