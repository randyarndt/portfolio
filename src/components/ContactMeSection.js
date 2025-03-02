import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  Field,
  Heading,
  Input,
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
  const firstNameInputRef = React.useRef(null);
  const emailInputRef = React.useRef(null);
  const typeInputRef = React.useRef(null);
  const commentInputRef = React.useRef(null);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      comment: ''
    },
    onSubmit: (values) => {
      submit("Test",values); 
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required("First name is required"),    
      email: Yup.string().email('Please enter a valid e-mail address').required('E-mail is required'),    
      comment: Yup.string().required("Please provide a detailed comment")    
    }),
   });

  useEffect(() => {
    if (response != null) {
      onOpen(response.type, response.message);
      if (response.type === "success") {
        formik.resetForm();
        firstNameInputRef.current.value = "";
        emailInputRef.current.value = "";
        typeInputRef.current.textContent = "Type of enquiry";
        commentInputRef.current.value = "";
      }
    }
  }, [response]);

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
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <Field.Root invalid={formik.touched.firstName && formik.errors.firstName}>
                <Field.Label htmlFor="firstName">Name</Field.Label>
                <Input
                  id="firstName"
                  name="firstName"
                  ref={firstNameInputRef}
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  helperText={formik.errors.firstName ? formik.errors.firstName : ""}
                  {...formik.getFieldProps('firstName')}
                />
                <Field.ErrorText>First name is required</Field.ErrorText>
              </Field.Root>
              <Field.Root invalid={formik.touched.email && formik.errors.email}>
                <Field.Label htmlFor="email">Email Address</Field.Label>
                <Input
                  id="email"
                  name="email"
                  ref={emailInputRef}
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  helperText={formik.errors.email ? formik.errors.email : ""}
                  {...formik.getFieldProps('email')}
                />
                <Field.ErrorText>Enter a valid e-mail address</Field.ErrorText>
              </Field.Root>
              <Field.Root invalid={typeInputRef.current === null || typeInputRef.current.textContent === "Type of enquiry"}>
              <SelectRoot collection={frameworks} id="type" name="type" value={formik.values.type}
      onValueChange={(e) => formik.setFieldValue("type", e.value)} helperText={formik.errors.type ? formik.errors.type : ""}
      {...formik.getFieldProps('type')}>
                <SelectLabel>Type of enquiry</SelectLabel>
                <SelectTrigger>
                  <SelectValueText
                    placeholder="Type of enquiry"
                    id="equirytype"
                    ref={typeInputRef}
                    color="white"
                    {...formik.getFieldProps('type')}
                  />
                </SelectTrigger>
                <SelectContent>
                  {frameworks.items.map((enquirytype) => (
                    <SelectItem 
                      item={enquirytype}
                      key={enquirytype.value} 
                      color="black">
                      {enquirytype.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </SelectRoot>
              <Field.ErrorText>Please select a valid enquiry type</Field.ErrorText>
              </Field.Root>
              <Field.Root invalid={formik.touched.comment && formik.errors.comment}>
                <Field.Label htmlFor="comment">Your message</Field.Label>
                <Textarea
                  id="comment"
                  name="comment"
                  ref={commentInputRef}
                  onChange={formik.handleChange}
                  height={250}
                  helperText={formik.errors.comment ? formik.errors.comment : ""}
                  defaultValue={formik.values.comment}
                />
                <Field.ErrorText>Please provide a detailed comment</Field.ErrorText>
              </Field.Root>
              <Button type="submit" colorScheme="purple" width="full">
                {isLoading ? "Loading" : "Submit"}
              </Button>
              </VStack>
          </form>
        </Box>
      </VStack>
      </FullScreenSection>
  );
};

export default LandingSection;
