import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import { Members as Member } from '@/Components/Members';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function Index({ auth, members }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        name: '',
        email: '',
        phone: '',
    });

    const [success, setSuccess] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        post(route('members.store'), {
            onSuccess: () => {
                reset();
                setSuccess(true);
                setTimeout(() => setSuccess(false), 3000);
            },
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Members" />

            <div className="mx-auto max-w-2xl p-4 sm:p-6 lg:p-8">
                {success && (
                    <div className="text-m mb-4 font-medium text-green-600">
                        Member successfully registered
                    </div>
                )}
                <form onSubmit={submit}>
                    <div className="space-y-6">
                        <div>
                            <InputLabel forInput="name" value="Name" />
                            <TextInput
                                type="text"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full duration-300 ease-in-out"
                                onChange={(e) =>
                                    setData('name', e.target.value)
                                }
                            />
                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <InputLabel forInput="email" value="Email" />
                            <TextInput
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full duration-300 ease-in-out"
                                onChange={(e) =>
                                    setData('email', e.target.value)
                                }
                            />
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <InputLabel forInput="phone" value="Phone" />
                            <TextInput
                                type="tel"
                                name="phone"
                                value={data.phone}
                                className="mt-1 block w-full duration-300 ease-in-out"
                                onChange={(e) =>
                                    setData(
                                        'phone',
                                        e.target.value.replace(/\D+/g, ''), // This will allow only numbers to be typed in by replacing any non-numeric characters with an empty string
                                    )
                                }
                                inputMode="tel"
                            />
                            <InputError
                                message={errors.phone}
                                className="mt-2"
                            />
                        </div>
                    </div>

                    <PrimaryButton
                        className="mt-4 duration-300 ease-in-out"
                        disabled={processing}
                    >
                        Save
                    </PrimaryButton>
                </form>
                <div className="mt-6 divide-y rounded-lg bg-white shadow-sm">
                    {members.map((member) => (
                        <Member key={member.id} member={member} />
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
