
function Models() {
	var mode = {
		'operations': {
			'CreateBucket': {
				'httpMethod': 'PUT',
				'responseClass': 'CreateBucketOutput',
				'data': {
					'xmlRoot': 'CreateBucketConfiguration',
					'namespace': 'http://s3.amazonaws.com/doc/2006-03-01/',
				},
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'ACL': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-acl',
					},
					'Location': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'LocationConstraint',
					},
				},
			},
			'CreateBucketOutput': {
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
				}
			},
			'ListBuckets': {
				'httpMethod': 'GET',
				'responseClass': 'ListBucketsOutput',
			},
			'ListBucketsOutput': {
				'data': {
					'type': 'xml',
					'xmlRoot': 'ListAllMyBucketsResult',
				},
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
					'Owner': {
						'type': 'object',
						'location': 'xml',
						'sentAs': 'Owner',
						'parameters': {
							'ID': {
								'type': 'string',
								'sentAs': 'ID',
							},
							'Name': {
								'type': 'string',
								'sentAs': 'DisplayName',
							},
						},

					},
					'Buckets': {
						'type': 'object',
						'location': 'xml',
						'sentAs': 'Buckets',
						'parameters': {
							'Bucket': {
								'type': 'array',
								'sentAs': 'Bucket',
								'items': {
									'type': 'object',
									'parameters': {
										'BucketName': {
											'type': 'string',
											'sentAs': 'Name',
										},
										'CreationDate': {
											'type': 'string',
											'sentAs': 'CreationDate',
										},
									},

								},
							},
						},
					},
				},
			},
			'HeadBucket': {
				'httpMethod': 'HEAD',
				'responseClass': 'HeadBucketOutput',
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
				},
			},
			'HeadBucketOutput': {
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
				}
			},
			'DeleteBucket': {
				'httpMethod': 'DELETE',
				'responseClass': 'DeleteBucketOutput',
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
				},
			},
			'DeleteBucketOutput': {
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
				},
			},
			'DeleteBucketWithObjects': {
				'httpMethod': 'POST',
				'responseClass': 'DeleteBucketWithObjectsOutput',
				'urlPath': 'deletebucket',
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
				},
			},
			'DeleteBucketWithObjectsOutput': {
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
				},
			},
			'SetBucketQuota': {
				'httpMethod': 'PUT',
				'urlPath': 'quota',
				'responseClass': 'SetBucketQuotaOutput',
				'data': {
					'xmlRoot': 'Quota',
					'namespace': 'http://s3.amazonaws.com/doc/2006-03-01/',
				},
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'StorageQuota': {
						'required': true,
						'type': 'string',
						'location': 'xml',
						'sentAs': 'StorageQuota',
					},
				},
			},
			'SetBucketQuotaOutput': {
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
				}
			},
			'GetBucketQuota': {
				'httpMethod': 'GET',
				'urlPath': 'quota',
				'responseClass': 'GetBucketQuotaOutput',
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},

				},
			},
			'GetBucketQuotaOutput': {
				'data': {
					'type': 'xml',
					'xmlRoot': 'Quota',
				},
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
					'StorageQuota': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'StorageQuota',
					},
				},
			},
			'GetBucketStorageInfo': {
				'httpMethod': 'GET',
				'urlPath': 'storageinfo',
				'responseClass': 'GetBucketStorageInfoOutput',
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
				},
			},
			'GetBucketStorageInfoOutput': {
				'data': {
					'type': 'xml',
					'xmlRoot': 'GetBucketStorageInfoResult',
				},
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
					'Size': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'Size',
					},
					'ObjectNumber': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'ObjectNumber',
					},
				},
			},
			'SetBucketPolicy': {
				'httpMethod': 'PUT',
				'urlPath': 'policy',
				'responseClass': 'SetBucketPolicyOutput',
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'Policy': {
						'required': true,
						'type': 'string',
						'location': 'body',
					},
				},
			},
			'SetBucketPolicyOutput': {
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
				},
			},
			'GetBucketPolicy': {
				'httpMethod': 'GET',
				'urlPath': 'policy',
				'responseClass': 'GetBucketPolicyOutput',
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
				},
			},
			'GetBucketPolicyOutput': {
				'data': {
					'type': 'body',
				},
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
					'Policy': {
						'type': 'string',
						'location': 'body',
					},
				},
			},
			'DeleteBucketPolicy': {
				'httpMethod': 'DELETE',
				'urlPath': 'policy',
				'responseClass': 'DeleteBucketPolicyOutput',
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
				},
			},
			'DeleteBucketPolicyOutput': {
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
				},
			},
			'SetBucketVersioningConfiguration': {
				'httpMethod': 'PUT',
				'urlPath': 'versioning',
				'responseClass': 'SetBucketVersioningConfigurationOutput',
				'data': {
					'xmlRoot': 'VersioningConfiguration',
				},
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'VersionStatus': {
						'required': true,
						'type': 'string',
						'location': 'xml',
						'sentAs': 'Status',
					},
				},
			},
			'SetBucketVersioningConfigurationOutput': {
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
				},
			},
			'GetBucketVersioningConfiguration': {
				'httpMethod': 'GET',
				'urlPath': 'versioning',
				'responseClass': 'GetBucketVersioningConfigurationOutput',
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
				},
			},
			'GetBucketVersioningConfigurationOutput': {
				'data': {
					'type': 'xml',
					'xmlRoot': 'VersioningConfiguration',
				},
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
					'VersionStatus': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'Status',
					},
				},
			},
			'GetBucketLocation': {
				'httpMethod': 'GET',
				'urlPath': 'location',
				'responseClass': 'GetBucketLocationOutput',
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
				},
			},
			'GetBucketLocationOutput': {
				'data': {
					'type': 'xml',
					'xmlRoot': 'CreateBucketConfiguration',
				},
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
					'Location': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'LocationConstraint',
					},
				},
			},
			'SetBucketAcl': {
				'httpMethod': 'PUT',
				'urlPath': 'acl',
				'responseClass': 'SetBucketAclOutput',
				'data': {
					'xmlRoot': 'AccessControlPolicy',
					'namespace': 'http://s3.amazonaws.com/doc/2006-03-01/',
				},
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'ACL': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-acl',
					},
					'Owner': {
						'type': 'object',
						'location': 'xml',
						'sentAs': 'Owner',
						'parameters': {
							'ID': {
								'type': 'string',
								'sentAs': 'ID',
							},
							'Name': {
								'type': 'string',
								'sentAs': 'DisplayName',
							},
						},
					},
					'Grants': {
						'type': 'object',
						'location': 'xml',
						'sentAs': 'AccessControlList',
						'parameters': {
							'Grant': {
								'type': 'array',
								'sentAs': 'Grant',
								'items': {
									'type': 'object',
									'parameters': {
										'Grantee': {
											'data': {
												'xsiNamespace': 'http://www.w3.org/2001/XMLSchema-instance',
												'xsiType': 'Type',
											},
											'type': 'object',
											'sentAs': 'Grantee',
											'parameters': {
												'Type': {
													'type': 'string',
												},
												'ID': {
													'type': 'string',
													'sentAs': 'ID',
												},
												'Name': {
													'type': 'string',
													'sentAs': 'DisplayName',
												},
												'URI': {
													'type': 'string',
													'sentAs': 'URI',
												}
											},
										},
										'Permission': {
											'type': 'string',
											'sentAs': 'Permission',
										},
									},
								},
							}
						}
					}
				},
			},
			'SetBucketAclOutput': {
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
				},
			},
			'GetBucketAcl': {
				'httpMethod': 'GET',
				'urlPath': 'acl',
				'responseClass': 'GetBucketAclOutput',
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
				},
			},
			'GetBucketAclOutput': {
				'data': {
					'type': 'xml',
					'xmlRoot': 'AccessControlPolicy',
				},
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
					'Owner': {
						'type': 'object',
						'location': 'xml',
						'sentAs': 'Owner',
						'parameters': {
							'ID': {
								'type': 'string',
								'sentAs': 'ID',
							},
							'Name': {
								'type': 'string',
								'sentAs': 'DisplayName',
							},
						},
					},
					'Grants': {
						'type': 'object',
						'location': 'xml',
						'sentAs': 'AccessControlList',
						'parameters': {
							'Grant': {
								'type': 'array',
								'sentAs': 'Grant',
								'items': {
									'type': 'object',
									'parameters': {
										'Grantee': {
											'type': 'object',
											'sentAs': 'Grantee',
											'parameters': {
												'ID': {
													'type': 'string',
													'sentAs': 'ID',
												},
												'Name': {
													'type': 'string',
													'sentAs': 'DisplayName',
												},
												'URI': {
													'type': 'string',
													'sentAs': 'URI',
												},
											},
										},
										'Permission': {
											'type': 'string',
											'sentAs': 'Permission',
										},
									}
								},
							},
						}
					}
				},
			},
			'ListVersions': {
				'httpMethod': 'GET',
				'urlPath': 'versions',
				'responseClass': 'ListVersionsOutput',
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'Prefix': {
						'type': 'string',
						'location': 'urlPath',
						'sentAs': 'prefix',
					},
					'KeyMarker': {
						'type': 'string',
						'location': 'urlPath',
						'sentAs': 'key-marker',
					},
					'MaxKeys': {
						'type': 'number',
						'location': 'urlPath',
						'sentAs': 'max-keys',
					},
					'Delimiter': {
						'type': 'string',
						'location': 'urlPath',
						'sentAs': 'delimiter',
					},
					'VersionIdMarker': {
						'type': 'string',
						'location': 'urlPath',
						'sentAs': 'version-id-marker',
					},
				},
			},
			'ListVersionsOutput': {
				'data': {
					'type': 'xml',
					'xmlRoot': 'ListVersionsResult',
				},
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
					'Bucket': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'Name',
					},
					'Prefix': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'Prefix',
					},
					'KeyMarker': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'KeyMarker',
					},
					'VersionIdMarker': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'VersionIdMarker',
					},
					'NextKeyMarker': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'NextKeyMarker',
					},
					'NextVersionIdMarker': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'NextVersionIdMarker',
					},
					'MaxKeys': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'MaxKeys',
					},
					'IsTruncated': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'IsTruncated',
					},
					'Versions': {
						'type': 'array',
						'location': 'xml',
						'sentAs': 'Version',
						'items': {
							'type': 'object',
							'parameters': {
								'Key': {
									'type': 'string',
									'sentAs': 'Key',
								},
								'VersionId': {
									'type': 'string',
									'sentAs': 'VersionId',
								},
								'IsLatest': {
									'type': 'string',
									'sentAs': 'IsLatest',
								},
								'LastModified': {
									'type': 'string',
									'sentAs': 'LastModified',
								},
								'ETag': {
									'type': 'string',
									'sentAs': 'ETag',
								},
								'Size': {
									'type': 'string',
									'sentAs': 'Size',
								},
								'Owner': {
									'type': 'object',
									'sentAs': 'Owner',
									'parameters': {
										'ID': {
											'type': 'string',
											'sentAs': 'ID',
										},
										'Name': {
											'type': 'string',
											'sentAs': 'DisplayName',
										},
									}

								},
								'StorageClass': {
									'type': 'string',
									'sentAs': 'StorageClass',
								}
							}
						},
					},
					'DeleteMarkers': {
						'type': 'array',
						'location': 'xml',
						'sentAs': 'DeleteMarker',
						'items': {
							'type': 'object',
							'parameters': {
								'Key': {
									'type': 'string',
									'sentAs': 'Key',
								},
								'VersionId': {
									'type': 'string',
									'sentAs': 'VersionId',
								},
								'IsLatest': {
									'type': 'string',
									'sentAs': 'IsLatest',
								},
								'LastModified': {
									'type': 'string',
									'sentAs': 'LastModified',
								},
								'Owner': {
									'type': 'object',
									'sentAs': 'Owner',
									'parameters': {
										'ID': {
											'type': 'string',
											'sentAs': 'ID',
										},
										'Name': {
											'type': 'string',
											'sentAs': 'DisplayName',
										},
									}

								},
							}
						},
					},
					'CommonPrefixes': {
						'type': 'array',
						'location': 'xml',
						'sentAs': 'CommonPrefixes',
						'items': {
							'type': 'object',
							'parameters': {
								'Prefix': {
									'type': 'string',
									'sentAs': 'Prefix',
								},
							},
						},
					},
				},
			},
			'ListObjects': {
				'httpMethod': 'GET',
				'responseClass': 'ListObjectsOutput',
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'Prefix': {
						'type': 'string',
						'location': 'urlPath',
						'sentAs': 'prefix',
					},
					'Marker': {
						'type': 'string',
						'location': 'urlPath',
						'sentAs': 'marker',
					},
					'MaxKeys': {
						'type': 'number',
						'location': 'urlPath',
						'sentAs': 'max-keys',
					},
					'Delimiter': {
						'type': 'string',
						'location': 'urlPath',
						'sentAs': 'delimiter',
					},
				},
			},
			'ListObjectsOutput': {
				'data': {
					'type': 'xml',
					'xmlRoot': 'ListBucketResult',
				},
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
					'Backet': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'Name',
					},
					'Delimiter': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'Delimiter',
					},
					'IsTruncated': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'IsTruncated',
					},
					'Marker': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'Marker',
					},
					'NextMarker': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'NextMarker',
					},
					'MaxKeys': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'MaxKeys',
					},
					'Contents': {
						'type': 'array',
						'location': 'xml',
						'sentAs': 'Contents',
						'items': {
							'type': 'object',
							'parameters': {
								'Key': {
									'type': 'string',
									'sentAs': 'Key',
								},
								'LastModified': {
									'type': 'string',
									'sentAs': 'LastModified',
								},
								'ETag': {
									'type': 'string',
									'sentAs': 'ETag',
								},
								'Size': {
									'type': 'string',
									'sentAs': 'Size',
								},
								'StorageClass': {
									'type': 'string',
									'sentAs': 'StorageClass',
								},
								'Owner': {
									'type': 'object',
									'sentAs': 'Owner',
									'parameters': {
										'ID': {
											'type': 'string',
											'sentAs': 'ID',
										},
										'Name': {
											'type': 'string',
											'sentAs': 'DisplayName',
										},
									},
								},
							},
						},

					},
					'CommonPrefixes': {
						'type': 'array',
						'location': 'xml',
						'sentAs': 'CommonPrefixes',
						'items': {
							'type': 'object',
							'parameters': {
								'Prefix': {
									'type': 'string',
									'sentAs': 'Prefix',
								},
							},
						},
					},
				},
			},
			'SetBucketLifecycleConfiguration': {
				'httpMethod': 'PUT',
				'urlPath': 'lifecycle',
				'responseClass': 'SetBucketLifecycleConfigurationOutput',
				'data': {
					'xmlRoot': 'LifecycleConfiguration',
					'namespace': 'http://s3.amazonaws.com/doc/2006-03-01/',
				},
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'Rules': {
						'required': true,
						'type': 'array',
						'location': 'xml',
						'sentAs': 'Rule',
						'items': {
							'type': 'object',
							'parameters': {
								'ID': {
									'type': 'string',
									'sentAs': 'ID',
								},
								'Prefix': {
									'type': 'string',
									'sentAs': 'Prefix',
								},
								'Status': {
									'type': 'string',
									'sentAs': 'Status',
								},
								'Expiration': {
									'type': 'object',
									'sentAs': 'Expiration',
									'parameters': {
										'Date': {
											'type': 'string',
											'sentAs': 'Date',
										},
										'Days': {
											'type': 'number',
											'sentAs': 'Days',
										},
									},
								},
							},
						},
					},
				},
			},
			'SetBucketLifecycleConfigurationOutput': {
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
				}
			},
			'GetBucketLifecycleConfiguration': {
				'httpMethod': 'GET',
				'urlPath': 'lifecycle',
				'responseClass': 'GetBucketLifecycleConfigurationOutput',
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
				},
			},
			'GetBucketLifecycleConfigurationOutput': {
				'data': {
					'type': 'xml',
					'xmlRoot': 'LifecycleConfiguration',
				},
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
					'Rules': {
						'type': 'array',
						'location': 'xml',
						'sentAs': 'Rule',
						'items': {
							'type': 'object',
							'parameters': {
								'ID': {
									'type': 'string',
									'sentAs': 'ID',
								},
								'Prefix': {
									'type': 'string',
									'sentAs': 'Prefix',
								},
								'Status': {
									'type': 'string',
									'sentAs': 'Status',
								},
								'Expiration': {
									'type': 'object',
									'sentAs': 'Expiration',
									'parameters': {
										'Date': {
											'type': 'string',
											'sentAs': 'Date',
										},
										'Days': {
											'type': 'number',
											'sentAs': 'Days',
										},
									},
								},
							},
						},
					},
				},
			},
			'DeleteBucketLifecycleConfiguration': {
				'httpMethod': 'DELETE',
				'urlPath': 'lifecycle',
				'responseClass': 'DeleteBucketLifecycleConfigurationOutput',
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
				},
			},
			'DeleteBucketLifecycleConfigurationOutput': {
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
				},
			},
			'SetBucketLoggingConfiguration': {
				'httpMethod': 'PUT',
				'urlPath': 'logging',
				'responseClass': 'SetBucketLoggingConfigurationOutput',
				'data': {
					'xmlRoot': 'BucketLoggingStatus',
					'namespace': 'http://s3.amazonaws.com/doc/2006-03-01/',
				},
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'LoggingEnabled': {
						'type': 'object',
						'location': 'xml',
						'sentAs': 'LoggingEnabled',
						'parameters': {
							'TargetBucket': {
								'type': 'string',
								'sentAs': 'TargetBucket',
							},
							'TargetPrefix': {
								'type': 'string',
								'sentAs': 'TargetPrefix',
							},
							'TargetGrants': {
								'type': 'object',
								'sentAs': 'TargetGrants',
								'parameters': {
									'Grant': {
										'type': 'array',
										'sentAs': 'Grant',
										'items': {
											'type': 'object',
											'parameters': {
												'Grantee': {
													'data': {
														'xsiNamespace': 'http://www.w3.org/2001/XMLSchema-instance',
														'xsiType': 'Type',
													},
													'type': 'object',
													'sentAs': 'Grantee',
													'parameters': {
														'Type': {
															'type': 'string',
														},
														'ID': {
															'type': 'string',
															'sentAs': 'ID',
														},
														'Name': {
															'type': 'string',
															'sentAs': 'DisplayName',
														},
														'URI': {
															'type': 'string',
															'sentAs': 'URI',
														}
													},
												},
												'Permission': {
													'type': 'string',
													'sentAs': 'Permission',
												},
											},
										},
									}
								}
							},
						},
					},
				},
			},
			'SetBucketLoggingConfigurationOutput': {
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
				}
			},
			'GetBucketLoggingConfiguration': {
				'httpMethod': 'GET',
				'urlPath': 'logging',
				'responseClass': 'GetBucketLoggingConfigurationOutput',
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
				},
			},
			'GetBucketLoggingConfigurationOutput': {
				'data': {
					'type': 'xml',
					'xmlRoot': 'BucketLoggingStatus',
				},
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
					'LoggingEnabled': {
						'type': 'object',
						'location': 'xml',
						'sentAs': 'LoggingEnabled',
						'parameters': {
							'TargetBucket': {
								'type': 'string',
								'sentAs': 'TargetBucket',
							},
							'TargetPrefix': {
								'type': 'string',
								'sentAs': 'TargetPrefix',
							},
							'TargetGrants': {
								'type': 'object',
								'sentAs': 'TargetGrants',
								'parameters': {
									'Grant': {
										'type': 'array',
										'sentAs': 'Grant',
										'items': {
											'type': 'object',
											'parameters': {
												'Grantee': {
													'data': {
														'xsiNamespace': 'http://www.w3.org/2001/XMLSchema-instance',
														'xsiType': 'Type',
													},
													'type': 'object',
													'sentAs': 'Grantee',
													'parameters': {
														'ID': {
															'type': 'string',
															'sentAs': 'ID',
														},
														'Name': {
															'type': 'string',
															'sentAs': 'DisplayName',
														},
														'URI': {
															'type': 'string',
															'sentAs': 'URI',
														}
													},
												},
												'Permission': {
													'type': 'string',
													'sentAs': 'Permission',
												},
											},
										},
									}
								}
							},
						},
					},
				},
			},
			'SetBucketWebsiteConfiguration': {
				'httpMethod': 'PUT',
				'urlPath': 'website',
				'responseClass': 'SetBucketWebsiteConfigurationOutput',
				'data': {
					'xmlRoot': 'WebsiteConfiguration',
					'namespace': 'http://s3.amazonaws.com/doc/2006-03-01/',
				},
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'RedirectAllRequestsTo': {
						'type': 'object',
						'location': 'xml',
						'sentAs': 'RedirectAllRequestsTo',
						'parameters': {
							'HostName': {
								'type': 'string',
								'sentAs': 'HostName',
							},
							'Protocol': {
								'type': 'string',
								'sentAs': 'Protocol',
							},
						}
					},
					'IndexDocument': {
						'type': 'object',
						'location': 'xml',
						'sentAs': 'IndexDocument',
						'parameters': {
							'Suffix': {
								'type': 'string',
								'sentAs': 'Suffix',
							},
						}
					},
					'ErrorDocument': {
						'type': 'object',
						'location': 'xml',
						'sentAs': 'ErrorDocument',
						'parameters': {
							'Key': {
								'type': 'string',
								'sentAs': 'Key',
							},
						}
					},
					'RoutingRules': {
						'type': 'object',
						'location': 'xml',
						'sentAs': 'RoutingRules',
						'parameters': {
							'RoutingRule': {
								'type': 'array',
								'sentAs': 'RoutingRule',
								'items': {
									'type': 'object',
									'parameters': {
										'Condition': {
											'type': 'object',
											'sentAs': 'Condition',
											'parameters': {
												'HttpErrorCodeReturnedEquals': {
													'type': 'string',
													'sentAs': 'HttpErrorCodeReturnedEquals',
												},
												'KeyPrefixEquals': {
													'type': 'string',
													'sentAs': 'KeyPrefixEquals',
												},
											},
										},
										'Redirect': {
											'type': 'object',
											'sentAs': 'Redirect',
											'parameters': {
												'HostName': {
													'type': 'string',
													'sentAs': 'HostName',
												},
												'HttpRedirectCode': {
													'type': 'string',
													'sentAs': 'HttpRedirectCode',
												},
												'Protocol': {
													'type': 'string',
													'sentAs': 'Protocol',
												},
												'ReplaceKeyPrefixWith': {
													'type': 'string',
													'sentAs': 'ReplaceKeyPrefixWith',
												},
												'ReplaceKeyWith': {
													'type': 'string',
													'sentAs': 'ReplaceKeyWith',
												}
											}
										},
									},
								},
							}
						},
					},
				},
			},
			'SetBucketWebsiteConfigurationOutput': {
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
				}
			},
			'GetBucketWebsiteConfiguration': {
				'httpMethod': 'GET',
				'urlPath': 'website',
				'responseClass': 'GetBucketWebsiteConfigurationOutput',
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
				},
			},
			'GetBucketWebsiteConfigurationOutput': {
				'data': {
					'type': 'xml',
					'xmlRoot': 'WebsiteConfiguration',
				},
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
					'RedirectAllRequestsTo': {
						'type': 'object',
						'location': 'xml',
						'sentAs': 'RedirectAllRequestsTo',
						'parameters': {
							'HostName': {
								'type': 'string',
								'sentAs': 'HostName',
							},
							'Protocol': {
								'type': 'string',
								'sentAs': 'Protocol',
							},
						}
					},
					'IndexDocument': {
						'type': 'object',
						'location': 'xml',
						'sentAs': 'IndexDocument',
						'parameters': {
							'Suffix': {
								'type': 'string',
								'sentAs': 'Suffix',
							},
						}
					},
					'ErrorDocument': {
						'type': 'object',
						'location': 'xml',
						'sentAs': 'ErrorDocument',
						'parameters': {
							'Key': {
								'type': 'string',
								'sentAs': 'Key',
							},
						}
					},
					'RoutingRules': {
						'type': 'object',
						'location': 'xml',
						'sentAs': 'RoutingRules',
						'parameters': {
							'RoutingRule': {
								'type': 'array',
								'sentAs': 'RoutingRule',
								'items': {
									'type': 'object',
									'parameters': {
										'Condition': {
											'type': 'object',
											'sentAs': 'Condition',
											'parameters': {
												'HttpErrorCodeReturnedEquals': {
													'type': 'string',
													'sentAs': 'HttpErrorCodeReturnedEquals',
												},
												'KeyPrefixEquals': {
													'type': 'string',
													'sentAs': 'KeyPrefixEquals',
												},
											},
										},
										'Redirect': {
											'type': 'object',
											'sentAs': 'Redirect',
											'parameters': {
												'HostName': {
													'type': 'string',
													'sentAs': 'HostName',
												},
												'HttpRedirectCode': {
													'type': 'string',
													'sentAs': 'HttpRedirectCode',
												},
												'Protocol': {
													'type': 'string',
													'sentAs': 'Protocol',
												},
												'ReplaceKeyPrefixWith': {
													'type': 'string',
													'sentAs': 'ReplaceKeyPrefixWith',
												},
												'ReplaceKeyWith': {
													'type': 'string',
													'sentAs': 'ReplaceKeyWith',
												}
											}
										},
									},
								},
							}
						},
					},
				},
			},
			'DeleteBucketWebsiteConfiguration': {
				'httpMethod': 'DELETE',
				'urlPath': 'website',
				'responseClass': 'DeleteBucketWebsiteConfigurationOutput',
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
				},
			},
			'DeleteBucketWebsiteConfigurationOutput': {
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
				}
			},
			'PutObject': {
				'httpMethod': 'PUT',
				'responseClass': 'PutObjectOutput',
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'Key': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'ContentMD5': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'Content-MD5',
					},
					'ACL': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-acl',
					},
					'Metadata': {
						'type': 'object',
						'location': 'header',
						'sentAs': 'x-amz-meta-',
					},
					'WebsiteRedirectLocation': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-website-redirect-location',
					},
					'Body': {
						'type': 'string',
						'location': 'body',
					},
					'SourceFile': {
						'type': 'string',
					}
				},
			},
			'PutObjectOutput': {
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
					'ETag': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'etag',
					},
					'VersionId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-version-id',
					},
				},
			},
			'GetObject': {
				'httpMethod': 'GET',
				'responseClass': 'GetObjectOutput',
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'Key': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'ResponseCacheControl': {
						'type': 'string',
						'location': 'urlPath',
						'sentAs': 'response-cache-control',
					},
					'ResponseContentDisposition': {
						'type': 'string',
						'location': 'urlPath',
						'sentAs': 'response-content-disposition',
					},
					'ResponseContentEncoding': {
						'type': 'string',
						'location': 'urlPath',
						'sentAs': 'response-content-encoding',
					},
					'ResponseContentLanguage': {
						'type': 'string',
						'location': 'urlPath',
						'sentAs': 'response-content-language',
					},
					'ResponseContentType': {
						'type': 'string',
						'location': 'urlPath',
						'sentAs': 'response-content-type',
					},
					'ResponseExpires': {
						'type': 'string',
						'location': 'urlPath',
						'sentAs': 'response-expires',
					},
					'VersionId': {
						'type': 'string',
						'location': 'urlPath',
						'sentAs': 'versionId',
					},
					'IfMatch': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'If-Match',
					},
					'IfModifiedSince': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'If-Modified-Since',
					},
					'IfNoneMatch': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'If-None-Match',
					},
					'IfUnmodifiedSince': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'If-Unmodified-Since',
					},
					'Range': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'Range',
					},
					'SaveAsFile': {
						'required': true,
						'type': 'string',
					},
				}
			},
			'GetObjectOutput': {
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
					'ETag': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'etag',
					},
					'VersionId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-version-id',
					},
					'ContentLength': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'content-length',
					},
					'DeleteMarker': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-delete-marker',
					},
					'LastModified': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'last-modified',
					},
					'WebsiteRedirectLocation': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-website-redirect-location',
					},
				},
			},
			'CopyObject': {
				'httpMethod': 'PUT',
				'responseClass': 'CopyObjectOutput',
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'Key': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'ACL': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-acl',
					},
					'CopySource': {
						'required': true,
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-copy-source',
					},
					'CopySourceIfMatch': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-copy-source-if-match',
					},
					'CopySourceIfModifiedSince': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-copy-source-if-modified-since',
					},
					'CopySourceIfNoneMatch': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-copy-source-if-none-match',
					},
					'CopySourceIfUnmodifiedSince': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-copy-source-if-unmodified-since',
					},
					'Metadata': {
						'type': 'object',
						'location': 'header',
						'sentAs': 'x-amz-meta-',
					},
					'MetadataDirective': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-metadata-directive',
					},
					'WebsiteRedirectLocation': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-website-redirect-location',
					},
				},
			},
			'CopyObjectOutput': {
				'data': {
					'type': 'xml',
					'xmlRoot': 'CopyObjectResult',
				},
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
					'VersionId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-version-id',
					},
					'CopySourceVersionId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-copy-source-version-id',
					},
					'ETag': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'ETag',
					},
					'LastModified': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'LastModified',
					},
				},
			},
			'GetObjectMetadata': {
				'httpMethod': 'HEAD',
				'responseClass': 'GetObjectMetadataOutput',
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'Key': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'VersionId': {
						'type': 'string',
						'location': 'urlPath',
						'sentAs': 'versionId',
					},
				},
			},
			'GetObjectMetadataOutput': {
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
					'Expiration': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-expiration',
					},
					'LastModified': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'last-modified',
					},
					'ContentLength': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'content-length',
					},
					'ETag': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'etag',
					},
					'VersionId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-version-id',
					},
					'WebsiteRedirectLocation': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-website-redirect-location',
					},
				},
			},
			'SetObjectAcl': {
				'httpMethod': 'PUT',
				'urlPath': 'acl',
				'responseClass': 'SetObjectAclOutput',
				'data': {
					'xmlRoot': 'AccessControlPolicy',
					'namespace': 'http://s3.amazonaws.com/doc/2006-03-01/',
				},
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'Key': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'VersionId': {
						'type': 'string',
						'location': 'urlPath',
						'sentAs': 'versionId',
					},
					'ACL': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-acl',
					},
					'Owner': {
						'type': 'object',
						'location': 'xml',
						'sentAs': 'Owner',
						'parameters': {
							'ID': {
								'type': 'string',
								'sentAs': 'ID',
							},
							'Name': {
								'type': 'string',
								'sentAs': 'DisplayName',
							},
						},
					},
					'Grants': {
						'type': 'object',
						'location': 'xml',
						'sentAs': 'AccessControlList',
						'parameters': {
							'Grant': {
								'type': 'array',
								'sentAs': 'Grant',
								'items': {
									'type': 'object',
									'parameters': {
										'Grantee': {
											'data': {
												'xsiNamespace': 'http://www.w3.org/2001/XMLSchema-instance',
												'xsiType': 'Type',
											},
											'type': 'object',
											'sentAs': 'Grantee',
											'parameters': {
												'Type': {
													'type': 'string',
												},
												'ID': {
													'type': 'string',
													'sentAs': 'ID',
												},
												'Name': {
													'type': 'string',
													'sentAs': 'DisplayName',
												},
												'URI': {
													'type': 'string',
													'sentAs': 'URI',
												}
											},
										},
										'Permission': {
											'type': 'string',
											'sentAs': 'Permission',
										},
									},
								},
							}
						}
					}
				},
			},
			'SetObjectAclOutput': {
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
					'VersionId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-version-id',
					},
				},
			},
			'GetObjectAcl': {
				'httpMethod': 'GET',
				'urlPath': 'acl',
				'responseClass': 'GetObjectAclOutput',
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'Key': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'VersionId': {
						'type': 'string',
						'location': 'urlPath',
						'sentAs': 'versionId',
					},
				},
			},
			'GetObjectAclOutput': {
				'data': {
					'type': 'xml',
					'xmlRoot': 'AccessControlPolicy',
				},
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
					'VersionId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-version-id',
					},
					'Owner': {
						'type': 'object',
						'location': 'xml',
						'sentAs': 'Owner',
						'parameters': {
							'ID': {
								'type': 'string',
								'sentAs': 'ID',
							},
							'Name': {
								'type': 'string',
								'sentAs': 'DisplayName',
							},
						},
					},
					'Grants': {
						'type': 'object',
						'location': 'xml',
						'sentAs': 'AccessControlList',
						'parameters': {
							'Grant': {
								'type': 'array',
								'sentAs': 'Grant',
								'items': {
									'type': 'object',
									'parameters': {
										'Grantee': {
											'type': 'object',
											'sentAs': 'Grantee',
											'parameters': {
												'ID': {
													'type': 'string',
													'sentAs': 'ID',
												},
												'Name': {
													'type': 'string',
													'sentAs': 'DisplayName',
												},
												'URI': {
													'type': 'string',
													'sentAs': 'URI',
												},
											},
										},
										'Permission': {
											'type': 'string',
											'sentAs': 'Permission',
										},
									}
								},
							},
						}
					}
				},
			},
			'DeleteObject': {
				'httpMethod': 'DELETE',
				'responseClass': 'DeleteObjectOutput',
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'Key': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'VersionId': {
						'type': 'string',
						'location': 'urlPath',
						'sentAs': 'versionId',
					},
				},
			},
			'DeleteObjectOutput': {
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
					'VersionId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-version-id',
					},
					'DeleteMarker': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-delete-marker',
					},
				},
			},
			'DeleteObjects': {
				'httpMethod': 'POST',
				'urlPath': 'delete',
				'responseClass': 'DeleteObjectsOutput',
				'data': {
					'xmlRoot': 'Delete',
					'namespace': 'http://s3.amazonaws.com/doc/2006-03-01/',
				},
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'Quiet': {
						'type': 'boolean',
						'location': 'xml',
						'sentAs': 'Quiet',
					},
					'Objects': {
						'required': true,
						'type': 'array',
						'location': 'xml',
						'sentAs': 'Object',
						'items': {
							'type': 'object',
							'parameters': {
								'Key': {
									'type': 'string',
									'sentAs': 'Key',
								},
								'VersionId': {
									'type': 'string',
									'sentAs': 'VersionId',
								},
							},
						},
					},
				},
			},
			'DeleteObjectsOutput': {
				'data': {
					'type': 'xml',
					'xmlRoot': 'DeleteResult',
				},
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
					'Deleteds': {
						'type': 'array',
						'location': 'xml',
						'sentAs': 'Deleted',
						'items': {
							'type': 'object',
							'parameters': {
								'Key': {
									'type': 'string',
									'sentAs': 'Key',
								},
								'VersionId': {
									'type': 'string',
									'sentAs': 'VersionId',
								},
								'DeleteMarker': {
									'type': 'string',
									'sentAs': 'DeleteMarker',
								},
								'DeleteMarkerVersionId': {
									'type': 'string',
									'sentAs': 'DeleteMarkerVersionId',
								},
							}
						},
					},
					'Errors': {
						'type': 'array',
						'location': 'xml',
						'sentAs': 'Error',
						'items': {
							'type': 'object',
							'parameters': {
								'Key': {
									'type': 'string',
									'sentAs': 'Key',
								},
								'VersionId': {
									'type': 'string',
									'sentAs': 'VersionId',
								},
								'Code': {
									'type': 'string',
									'sentAs': 'Code',
								},
								'Message': {
									'type': 'string',
									'sentAs': 'Message',
								},
							}
						},
					},
				},
			},
			'InitiateMultipartUpload': {
				'httpMethod': 'POST',
				'urlPath': 'uploads',
				'responseClass': 'InitiateMultipartUploadOutput',
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'Key': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'ACL': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-acl',
					},
					'Metadata': {
						'type': 'object',
						'location': 'header',
						'sentAs': 'x-amz-meta-',
					},
					'WebsiteRedirectLocation': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-website-redirect-location',
					},
				},
			},
			'InitiateMultipartUploadOutput': {
				'data': {
					'type': 'xml',
					'xmlRoot': 'InitiateMultipartUploadResult',
				},
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
					'Bucket': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'Bucket',
					},
					'Key': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'Key',
					},
					'UploadId': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'UploadId',
					},
				},
			},
			'ListMultipartUploads': {
				'httpMethod': 'GET',
				'urlPath': 'uploads',
				'responseClass': 'ListMultipartUploadsOutput',
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'Delimiter': {
						'type': 'string',
						'location': 'urlPath',
						'sentAs': 'delimiter',
					},
					'KeyMarker': {
						'type': 'string',
						'location': 'urlPath',
						'sentAs': 'key-marker',
					},
					'MaxUploads': {
						'type': 'number',
						'location': 'urlPath',
						'sentAs': 'max-uploads',
					},
					'Prefix': {
						'type': 'string',
						'location': 'urlPath',
						'sentAs': 'prefix',
					},
					'UploadIdMarker': {
						'type': 'string',
						'location': 'urlPath',
						'sentAs': 'upload-id-marker',
					},
				},
			},
			'ListMultipartUploadsOutput': {
				'data': {
					'type': 'xml',
					'xmlRoot': 'ListMultipartUploadsResult',
				},
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
					'Bucket': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'Bucket',
					},
					'KeyMarker': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'KeyMarker',
					},
					'UploadIdMarker': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'UploadIdMarker',
					},
					'NextKeyMarker': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'NextKeyMarker',
					},
					'Prefix': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'Prefix',
					},
					'Delimiter': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'Delimiter',
					},
					'NextUploadIdMarker': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'NextUploadIdMarker',
					},
					'MaxUploads': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'MaxUploads',
					},
					'IsTruncated': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'IsTruncated',
					},
					'Uploads': {
						'type': 'array',
						'location': 'xml',
						'sentAs': 'Upload',
						'items': {
							'type': 'object',
							'parameters': {
								'UploadId': {
									'type': 'string',
									'sentAs': 'UploadId',
								},
								'Key': {
									'type': 'string',
									'sentAs': 'Key',
								},
								'Initiated': {
									'type': 'string',
									'sentAs': 'Initiated',
								},
								'StorageClass': {
									'type': 'string',
									'sentAs': 'StorageClass',
								},
								'Owner': {
									'type': 'object',
									'sentAs': 'Owner',
									'parameters': {
										'ID': {
											'type': 'string',
											'sentAs': 'ID',
										},
										'Name': {
											'type': 'string',
											'sentAs': 'DisplayName',
										},
									},
								},
								'Initiator': {
									'type': 'object',
									'sentAs': 'Initiator',
									'parameters': {
										'ID': {
											'type': 'string',
											'sentAs': 'ID',
										},
										'Name': {
											'type': 'string',
											'sentAs': 'DisplayName',
										},
									},
								},
							},
						},
					},
					'CommonPrefixes': {
						'type': 'array',
						'location': 'xml',
						'sentAs': 'CommonPrefixes',
						'items': {
							'type': 'object',
							'parameters': {
								'Prefix': {
									'type': 'string',
									'sentAs': 'Prefix',
								},
							},
						},
					},
				},
			},
			'UploadPart': {
				'httpMethod': 'PUT',
				'responseClass': 'UploadPartOutput',
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'Key': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'PartNumber': {
						'required': true,
						'type': 'number',
						'location': 'urlPath',
						'sentAs': 'partNumber',
					},
					'UploadId': {
						'required': true,
						'type': 'string',
						'location': 'urlPath',
						'sentAs': 'uploadId',
					},
					'Body': {
						'type': 'string',
						'location': 'body',
					},
					'SourceFile': {
						'type': 'string',
					},
				},
			},
			'UploadPartOutput': {
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
					'ETag': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'etag',
					},
				},
			},
			'ListParts': {
				'httpMethod': 'GET',
				'responseClass': 'ListPartsOutput',
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'Key': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'UploadId': {
						'required': true,
						'type': 'string',
						'location': 'urlPath',
						'sentAs': 'uploadId',
					},
					'MaxParts': {
						'type': 'number',
						'location': 'urlPath',
						'sentAs': 'max-parts',
					},
					'PartNumberMarker': {
						'type': 'number',
						'location': 'urlPath',
						'sentAs': 'part-number-marker',
					},
				},
			},
			'ListPartsOutput': {
				'data': {
					'type': 'xml',
					'xmlRoot': 'ListPartsResult',
				},
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
					'Bucket': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'Bucket',
					},
					'Key': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'Key',
					},
					'UploadId': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'UploadId',
					},
					'PartNumberMarker': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'PartNumberMarker',
					},
					'NextPartNumberMarker': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'NextPartNumberMarker',
					},
					'MaxParts': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'MaxParts',
					},
					'IsTruncated': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'IsTruncated',
					},
					'StorageClass': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'StorageClass',
					},
					'Initiator': {
						'type': 'object',
						'location': 'xml',
						'sentAs': 'Initiator',
						'parameters': {
							'ID': {
								'type': 'string',
								'sentAs': 'ID',
							},
							'Name': {
								'type': 'string',
								'sentAs': 'DisplayName',
							},
						},
					},
					'Owner': {
						'type': 'object',
						'location': 'xml',
						'sentAs': 'Owner',
						'parameters': {
							'ID': {
								'type': 'string',
								'sentAs': 'ID',
							},
							'Name': {
								'type': 'string',
								'sentAs': 'DisplayName',
							},
						},
					},
					'Parts': {
						'type': 'array',
						'location': 'xml',
						'sentAs': 'Part',
						'items': {
							'type': 'object',
							'parameters': {
								'PartNumber': {
									'type': 'string',
									'sentAs': 'PartNumber',
								},
								'LastModified': {
									'type': 'string',
									'sentAs': 'LastModified',
								},
								'ETag': {
									'type': 'string',
									'sentAs': 'ETag',
								},
								'Size': {
									'type': 'string',
									'sentAs': 'Size',
								},
							},
						},
					}
				},
			},
			'CopyPart': {
				'httpMethod': 'PUT',
				'responseClass': 'CopyPartOutput',
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'Key': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'PartNumber': {
						'required': true,
						'type': 'string',
						'location': 'urlPath',
						'sentAs': 'partNumber',
					},
					'UploadId': {
						'required': true,
						'type': 'string',
						'location': 'urlPath',
						'sentAs': 'uploadId',
					},
					'CopySource': {
						'required': true,
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-copy-source',
					},
					'CopySourceRange': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-copy-source-range',
					},
				},
			},
			'CopyPartOutput': {
				'data': {
					'type': 'xml',
					'xmlRoot': 'CopyPartResult',
				},
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
					'LastModified': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'LastModified',
					},
					'ETag': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'ETag',
					},
				},
			},
			'AbortMultipartUpload': {
				'httpMethod': 'DELETE',
				'responseClass': 'AbortMultipartUploadOutput',
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'Key': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'UploadId': {
						'required': true,
						'type': 'string',
						'location': 'urlPath',
						'sentAs': 'uploadId',
					},
				},
			},
			'AbortMultipartUploadOutput': {
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
				},
			},
			'CompleteMultipartUpload': {
				'httpMethod': 'POST',
				'responseClass': 'CompleteMultipartUploadOutput',
				'data': {
					'xmlRoot': 'CompleteMultipartUpload',
					'namespace': 'http://s3.amazonaws.com/doc/2006-03-01/',
				},
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'Key': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'UploadId': {
						'required': true,
						'type': 'string',
						'location': 'urlPath',
						'sentAs': 'uploadId',
					},
					'Parts': {
						'required': true,
						'type': 'array',
						'location': 'xml',
						'sentAs': 'Part',
						'items': {
							'type': 'object',
							'parameters': {
								'PartNumber': {
									'type': 'string',
									'sentAs': 'PartNumber',
								},
								'ETag': {
									'type': 'string',
									'sentAs': 'ETag',
								},
							},
						},
					},
				},
			},
			'CompleteMultipartUploadOutput': {
				'data': {
					'type': 'xml',
					'xmlRoot': 'CompleteMultipartUploadResult',
				},
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
					'VersionId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-version-id',
					},
					'Location': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'Location',
					},
					'Bucket': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'Bucket',
					},
					'Key': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'Key',
					},
					'ETag': {
						'type': 'string',
						'location': 'xml',
						'sentAs': 'ETag',
					},
				},
			},
			'SetBucketCors': {
				'httpMethod': 'PUT',
				'urlPath': 'cors',
				'responseClass': 'SetBucketCorsOutput',
				'data': {
					'xmlRoot': 'CORSConfiguration',
					'namespace': 'http://s3.amazonaws.com/doc/2006-03-01/',
				},
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'CorsRule': {
						'required': true,
						'type': 'array',
						'location': 'xml',
						'sentAs': 'CORSRule',
						'items': {
							'type': 'object',
							'parameters': {
								'ID': {
									'type': 'string',
									'sentAs': 'ID',
								},
								'AllowedMethod': {
									'type': 'array',
									'sentAs': 'AllowedMethod',
									'items': {
										'type': 'string',
									},
								},
								'AllowedOrigin': {
									'type': 'array',
									'sentAs': 'AllowedOrigin',
									'items': {
										'type': 'string',
									},
								},
								'AllowedHeader': {
									'type': 'array',
									'sentAs': 'AllowedHeader',
									'items': {
										'type': 'string',
									},
								},
								'MaxAgeSeconds': {
									'type': 'number',
									'sentAs': 'MaxAgeSeconds',
								},
								'ExposeHeader': {
									'type': 'array',
									'sentAs': 'ExposeHeader',
									'items': {
										'type': 'string',
									},
								},
							},
						},
					},
				},
			},
			'SetBucketCorsOutput': {
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
				},
			},
			'GetBucketCors': {
				'httpMethod': 'GET',
				'urlPath': 'cors',
				'responseClass': 'GetBucketCorsOutput',
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
				},
			},
			'GetBucketCorsOutput': {
				'data': {
					'type': 'xml',
					'xmlRoot': 'CORSConfiguration',
				},
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
					'CorsRule': {
						'type': 'array',
						'location': 'xml',
						'sentAs': 'CORSRule',
						'items': {
							'type': 'object',
							'parameters': {
								'ID': {
									'type': 'string',
									'sentAs': 'ID',
								},
								'AllowedMethod': {
									'type': 'array',
									'sentAs': 'AllowedMethod',
									'items': {
										'type': 'string',
									},
								},
								'AllowedOrigin': {
									'type': 'array',
									'sentAs': 'AllowedOrigin',
									'items': {
										'type': 'string',
									},
								},
								'AllowedHeader': {
									'type': 'array',
									'sentAs': 'AllowedHeader',
									'items': {
										'type': 'string',
									},
								},
								'MaxAgeSeconds': {
									'type': 'number',
									'sentAs': 'MaxAgeSeconds',
								},
								'ExposeHeader': {
									'type': 'array',
									'sentAs': 'ExposeHeader',
									'items': {
										'type': 'string',
									},
								},
							},
						},
					},
				},
			},
			'DeleteBucketCors': {
				'httpMethod': 'DELETE',
				'urlPath': 'cors',
				'responseClass': 'DeleteBucketCorsOutput',
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
				},
			},
			'DeleteBucketCorsOutput': {
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
				},
			},
			'OptionsBucket': {
				'httpMethod': 'OPTIONS',
				'responseClass': 'OptionsBucketOutput',
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'Origin': {
						'required': true,
						'type': 'string',
						'location': 'header',
						'sentAs': 'Origin',
					},
					'AccessControlRequestMethods': {
						'required': true,
						'type': 'array',
						'location': 'header',
						'sentAs': 'Access-Control-Request-Method',
						'items': {
							'type': 'string',
						},
					},
					'AccessControlRequestHeaders': {
						'type': 'array',
						'location': 'header',
						'sentAs': 'Access-Control-Request-Headers',
						'items': {
							'type': 'string',
						},
					},
				},
			},
			'OptionsBucketOutput': {
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
					'AccessContorlAllowOrigin': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'access-control-allow-origin',
					},
					'AccessContorlAllowHeaders': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'access-control-allow-headers',
					},
					'AccessContorlAllowMethods': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'access-control-allow-methods',
					},
					'AccessContorlExposeHeaders': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'access-control-expose-headers',
					},
					'AccessContorlMaxAge': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'access-control-max-age',
					},
				},
			},
			'OptionsObject': {
				'httpMethod': 'OPTIONS',
				'responseClass': 'OptionsObjectOutput',
				'parameters': {
					'Bucket': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'Key': {
						'required': true,
						'type': 'string',
						'location': 'uri',
					},
					'Origin': {
						'required': true,
						'type': 'string',
						'location': 'header',
						'sentAs': 'Origin',
					},
					'AccessControlRequestMethods': {
						'required': true,
						'type': 'array',
						'location': 'header',
						'sentAs': 'Access-Control-Request-Method',
						'items': {
							'type': 'string',
						},
					},
					'AccessControlRequestHeaders': {
						'type': 'array',
						'location': 'header',
						'sentAs': 'Access-Control-Request-Headers',
						'items': {
							'type': 'string',
						},
					},
				},
			},
			'OptionsObjectOutput': {
				'parameters': {
					'RequestId': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'x-amz-request-id',
					},
					'AccessContorlAllowOrigin': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'access-control-allow-origin',
					},
					'AccessContorlAllowHeaders': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'access-control-allow-headers',
					},
					'AccessContorlAllowMethods': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'access-control-allow-methods',
					},
					'AccessContorlExposeHeaders': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'access-control-expose-headers',
					},
					'AccessContorlMaxAge': {
						'type': 'string',
						'location': 'header',
						'sentAs': 'access-control-max-age',
					},
				},
			},
		}
	};

	this.getMode = function () {
		return mode;
	};

}

module.exports = Models;