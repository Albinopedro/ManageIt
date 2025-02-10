import Dropdown from '@/Components/Dropdown';
import { useForm, usePage } from '@inertiajs/react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useState } from 'react';
import InputError from './InputError';
import InputLabel from './InputLabel';
import PrimaryButton from './PrimaryButton';
import TextInput from './TextInput';

dayjs.extend(relativeTime);
export function Members({ member }) {
    const { auth } = usePage().props;

    const [editing, setEditing] = useState(false);

    const { data, setData, patch, clearErrors, reset, errors, processing } =
        useForm({
            name: member.name,
            email: member.email,
            phone: member.phone,
        });

    const submit = (e) => {
        e.preventDefault();
        patch(route('members.update', member.id), {
            onSuccess: () => {
                setEditing(false);
            },
        });
    };
    return (
        <div className="flex space-x-2 p-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-15 mr-1 w-8 -scale-x-100 text-[#4A90E2]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
            </svg>
            <div className="flex-1">
                <div className="flex flex-col justify-between space-y-2 sm:flex-row sm:space-y-0">
                    <p className="mb-2 text-lg text-gray-900">
                        Boss: {member.user.name}
                    </p>
                    {member.user.id === auth.user.id && (
                        <Dropdown>
                            <Dropdown.Trigger>
                                <button>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-blue-500"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                <button
                                    className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100"
                                    onClick={() => setEditing(true)}
                                >
                                    Edit
                                </button>
                                <Dropdown.Link
                                    as="button"
                                    href={route('members.update', member.id)}
                                    method="delete"
                                >
                                    Delete
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    )}
                </div>
                <div className="flex items-end justify-between">
                    <span className="text-gray-800">Name: {member.name}</span>

                    <small className="text-sm text-gray-600">
                        Added on: {dayjs(member.created_at).fromNow()}
                    </small>
                </div>
                {editing ? (
                    <form onSubmit={submit}>
                        <div className="mt-4">
                            <InputLabel
                                htmlFor="name"
                                value="Name"
                                className="sr-only"
                            />
                            <TextInput
                                id="name"
                                type="text"
                                value={data.name}
                                onChange={(e) =>
                                    setData('name', e.target.value)
                                }
                                placeholder="Name"
                                className="block w-full"
                                isFocused={true}
                            />
                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel
                                htmlFor="email"
                                value="Email"
                                className="sr-only"
                            />
                            <TextInput
                                id="email"
                                type="text"
                                value={data.email}
                                onChange={(e) =>
                                    setData('email', e.target.value)
                                }
                                placeholder="Email"
                                className="block w-full"
                            />
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel
                                htmlFor="phone"
                                value="Phone"
                                className="sr-only"
                            />
                            <TextInput
                                id="phone"
                                type="text"
                                value={data.phone}
                                onChange={(e) =>
                                    setData('phone', e.target.value)
                                }
                                placeholder="Phone"
                                className="block w-full"
                            />
                            <InputError
                                message={errors.phone}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4 space-x-2">
                            <PrimaryButton className="" disabled={processing}>
                                Save
                            </PrimaryButton>
                            <button
                                type="button"
                                className=""
                                onClick={() => {
                                    setEditing(false);
                                    reset();
                                    clearErrors();
                                }}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className="flex flex-col items-center justify-around space-x-0 space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                        <p className="text-m text-gray-900 sm:flex-1">
                            Email: {member.email} <br></br>
                            Phone: {member.phone}
                        </p>
                        {member.created_at !== member.updated_at && (
                            <small className="text-sm text-gray-600 sm:flex-none">
                                {' '}
                                &middot; edited
                            </small>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
