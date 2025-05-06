import { useHandleApiResponse } from "@/apiServices";
import { configRoleAPI } from "@/servcies/user/configRoleApis";
import type { roleDataTypes } from "@/types/apptypes/appDataTypes";
import { useMutation } from "@tanstack/react-query";

export function useConfigRole() {
  const { handleToast } = useHandleApiResponse();

  const { isPending, mutate: configRole } = useMutation({
    mutationFn: ({
      role,
      userName,
    }: {
      userName: string;
      role: roleDataTypes;
    }) =>
      configRoleAPI({
        userName,
        role,
      }),
    onSuccess(data) {
      handleToast(data.data);
    },
  });

  return {
    isPending,
    configRole,
  };
}
