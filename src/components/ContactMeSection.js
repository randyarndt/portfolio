import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  Field,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
  createListCollection
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {},
    validationSchema: Yup.object({}),
  });

  const frameworks = createListCollection({
    items: [
      { label: "Freelance project proposal", value: "hireMe" },
      { label: "Open source consultancy session", value: "openSource" },
      { label: "Other", value: "other" },
    ],
  })
  
  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form>
            <VStack spacing={4}>
              <Field.Root isInvalid={false}>
                <Field.Label htmlFor="firstName">Name</Field.Label>
                <Input
                  id="firstName"
                  name="firstName"
                />
                <Field.ErrorText></Field.ErrorText>
              </Field.Root>
              <Field.Root isInvalid={false}>
                <Field.Label htmlFor="email">Email Address</Field.Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                />
                <Field.ErrorText></Field.ErrorText>
              </Field.Root>
              <SelectRoot>
                <SelectLabel>Type of enquiry</SelectLabel>
                <SelectTrigger>
                  <SelectValueText placeholder="Type of enquiry" />
                </SelectTrigger>
                <SelectContent>
                  {frameworks.items.map((enquirytype) => (
                    <SelectItem item={enquirytype} key={enquirytype.value}>
                      {enquirytype.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </SelectRoot>
              <Field.Root isInvalid={false}>
                <Field.Label htmlFor="comment">Your message</Field.Label>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                />
                <Field.ErrorText></Field.ErrorText>
              </Field.Root>
              <Button type="submit" colorScheme="purple" width="full">
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
