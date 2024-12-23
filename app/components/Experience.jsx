import Card from './Card';

export default function Experience() {
  return (
    <div className="flex justify-center py-28 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 place-items-center">
        <div className="md:transform md:-translate-y-16">
          <Card
            title="Staff Data Engineer"
            year="Now"
            company="Aimtal"
            imgSrc="/assets/staff_engineer.png"
          />
        </div>
        <div className="md:transform md:-translate-y-12">
          <Card
            title="Sr. Data Engineer"
            year="2023"
            company="Empresas SB"
            imgSrc="/assets/senior_engineer.png"
          />
        </div>
        <div className="md:transform md:-translate-y-14">
          <Card
            title="Data Engineer"
            year="2022"
            company="DataSalmon"
            imgSrc="/assets/data_scientist.png"
          />
        </div>
        <div className="md:transform md:-translate-y-10">
          <Card
            title="Data Scientist"
            year="2021"
            company="DataSalmon"
            imgSrc="/assets/data_scientist.png"
          />
        </div>
        <div className="md:transform md:-translate-y-10">
          <Card
            title="Data Analyst"
            year="2019"
            company="Drill Codes"
            imgSrc="/assets/data_analyst.png"
          />
        </div>
      </div>
    </div>
  );
}
