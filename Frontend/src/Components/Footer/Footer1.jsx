import {
  Box,
  chakra,
  Stack,
  Text,
  VisuallyHidden,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaTwitter, FaPhoneAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer1 = () => {
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode,
    label: string,
    href: string,
  }) => {
    return (
      <chakra.button
        rounded={"full"}
        w={8}
        h={8}
        cursor={"pointer"}
        as={"a"}
        href={href}
        display={"inline-flex"}
        alignItems={"center"}
        justifyContent={"center"}
        transition={"background 0.3s ease"}
        _hover={{
          bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
        }}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  return (
    <Box>
      <Stack ml={"13%"} direction={"row"} spacing={4}>
        <SocialButton label={"Twitter"} href={"#"}>
          <FaTwitter />
        </SocialButton>
        <Text>@jcrew_help</Text>

        <SocialButton label={"Twitter"} href={"#"}>
          <FaPhoneAlt />
        </SocialButton>
        <Text>1 434 385 5775</Text>
        <SocialButton label={"Twitter"} href={"#"}>
          <FiMail />
        </SocialButton>
        <Text>Email Us</Text>
      </Stack>
    </Box>
  );
};

export default Footer1;
