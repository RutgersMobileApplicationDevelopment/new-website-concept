import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { AiFillAndroid } from "react-icons/ai";
import { FaApple, FaNodeJs } from "react-icons/fa";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import { Card, MainGutters, YouTubeVideo, Section } from "../components";

const Navbar = styled.div`
  .fakeButtons {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    border: 2px solid var(--chakra-colors-gray-300);
    margin: 2px;
  }

  display: flex;
  flex-direction: row;
  border-bottom: 2px solid var(--chakra-colors-gray-300);
  padding: 10px;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Terminal = styled.div`
  border-radius: 7px;
  border: 2px solid var(--chakra-colors-gray-300);
  color: white;
  margin: calc(10px + min(4vw, 80px));

  @media screen and (max-width: 500px) {
    border: none;
    margin: 15px 0;
  }
`;

const TerminalContent = styled.div`
  position: relative;

  @media screen and (max-width: 500px) {
    padding: 0;
  }

  & > * {
    padding: 15px;
  }
`;

function Index() {
  return (
    <>
      <MainGutters
        insideStyle={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        style={{ backgroundColor: "black" }}
      >
        <Terminal>
          <Navbar>
            <div className="fakeButtons"></div>
            <div className="fakeButtons"></div>
            <div className="fakeButtons"></div>
          </Navbar>
          <TerminalContent>
            <div style={{ position: "absolute" }}>
              <Text>
                <Typist avgTypingDelay={50} cursor={{ element: "▌" }}>
                  Hey there!
                  <br />
                  <br />
                  <Typist.Delay ms={200} />
                  We&apos;re the Rutgers Mobile App Development Club! We are a
                  student-led computer science club invested in teaching the
                  Rutgers community about mobile app development. We teach
                  incoming students the fundamentals of mobile app development
                  in a program known as the Accelerator. We also motivate
                  students to take actionable steps towards their career goals
                  through talks, competitions, and networking events. RUMAD
                  serves as a hub for Rutgers students to build the apps of
                  their dreams while also building lifelong relationships.
                </Typist>
              </Text>
            </div>

            <div style={{ opacity: 0 }}>
              <Heading size="xl" fontWeight={900}>
                Hey There!
              </Heading>
              <br />
              <Text>
                We&apos;re the Rutgers Mobile App Development Club! We are a
                student-led computer science club invested in teaching the
                Rutgers community about mobile app development. We teach
                incoming students the fundamentals of mobile app development in
                a program known as the Accelerator. We also motivate students to
                take actionable steps towards their career goals through talks,
                competitions, and networking events. RUMAD serves as a hub for
                Rutgers students to build the apps of their dreams while also
                building lifelong relationships.
              </Text>
            </div>
          </TerminalContent>
        </Terminal>
      </MainGutters>

      <MainGutters insideStyle={{ padding: "80px 0" }}>
        <Heading style={{ marginBottom: 10 }}>Accelerator</Heading>
        <p style={{ marginBottom: 20 }}>
          The goal of the Accelerator is to take students from knowing nothing
          about app development to a level where they can build and ship their
          own apps. They will pick a track from iOS, Android, or Backend
          development to learn about.
        </p>
        <p style={{ marginBottom: 20 }}>
          We will also provide every mentee in the Accelerator program with
          close mentorship from an experienced mentor. They will receive career
          and academic guidance to help ensure they are successful in their
          journey at Rutgers and beyond.
        </p>

        <Heading style={{ marginBottom: 10 }}>Tracks</Heading>
        <SimpleGrid gap={3} minChildWidth="250px">
          <Box>
            <Card>
              <FaApple size={50} style={{ marginBottom: 10 }} />
              The backend track covers how to structure a REST API, securly
              store passwords, encode data as a JSON Web Token, connect your
              backend to a database, and deploy your backend to a hosting
              platform.
            </Card>
          </Box>
          <Box>
            <Card>
              <AiFillAndroid size={50} style={{ marginBottom: 10 }} />
              The backend track covers how to structure a REST API, securly
              store passwords, encode data as a JSON Web Token, connect your
              backend to a database, and deploy your backend to a hosting
              platform.
            </Card>
          </Box>
          <Box>
            <Card>
              <FaNodeJs size={50} style={{ marginBottom: 10 }} />
              The backend track covers how to structure a REST API, securly
              store passwords, encode data as a JSON Web Token, connect your
              backend to a database, and deploy your backend to a hosting
              platform.
            </Card>
          </Box>
        </SimpleGrid>
      </MainGutters>

      <Section dark>
        <Heading style={{ marginBottom: 10 }}>Incubator</Heading>
        <p>
          The RUMAD Incubator program is perfect for anyone who is looking to
          apply their iOS, Android, or Backend development skills in a
          structured manner. You will be working on a team to create a mobile
          app project. This project can be anything your team chooses. You are
          expected to contribute to the development of your project each week on
          your own time. In addition, you will have meetings with your mentor
          and other team members each week as well. These meetings will be
          approximately 1 hour long and can involve coding, delegating tasks, or
          debugging any issues which you could not fix on your own time during
          the week. The meetings will help keep you and your group on track to
          finishing the project.
        </p>
      </Section>

      <Section gameOfLife>
        <Heading style={{ marginBottom: 10 }}>How it&apos;s built</Heading>
        <p style={{ marginBottom: 20 }}>
          How It&apos;s Built is a series of talks throughout the year that
          features guest speakers from top tech companies who share their
          experiences in the industry and their current projects. RUMAD has
          featured systems engineers and software engineers from MongoDB,
          Facebook, Two Sigma, Tinder, and AppNexus.
        </p>

        <Heading style={{ marginBottom: 10 }}>Talks</Heading>
        <SimpleGrid gap={3} minChildWidth="250px">
          <Box>
            <YouTubeVideo videoId="UdQ0toerm3I" />
          </Box>

          <Box>
            <YouTubeVideo videoId="UdQ0toerm3I" />
          </Box>
        </SimpleGrid>
      </Section>
    </>
  );
}

export default Index;
