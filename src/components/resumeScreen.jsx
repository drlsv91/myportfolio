import React from 'react'
import ExperienceInfo from './common/experienceInfo'
import Rating from './common/rating'
import ShowSkillContainer from './common/showSkillContainer'
import Title from './common/title'

const ResumeScreen = () => {
  return (
    <div className="mobile-size padding-4 ">
      <div className=" d-flex justify-content-between mobile-container ">
        <div className="width-50">
          <Title label="Professional Experience" />

          <ExperienceInfo
            companyName="StanLab VR, Lagos"
            year="2020 - Present"
            position="FullStack Engineer"
          >
            <div className="font-size-14px paragraphs">
              <p>
                Built the backend of stanlab web application (Node js, Express
                js, and MongoDB database)
              </p>
              <p>
                Built 3 frontends of the stanlab web application with (JS,
                React, and Redux)
              </p>
              <p>
                Designed and Implemented API that is consumed by the stanlab
                desktop application.
              </p>
              <p>Successfully integrated the Stripe payment gateway.</p>
            </div>
          </ExperienceInfo>
        </div>

        <div className="mobile-container width-40">
          <div className="">
            <Title label="Programming Laguages" />
            <div className="mt-4">
              <ShowSkillContainer
                leftText="JavaScript"
                rightComponent={
                  <Rating numberOfDivs={7} numberOfStrength={7} />
                }
              />
              <ShowSkillContainer
                styles="mt-3"
                leftText="TypeScript"
                rightComponent={
                  <Rating numberOfDivs={7} numberOfStrength={6} />
                }
              />
              <ShowSkillContainer
                styles="mt-3"
                leftText="Python"
                rightComponent={
                  <Rating numberOfDivs={7} numberOfStrength={5} />
                }
              />
            </div>
          </div>
        </div>
      </div>
      {/* ****************************************************** */}
      <div className=" d-flex justify-content-between mobile-container">
        <div className="width-50">
          <ExperienceInfo
            companyName="Farmcorps, Lagos "
            year="March  2019 - May  2019"
            position="Frontend Engineer"
          >
            <div className="font-size-14px paragraphs">
              <p>
                Built and maintained the company’s official website with (
                HTML5, CSS3, Javascript, Bootstrap, and JQuery).
              </p>
              <p>
                Worked with backend technologies including MVC frameworks like
                Laravel, SQL databases & RESTful JSON APIs.
              </p>
              <p>
                Ensured scalability of frontend elements by optimizing them for
                loading speed and performance.
              </p>
              <p>Trained new frontend developer interns.</p>
            </div>
          </ExperienceInfo>
        </div>

        <div className="width-40">
          <Title label="Backend Skills" />
          <div className="mt-4">
            <ShowSkillContainer
              leftText="Nodejs"
              rightComponent={<Rating numberOfDivs={7} numberOfStrength={7} />}
            />
            <ShowSkillContainer
              styles="mt-3"
              leftText="Expressjs"
              rightComponent={<Rating numberOfDivs={7} numberOfStrength={7} />}
            />
            <ShowSkillContainer
              styles="mt-3"
              leftText="MongoDB"
              rightComponent={<Rating numberOfDivs={7} numberOfStrength={6} />}
            />
            <ShowSkillContainer
              styles="mt-3"
              leftText="MySQL"
              rightComponent={<Rating numberOfDivs={7} numberOfStrength={5} />}
            />
            <ShowSkillContainer
              styles="mt-3"
              leftText="Ejs"
              rightComponent={<Rating numberOfDivs={7} numberOfStrength={5} />}
            />
          </div>
        </div>
      </div>
      {/* ****************************************************** */}
      <div className=" d-flex justify-content-between mobile-container">
        <div className="width-50">
          <ExperienceInfo
            companyName="JetLight, Lagos  "
            year="August  2019 - September  2019"
            position="Frontend Engineer"
          >
            <div className="font-size-14px paragraphs">
              <p>
                Built a web application that calculates the amount of
                electricity consumed in an apartment and suggests the best
                inverter to be used for the apartment.
              </p>
            </div>
          </ExperienceInfo>
        </div>
        <div className="mobile-container width-40">
          <div className=" mt-4">
            <Title label="Frontend Skills" />
            <div className="mt-4">
              <ShowSkillContainer
                leftText="HTML + CSS"
                rightComponent={
                  <Rating numberOfDivs={7} numberOfStrength={7} />
                }
              />
              <ShowSkillContainer
                styles="mt-3"
                leftText="React + Redux"
                rightComponent={
                  <Rating numberOfDivs={7} numberOfStrength={6} />
                }
              />
              <ShowSkillContainer
                styles="mt-3"
                leftText="Bootstrap"
                rightComponent={
                  <Rating numberOfDivs={7} numberOfStrength={7} />
                }
              />
              <ShowSkillContainer
                styles="mt-3"
                leftText="React Native"
                rightComponent={
                  <Rating numberOfDivs={7} numberOfStrength={4} />
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* ****************************************************** */}
      <div className=" d-flex justify-content-between mobile-container">
        <div className="width-50">
          <Title label="Education" />
          <ExperienceInfo
            companyName="B.Sc. Microbiology"
            year="March 2014 - July 2019"
            position=""
          ></ExperienceInfo>
        </div>

        <div className="mobile-container width-40">
          <div className="mt-4">
            <Title label="DevTools and Other Skills" />
            <div className="mt-4">
              <ShowSkillContainer
                leftText="Git Version Control"
                rightComponent={
                  <Rating numberOfDivs={7} numberOfStrength={5} />
                }
              />
              <ShowSkillContainer
                leftText="OOP"
                rightComponent={
                  <Rating numberOfDivs={7} numberOfStrength={6} />
                }
              />
              <ShowSkillContainer
                styles="mt-3 "
                leftText="3D Character Animation"
                rightComponent={
                  <Rating numberOfDivs={7} numberOfStrength={5} />
                }
              />
              <ShowSkillContainer
                styles="mt-3"
                leftText="RestFul API"
                rightComponent={
                  <Rating numberOfDivs={7} numberOfStrength={6} />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumeScreen
