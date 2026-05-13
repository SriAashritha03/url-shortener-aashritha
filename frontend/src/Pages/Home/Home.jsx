import {
  Center,
  Container,
  Text,
} from "@mantine/core";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getIsLoggedIn } from "../../redux/slices/User";
import { IconLink } from "@tabler/icons-react";

const Home = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "linear-gradient(135deg, #d9afd9 0%, #97d9e1 100%)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "2rem 0",
      }}
    >
      <Container size="sm" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            backdropFilter: "blur(20px)",
            background: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "30px",
            padding: "2rem 1.5rem",
            boxShadow: "0 8px 40px rgba(0, 0, 0, 0.2)",
            textAlign: "center",
          }}
        >
          <Center>
            <IconLink size={48} color="#ffffff" />
          </Center>

          <Text
            size="xl"
            fw={700}
            style={{
              color: "#f1f1f1",
              marginTop: "0.5rem",
              marginBottom: "1.5rem",
              fontWeight: 400,
            }}
          >
            Shorten Your Links, Expand Your Reach
          </Text>

          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              padding: "1.5rem",
              borderRadius: "20px",
              marginTop: "1rem",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: "1rem",
                fontStyle: "italic",
                lineHeight: "1.6",
                marginBottom: "0.8rem",
              }}
            >
              "In a world of endless information, simplicity is power. Transform your long URLs into shareable moments."
            </Text>
            
            <Text
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                fontSize: "0.9rem",
                marginBottom: "1rem",
              }}
            >
              Every link tells a story. Make it count.
            </Text>

            <div
              style={{
                display: "flex",
                gap: "8px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  padding: "0.4rem 0.8rem",
                  borderRadius: "20px",
                  color: "white",
                  fontSize: "0.85rem",
                }}
              >
                ✨ Quick & Easy
              </span>
              <span
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  padding: "0.4rem 0.8rem",
                  borderRadius: "20px",
                  color: "white",
                  fontSize: "0.85rem",
                }}
              >
                📊 Track Analytics
              </span>
              <span
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  padding: "0.4rem 0.8rem",
                  borderRadius: "20px",
                  color: "white",
                  fontSize: "0.85rem",
                }}
              >
                🔗 Custom URLs
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
