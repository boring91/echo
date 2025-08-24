import { UseFormReturn } from "react-hook-form";
import {
  useVapiAssistants,
  useVapiPhoneNumbers,
} from "@/modules/plugins/hooks/use-vapi-data";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { FormSchema } from "../../types";

type VapiFormFieldsProps = {
  form: UseFormReturn<FormSchema>;
};

export const VapiFormFields = ({ form }: VapiFormFieldsProps) => {
  const { data: assistants, isLoading: assistantsLoading } =
    useVapiAssistants();
  const { data: phoneNumbers, isLoading: phoneNumbersLoading } =
    useVapiPhoneNumbers();

  const disabled = form.formState.isSubmitting;

  return (
    <>
      <FormField
        control={form.control}
        name="vapiSettings.assistantId"
        render={({ field }) => {
          return (
            <FormItem>
              <FormLabel>Voice assistant</FormLabel>
              <Select
                value={field.value}
                onValueChange={field.onChange}
                disabled={assistantsLoading || disabled}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue
                      placeholder={
                        assistantsLoading
                          ? "Loading assistants..."
                          : "Select an assistant"
                      }
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  {assistants.map(assistant => (
                    <SelectItem key={assistant.id} value={assistant.id}>
                      {assistant.name || "Unnamed assistant"} {" - "}{" "}
                      {assistant.model?.model || "Unknown model"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
                The Vapi assistant to use for voice calls
              </FormDescription>
              <FormMessage />
            </FormItem>
          );
        }}
      />

      <FormField
        control={form.control}
        name="vapiSettings.phoneNumber"
        render={({ field }) => {
          return (
            <FormItem>
              <FormLabel>Display phone number</FormLabel>
              <Select
                value={field.value}
                onValueChange={field.onChange}
                disabled={phoneNumbersLoading || disabled}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue
                      placeholder={
                        phoneNumbersLoading
                          ? "Loading phone numbers..."
                          : "Select a phone number"
                      }
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  {phoneNumbers.map(phoneNumber => (
                    <SelectItem
                      key={phoneNumber.id}
                      value={phoneNumber.number || phoneNumber.id}
                    >
                      {phoneNumber.number || "Unknown"} {" - "}{" "}
                      {phoneNumber.name || "Unknown model"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
                Phone number to display in the widget
              </FormDescription>
              <FormMessage />
            </FormItem>
          );
        }}
      />
    </>
  );
};
