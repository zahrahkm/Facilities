import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../Button';
import { useFacilityStore } from '../../store/facilityStore';
import { CheckboxField } from './CheckboxField';
import { InputField } from './InputField';
import { BodyStrongText } from '../BodyStrongText';
import { TextAreaField } from './TextAreaField';
import { useNavigate } from 'react-router-dom';
import TimeInput from './TimeInputField';


const timeSchema = z.string().regex(
  /^([01][0-9]|2[0-3]):[0-5][0-9]$/,
  'Must be in 24h format (HH:MM)'
);
const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  address: z.string().min(1, 'Address is required'),
  description: z.string().min(1, 'Description is required'),
  imageUrl: z.string().url('Must be a valid URL'),
  openingTime: timeSchema,
  closingTime: timeSchema,
  isDefault: z.boolean(),
});

export type FormData = z.infer<typeof schema>;

type FacilityFormProps= {
  initialData?: FormData;
  onSubmit: (data: FormData) => void;
  submitLabel: string;
}

export const FacilityForm = ({
  initialData,
  onSubmit,
  submitLabel,
}: FacilityFormProps) => {
  const navigate=useNavigate();
  const { facilities } = useFacilityStore ();
  const isFirstFacility = facilities.length === 0;

  const { register, handleSubmit, formState: { errors, isSubmitting }} = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: initialData || {
      isDefault: isFirstFacility,
    },
  });



  return (
    <div className='form-card'>
        <BodyStrongText>Facility Information</BodyStrongText>
        <form onSubmit={handleSubmit(onSubmit)} >
            <InputField
                label="Facility Name *"
                registration={register('name')}
                error={errors.name}
                className='md:w-96 h-6 md:h-8 '
            />

            <InputField
                label="Address *"
                registration={register('address')}
                error={errors.address}
                className='md:w-96 h-6 md:h-8 '
            />

            <TextAreaField
                label="Description *"
                registration={register('description')}
                error={errors.description}
                className='md:w-96 h-[103px] '
            />

            <InputField
                label="Cover Image URL *"
                registration={register('imageUrl')}
                error={errors.imageUrl}
                className='md:w-96 h-6 md:h-8 '
            />

            <div className='py-2'>
                <CheckboxField
                    label="Default Facility"
                    description="Setting this facility as default will override the currently marked default facility."
                    registration={register('isDefault')}
                    disabled={isFirstFacility}
                />
           </div>


            <div className='py-2 mb-4'>
                <BodyStrongText>Working Hours</BodyStrongText>
                <div className="grid grid-cols-2 gap-[10px] md:w-[384px]">
                    <TimeInput
                      label="Opening Time *"
                      registration={register('openingTime')}
                      defaultValue={initialData?.openingTime}
                      error={errors.openingTime}
                    />
                    <TimeInput
                      label="Closing Time *"
                      registration={register('closingTime')}
                      defaultValue={initialData?.closingTime}
                      error={errors.closingTime}
                    />
                </div>
            </div>

            <div className="flex justify-end space-x-4">
                <Button type="button" variant="secondary" onClick={() => navigate('/')}>
                   Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                   {submitLabel}
                </Button>
            </div>
        </form>
        
    </div>
  );
};